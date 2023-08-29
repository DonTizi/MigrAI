"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPreviews = [
  {
    author: "Immigration Explainer",
    avatar: "M",
    title: "How to use the Immigration Explainer?",
    excerpt: "Immigration Explainer Tool: Navigating Canadian Immigration Made Simple...",
    link: "/blog/Immigration-Explainer-Tool",
  },
  {
    author: "Process Simulation",
    avatar: "S",
    title: "How to use the Process Simulation?",
    excerpt: "Enter the Immigration Process Simulator, an innovative tool that...",
    link: "/blog/Immigration-Process-Simulation",
  },
  {
    author: "Migrai",
    avatar: "M",
    title: "How MigrAI Can Help You?",
    excerpt: "MigrAI, a revolutionary platform designed to streamline the Canadian...",
    link: "/blog/migrai",
  },

  
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Guides & Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {blogPreviews.map((item) => (
           <a href={item.link} key={item.excerpt} className="block transition-transform transform hover:scale-105"> {/* Wrap the Card with an anchor tag */}
           <Card className="bg-[#1b2952] border-none text-white cursor-pointer">
             <CardHeader>
               <CardTitle className="flex items-center gap-x-2">
                 <div>
                   <p className="text-lg">{item.author}</p>
                   <p className="text-zinc-400 text-sm">{item.title}</p>
                 </div>
               </CardTitle>
               <CardContent className="pt-4 px-0">
                 <p>{item.excerpt}</p>
                 <span className="text-blue-500 hover:underline">Read More</span> {/* Changed anchor tag to span because nested anchors are not valid HTML */}
               </CardContent>
             </CardHeader>
           </Card>
         </a>
        ))}
      </div>
    </div>
  )
}
