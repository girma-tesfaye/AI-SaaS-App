import { auth } from "@clerk/nextjs";
import { NextResponse} from "next/server";
import OpenAIApi from 'openai';
import ChatCompletionRequestMessage from 'openai';
import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription";

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

const instructionMessages: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippent. Use code comments for explanation."
}

export async function POST ( req: Request ) {
    //return console.log("hdskfhksjgjgfndsjfgdhsjka,hAKLS");
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401});
        }

        if (!openai.apiKey) {
            return new NextResponse("OpenAI API key not configured", { status: 500})
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 })
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial has expired.", { status: 403 });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessages, ...messages]
        });

        if (!isPro) {
            await incrementApiLimit();
        }

        return NextResponse.json(response.choices[0].message);
    } catch (error) {
        console.log("[CODE_ERROR", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}