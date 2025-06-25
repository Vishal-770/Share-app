"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signInWithGithub, signInWithGoogle } from "@/actions/auth";
import React, { useTransition } from "react";
import { BookOpenCheck, BrainCircuit, Check, Loader2 } from "lucide-react";

import Link from "next/link";
import { redirect } from "next/navigation";

const Login = () => {
  const [isPendingGithub, startGithub] = useTransition();
  const [isPendingGoogle, startGoogle] = useTransition();

  const handleGithubLogin = () => {
    startGithub(async () => {
      await signInWithGithub();
    });
  };

  const handleGoogleLogin = () => {
    startGoogle(async () => {
      await signInWithGoogle();
    });
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
      {/* App Logo/Branding */}
      <div
        className="absolute top-6 left-6 flex items-center gap-2 cursor-pointer"
        onClick={() => redirect("/")}
      >
        <BookOpenCheck className="h-8 w-8 text-emerald-400" />
        <span className="text-xl font-bold tracking-tight">
          Doubt<span className="text-amber-300">Hub</span>
        </span>
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <Card className="bg-zinc-900 border border-zinc-800 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <BookOpenCheck className="mx-auto h-10 w-10 text-emerald-400" />
            <CardTitle className="text-2xl font-bold tracking-tight text-green-100">
              Welcome to{" "}
              <span className="text-xl font-bold tracking-tight text-white">
                Doubt<span className="text-amber-300">Hub</span>
              </span>
            </CardTitle>
            <CardDescription className="text-sm text-zinc-400">
              The platform for students to ask, answer, and resolve doubts
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-900 px-2 text-zinc-500">
                  Continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button
                variant="outline"
                className="gap-2 border-emerald-500 text-emerald-400 hover:bg-emerald-900/10"
                onClick={handleGithubLogin}
                disabled={isPendingGithub}
              >
                {isPendingGithub ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <FaGithub className="h-4 w-4 text-emerald-500" />
                )}
                <span className="hidden sm:inline">GitHub</span>
              </Button>

              <Button
                variant="outline"
                className="gap-2 border-amber-400 text-amber-400 hover:bg-amber-900/10"
                onClick={handleGoogleLogin}
                disabled={isPendingGoogle}
              >
                {isPendingGoogle ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <FaGoogle className="h-4 w-4 text-amber-300" />
                )}
                <span className="hidden sm:inline">Google</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <p className="px-8 text-center text-sm text-zinc-400">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-emerald-300"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-amber-300"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </CardFooter>
        </Card>

        {/* App Features */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-emerald-300">
            Why DoubtHub?
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Instant help from peers and educators</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Organized by subjects and difficulty levels</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Community voting for best answers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-xs text-zinc-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-emerald-400">DoubtHub</span> - For
        Students, By Students
      </div>
    </div>
  );
};

export default Login;
