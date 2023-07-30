"use client";
import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogDescription, DialogFooter} from "./ui/dialog";
import { Badge } from "./ui/badge";
import {ArrowRight, User2 , ImageIcon, Music, FileQuestion , Calculator, Check, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";


const tools = [
    {
      label: "Immigration Explainer",
      icon: FileQuestion ,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      href: "/conversation"
    },
  
    {
      label: "Process Simulation",
      icon: Calculator,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: "/code"
    },  
    {
        label: "Virtual Interview",
        icon: User2 ,
        color: "text-purple-700",
        bgColor: "bg-purple-700/10",
        href: "/image"
      }
]
    
export const ProModal =() => {


    const proModal = useProModal();
    const [loading, setLoading] = useState(false);
    const onSubscribe = async ()=> {
       try {
        setLoading(true);
        const response = await axios.get("/api/stripe");

        window.location.href = response.data.url

       }
       catch(error){
        console.log(error, "STRIPE_CLIENT_ERROR")
       } finally{
        setLoading(false);
       }
    }

    return (

            <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                        Upgrade to MigrAI
                            <Badge variant="premium"  className="uppercase text-sm py-1">
                                pro
                            </Badge>
                        </div>
                        </DialogTitle>
                        <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                            {tools.map((tool) => (
                                <Card
                                key={tool.label}
                                className="p-3 border-black/5 flex items-center">
                                    <div className="flex items-center gap-x-4">
                                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                            <tool.icon className={cn("w-6 h-6", tool.color)} />

                                        </div>
                                        <div className="font-semibold text-sm">
                                        {tool.label}
                                        </div>
                                        <Check className="text-primary w-5 h-5"/>
                                    </div>
                                </Card>
                            ))}

                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                        disabled={loading}
                        onClick={onSubscribe}
                        size="lg"
                        variant="premium"
                        className="w-full">
                            Upgrade
                            <Zap className="w-4 h-4 ml-2 fill-white" />
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

    )
}