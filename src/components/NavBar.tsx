"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "./ModeToggler";
import { BookOpenCheck } from "lucide-react";
import { RainbowButton } from "./magicui/rainbow-button";
import { redirect } from "next/navigation";
export function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex justify-center items-center gap-3">
            <BookOpenCheck className="h-8 w-8 text-emerald-400" />
            <span className="text-xl font-bold tracking-tight">
              Doubt<span className="text-amber-300">Hub</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              onClick={() => redirect("/login")}
            >
              <RainbowButton variant="outline">Login</RainbowButton>
            </NavbarButton>
            <NavbarButton variant="primary" className="p-0">
              <ModeToggle />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex justify-center items-center gap-3">
              <BookOpenCheck className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold tracking-tight">
                Doubt<span className="text-amber-300">Hub</span>
              </span>
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-4">
              <RainbowButton
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  redirect("/login");
                }}
                variant="outline"
              >
                Login
              </RainbowButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-0 w-0"
              >
                <ModeToggle />
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
