"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-[#E8E8E0] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1B4332] font-bold text-sm" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>C</div>
            <span className="text-lg font-bold text-[#1A1A1A]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Coinstack</span>
          </Link>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4A4A4A] hover:text-[#1B4332] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/signin"
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#1B4332] px-4 py-2 rounded-lg transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/onboarding"
              className="bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="inline-flex items-center justify-center rounded-md p-2 text-[#4A4A4A] hover:bg-[#F5F5F0] transition-colors">
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-[#1A1A1A] hover:text-[#1B4332]"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <hr className="border-[#E8E8E0]" />
                  <Link
                    href="/auth/signin"
                    className="w-full text-center py-2.5 border border-[#E8E8E0] rounded-lg text-sm font-medium text-[#1A1A1A] hover:bg-[#F5F5F0] transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/onboarding"
                    className="w-full text-center py-2.5 bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-semibold rounded-lg transition-colors"
                  >
                    Start Free
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
