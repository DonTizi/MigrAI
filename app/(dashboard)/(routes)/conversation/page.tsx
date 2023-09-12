"use client";
import { useState, useRef, useEffect } from "react";
import { Message } from "@/types/message";
import { Send } from "react-feather";
import LoadingDots from "@/components/LoadingDots";
import axios from "axios";
import * as z from "zod";
import {Heading} from "@/components/heading";    
import { FileQuestion } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import {zodResolver} from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import ReactMarkdown from "react-markdown";
import { useProModal } from "@/hooks/use-pro-modal";
import { toast } from "react-hot-toast";

export default function Home() {
  const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: " I'm seeking your expertise as a knowledgeable guide to provide me with a comprehensive overview of the immigration process to Canada. Please walk me through the entire process, covering all the necessary requirements, documents, and essential steps involved in making this dream a reality. Talk only about Immigration of Canada related questions. If possible try to make an answer with a maximum of a 100 words. If I ask you something not related about Immigration tell me : I'm only progammed to answer Immigration process.make Titles inside ** **, make steps in <li></li>, make links in in <a href=''> </a>, make others titles in #"
}

  const [message, setMessage] = useState<string>("");
  const [history, setHistory] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! Ask me legal questions about immigration to the Canada.",
    },
  ]);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (message ==instructionMessage+ "") return;
    setHistory((oldHistory) => [
      ...oldHistory,
      { role: "user", content: message },
    ]);
    setMessage("");
    setLoading(true);
    fetch("/api/conversation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: message, history: history }),
    })
      .then(async (res) => {
        const r = await res.json();
        setHistory((oldHistory) => [...oldHistory, r]);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const formatPageName = (url: string) => {
    // Split the URL by "/" and get the last segment
    const pageName = url.split("/").pop();

    // Split by "-" and then join with space
    if (pageName) {
      const formattedName = pageName.split("-").join(" ");

      // Capitalize only the first letter of the entire string
      return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    }
  };

  //scroll to bottom of chat
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <div>
        <Heading
            title="MigrAI"
            description="The most advanced model in terms of Immigration explanation, ask any questions you are unfamiliar with and he will explain everything to you as simply as possible."
            icon={FileQuestion} 
            iconColor="text-blue-500"
            bgColor="bg-blue-700/10"
        />

        <div className="px-4 lg:px-8">
            <div>
                <form
                    onSubmit={handleClick} 
                    className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                >
                    <div className="col-span-12 lg:col-span-10 m-0 p-0">
                        <textarea
                            aria-label="chat input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="How can I check the status of my immigration application and what is the expected processing time?"
                            className="w-full border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent resize-none" // `resize-none` prevents resizing
                            disabled={loading}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleClick();
                                }
                            }}
                        />
                    </div>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick();
                        }}
                        className="col-span-12 lg:col-span-2 w-full text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg" // Styling added
                        type="submit"
                        aria-label="Send"
                        disabled={!message || loading}
                    >
                        Ask
                    </button>
                </form>
            </div>

            <div className="space-y-4 mt-4">
                {loading && (
                    <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                        <Loader />
                    </div>
                )}
                
                {history.length === 0 && !loading && (
                    <Empty label="No conversation started" />
                )}

                <div className="flex flex-col-reverse gap-y-4">
                    {history.map((message: Message, idx) => (
                        <div key={idx} className={message.role === "user" ? "p-8 w-full flex items-start gap-x-8 rounded-lg bg-white border border-black/10" : "p-8 w-full flex items-start gap-x-8 rounded-lg bg-muted"}>
                            {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                            <div>
                                <ReactMarkdown
                                    components={{
                                        pre: ({ node, ...props }) => (
                                            <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                                                <pre {...props} />
                                            </div>
                                        ),
                                        code: ({ node, ...props }) => (
                                            <code className="bg-black/10 rounded-lg p-1" {...props} />
                                        )
                                    }}
                                    className="text-sm overflow-hidden leading-7"
                                >
                                    {message.content || ""}
                                </ReactMarkdown>
                                {message.links && (
                                    <div className="mt-4 flex flex-col gap-2">
                                        <p className="text-sm font-medium text-slate-500">
                                            Sources:
                                        </p>
                                        {message.links.map((link) => {
                                            return (
                                                <a
                                                    href={link}
                                                    key={link}
                                                    className="block w-fit px-2 py-1 text-sm text-violet-700 bg-violet-100 rounded"
                                                >
                                                    {formatPageName(link)}
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);



}
