"use client"

import { useAuth } from "@clerk/nextjs"
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold my-text-color">
                <h1>Explore the AI&apos;s power</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 my-text-color">
                    <TypewriterComponent 
                        options={{
                            strings: [
                                "Chatbot.",
                                "AI Image Generation.",
                                "AI Music Generation.",
                                "AI Code Generation.",
                                "AI Video Generation.",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light my-text-color">
                Using Hep of AI Makes Simplified.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard": "/sign-up"}>
                    <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold my-text-color">
                        Explore using for Free
                    </Button>
                </Link>
            </div>
            <div className="text-white text-xs md:text-sm font-normal my-text-color">
                No credit card required
            </div>
        </div>
    )
}