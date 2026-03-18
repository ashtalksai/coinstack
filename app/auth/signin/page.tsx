"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SignInPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen">
      {/* Left Panel — hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1B4332] flex-col items-center justify-center px-12 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,160,23,0.08),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-sm text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div
              className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1B4332] font-bold text-lg"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              C
            </div>
            <span
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Coinstack
            </span>
          </div>

          {/* Value Prop */}
          <h2
            className="text-3xl font-bold text-white leading-tight mb-8"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Build better money habits in 3 minutes a day
          </h2>

          {/* Features */}
          <div className="space-y-4 text-left">
            {[
              "Daily personalized challenges",
              "Behavioral insights",
              "Streak tracking",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#D4A017]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-[#FAFAF7]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-sm"
        >
          {/* Mobile logo */}
          <div className="flex items-center justify-center gap-2 mb-10 lg:hidden">
            <div
              className="w-8 h-8 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1B4332] font-bold text-sm"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              C
            </div>
            <span
              className="text-lg font-bold text-[#1A1A1A]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Coinstack
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl font-bold text-[#1A1A1A] mb-2"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Welcome back
          </h1>
          <p className="text-[#6B6B6B] mb-8">Sign in to continue your streak</p>

          {/* Email Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1A1A1A] mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#E8E8E0] bg-white text-[#1A1A1A] placeholder:text-[#B0B0A8] focus:outline-none focus:ring-2 focus:ring-[#D4A017]/40 focus:border-[#D4A017] transition-all text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
            >
              Send Magic Link
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#E8E8E0]" />
            <span className="text-xs text-[#B0B0A8]">or</span>
            <div className="flex-1 h-px bg-[#E8E8E0]" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-[#E8E8E0] hover:border-[#CBCBC3] bg-white hover:bg-[#F5F5F0] py-3 px-6 rounded-xl transition-colors text-sm font-medium text-[#1A1A1A]">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {/* Trust line */}
          <p
            className="text-center text-xs text-[#B0B0A8] mt-8"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Your bank data never touches our servers.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
