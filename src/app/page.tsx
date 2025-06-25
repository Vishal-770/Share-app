"use client";

import React from "react";
import { NavbarDemo } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magicui/magic-card";
import { Marquee } from "@/components/magicui/marquee";
import { SparklesText } from "@/components/magicui/sparkles-text";

import { UploadCloud, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { useTheme } from "next-themes";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { div } from "motion/react-client";
import { redirect } from "next/navigation";

const Page = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="sticky top-0 left-0 z-50">
        <NavbarDemo />
      </div>
      <div className="bg-background text-foreground">
        <section className="relative h-screen w-full overflow-hidden">
          <RetroGrid />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <AuroraText
              className="text-4xl md:text-6xl font-bold leading-tight  text-transparent"
              colors={["#22c55e", "#00F260", "#00DBDE", "#38bdf8"]}
            >
              Got Doubts?
            </AuroraText>

            <SparklesText className="text-3xl md:text-5xl font-bold text-primary mt-2">
              Get Instant Answers
            </SparklesText>

            <TypingAnimation className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              Join thousands of students solving questions together on DoubtHub.
            </TypingAnimation>
            <div className="mt-8 flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-yellow-400 text-black hover:brightness-110"
                onClick={() => redirect("/home")}
              >
                Ask a Doubt
              </Button>
              <Button size="lg" variant="outline" onClick={() => redirect("/home")}>
                Browse Answers
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 grid gap-8 md:grid-cols-3">
          <MagicCard
            gradientFrom="#00FF00"
            gradientTo="#FFFF00"
            className="rounded-2xl p-6"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex items-center mb-4">
              <span className="mr-3 text-green-500">
                <UploadCloud className="w-8 h-8" />
              </span>
              <h3 className="text-xl font-semibold">1. Post Your Doubt</h3>
            </div>
            <p className="text-muted-foreground">
              Ask anonymously or openly with tags.
            </p>
          </MagicCard>

          <MagicCard
            className="rounded-2xl p-6"
            gradientFrom="#00FF00"
            gradientTo="#FFFF00"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex items-center mb-4">
              <span className="mr-3 text-green-500">
                <MessageSquareQuote className="w-8 h-8" />
              </span>
              <h3 className="text-xl font-semibold">2. Get Quick Replies</h3>
            </div>
            <p className="text-muted-foreground">
              Students and mentors respond in minutes.
            </p>
          </MagicCard>

          <MagicCard
            className="rounded-2xl p-6"
            gradientFrom="#00FF00"
            gradientTo="#FFFF00"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex items-center mb-4">
              <span className="mr-3 text-green-500">
                <CheckCircle2 className="w-8 h-8" />
              </span>
              <h3 className="text-xl font-semibold">3. Mark as Solved</h3>
            </div>
            <p className="text-muted-foreground">
              Track helpful answers and close resolved doubts.
            </p>
          </MagicCard>
        </section>

        <section className="py-10 border-t">
          <Marquee className="text-lg font-semibold">
            🎉 DoubtHub Beta is now live — Start solving doubts with the
            community today!
          </Marquee>
        </section>

        <footer className="border-t py-10 px-6 text-sm bg-background text-muted-foreground">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-muted-foreground">
              &copy; 2025{" "}
              <span className="font-semibold text-primary">DoubtHub</span>. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="transition-colors hover:text-primary hover:underline underline-offset-4"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="transition-colors hover:text-primary hover:underline underline-offset-4"
              >
                Terms
              </a>
              <a
                href="#"
                className="transition-colors hover:text-primary hover:underline underline-offset-4"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;
