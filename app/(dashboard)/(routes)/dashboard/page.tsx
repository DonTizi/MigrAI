"use client";

import {ArrowRight, FileQuestion , User2 , Calculator } from "lucide-react";
import {Card} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Script from 'next/script'


const tools = [
  {
    label: " Immigration Explainer",
    icon: FileQuestion ,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/conversation"
  },

  {
    label: "Process Simulation",
    icon: Calculator,
    color: "text-green-700",
    bgColor: "bg-green-500/10",
    href: "/code"
  },
  {
    label: " Virtual Interview",
    icon: User2 ,
    color: "text-purple-700",
    bgColor: "bg-purple-500/10",
    href: "/image"
  },
  

]

export default function DashboardPage() {
  const router = useRouter()
  return (
    <div>
      <Script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></Script>
      <Script src="https://rayanemeldz.github.io/FarahAICSS/CSS/config.js" defer></Script>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Explore the Power of MigrAI
          </h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
            Chat with the smartest Immigration AI - with all transparency
          </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">
                  {tool.label}
                </div>
                <ArrowRight className="w-5 h-5" />
              </div>

            </Card>

          ))}
        </div>
          </div>
  )
}

