"use client"

import { 
    CodeIcon,
    FileAudioIcon,
    GalleryVerticalIcon,
    LayoutDashboardIcon,
    MessageCircleIcon,
    PlaySquareIcon,
    Settings,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./free-counter";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboardIcon,
        href:"/dashboard",
        color: "text-sky-500",
        
    },
    {
        label: "Conversation",
        icon: MessageCircleIcon,
        href:"/conversation",
        color: "text-violet-500",
        
    },
    {
        label: "Image Generation",
        icon: GalleryVerticalIcon,
        href:"/image",
        color: "text-pink-700",
        
    },
    {
        label: "Video Generation",
        icon: PlaySquareIcon,
        href:"/video",
        color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: FileAudioIcon,
        href:"/music",
        color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        href:"/code",
        color: "text-green-700",
    },
    {
        label: "Settings",
        icon: Settings,
        href:"/settings",
    }    
]

interface SidebarProps {
    apiLimitCount: number,
    isPro: boolean
}

const SideBar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
    const pathname = usePathname();
    return (    
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#000] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image className="rounded-lg" fill alt="Logo" src="/logo.JPEG"/>
                    </div>
                    <h1 className={cn("text-2xl font-bold my-text-color", montserrat.className)}>ThinkerAI</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link 
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400" )}
                        >
                            <div className="flex items-center flex-1 text-white">
                                <route.icon className=/* {cn( */"h-5 w-5 mr-3 text-white"/* , route.color)} *//>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount}/>
        </div>
    )
}

export default SideBar;