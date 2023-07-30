"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Camille",
    avatar: "S",
    title: "Marketing Manager",
    description: "This AI tool was a lifesaver, guiding me step-by-step through the Canadian immigration process and making it a breeze",
  },
  {
    name: "Hamza",
    avatar: "M",
    title: "Designer",
    description: "Having a virtual immigration guru like this AI tool made all the difference, answering my questions and providing personalized tips for a successful journey to Canada.",
  },
  {
    name: "Jade",
    avatar: "E",
    title: "Teacher",
    description: " making my dream of moving to Canada a reality with its dependable guidance and caring assistance.",
  },
  {
    name: "Manon",
    avatar: "D",
    title: "Accountant",
    description: "Very hepful , and available 24/24.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}