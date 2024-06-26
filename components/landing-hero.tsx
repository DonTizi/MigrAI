"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Immigration AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          <TypewriterComponent
            options={{
              strings: [
                "Explanation.",
                "Documentation.",
                "Interviews.",
                "Simulations."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
      Get AI-driven Immigration process 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="ask" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
          Start Smart with AI
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
      The solution for your agency, available at any time.
      </div>
    </div>
  );
};
