"use client"

import {
  ArrowBigRightDashIcon,
  CodeIcon,
  FileAudioIcon,
  GalleryVerticalIcon,
  LayoutDashboardIcon,
  MessageCircleIcon,
  PlaySquareIcon,
  Settings,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tools = [
  {
    label: "Conversation",
    icon: MessageCircleIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label: "Music Generation",
    icon: FileAudioIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music"
  },
  {
      label: "Video Generation",
      icon: PlaySquareIcon,
      color: "text-orange-700",
      bgColor: "bg-green-700/10",
      href: "/video"
  },
  {
    label: "Image Generation",
    icon: GalleryVerticalIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image"
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code"
  }
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Explor the power of AI</h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
            Chat with the smartest AI - Experience the power of AI
          </p>
          <div className="px-4 md:px-20 lg:px-32 space-y-4">
            {tools.map((tool) => (
              <Card
                key={tool.href}
                onClick={() => router.push(tool.href)}
                className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer" 
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)}/>
                  </div>
                  <div className="font-semibold">
                    {tool.label}
                  </div>
                </div>
                <ArrowBigRightDashIcon className="w-5 h-5"/>
              </Card>
            ))}
          </div>
        </div>
    </div>
  )
}
export default DashboardPage;