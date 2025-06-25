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
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 dark:from-slate-900 dark:to-slate-800">
      {/* App Logo/Branding */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <BookOpenCheck className="h-8 w-8 text-primary" />
        <span className="text-xl font-bold tracking-tight">
          Doubt<span className="text-primary">Hub</span>
        </span>
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <Card className="border-none shadow-lg dark:border dark:shadow-slate-700/25">
          <CardHeader className="space-y-1 text-center">
            <BrainCircuit className="mx-auto h-10 w-10" />
            <CardTitle className="text-2xl font-bold tracking-tight">
              Welcome to DoubtHub
            </CardTitle>
            <CardDescription className="text-sm">
              The platform for students to ask, answer, and resolve doubts
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleGithubLogin}
                disabled={isPendingGithub}
              >
                {isPendingGithub ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <FaGithub className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">GitHub</span>
              </Button>

              <Button
                variant="outline"
                className="gap-2"
                onClick={handleGoogleLogin}
                disabled={isPendingGoogle}
              >
                {isPendingGoogle ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <FaGoogle className="h-4 w-4 text-blue-600" />
                )}
                <span className="hidden sm:inline">Google</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <p className="px-8 text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </CardFooter>
        </Card>

        {/* App Features */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Why DoubtApp?</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Instant help from peers and educators</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Organized by subjects and difficulty levels</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Community voting for best answers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} DoubtHub - For Students, By Students
      </div>
    </div>
  );
};

export default Login;
