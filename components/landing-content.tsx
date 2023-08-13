"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPreviews = [
  {
    author: "MigrAI Guide from A to Z",
    avatar: "M",
    title: "How to Use MigrAI",
    excerpt: "Immigration Explainer Tool: Navigating Canadian Immigration Made Simple...",
    link: "/blog/Immigration-Explainer-Tool",
  },
  {
    author: "Students",
    avatar: "S",
    title: "Simplifying Canadian Immigration.",
    excerpt: "With a 60% study permit approval rate, the Canadian immigration...",
    link: "/blog/Simplifying-Canadian-Immigration-for-Students",
  },
  {
    author: "Applying for Canadian Jobs",
    avatar: "M",
    title: "3 Ways to Apply for a Job in Canada",
    excerpt: "Immigrating to a new country involves more than just paperwork...",
    link: "/blog/3-Ways-to-Apply-for-a-Job-in-Canada",
  },
  {
    author: "Canadian Work Visa",
    avatar: "M",
    title: "Understanding the work visa process",
    excerpt: "Canada, with its robust economy, offers numerous job...",
    link: "/blog/The-Canadian-Work-Visa-Guide",
  },
  
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Guides & Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogPreviews.map((item) => (
           <a href={item.link} key={item.excerpt} className="block transition-transform transform hover:scale-105"> {/* Wrap the Card with an anchor tag */}
           <Card className="bg-[#192339] border-none text-white cursor-pointer">
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
