"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const freeFeatures = [
  "1 daily challenge",
  "3 spending categories",
  "Basic streak tracking",
  "Limited behavioral profile",
  "Community access",
];

const proFeatures = [
  "Unlimited daily challenges",
  "All spending categories",
  "Advanced streak analytics",
  "Full behavioral profile",
  "Bank integration",
  "Export your data",
  "Priority support",
];

const comparisonRows = [
  { feature: "Daily Challenges", free: "1", pro: "Unlimited" },
  { feature: "Categories", free: "3", pro: "All" },
  { feature: "Streak Tracking", free: "Basic", pro: "Advanced" },
  { feature: "Behavioral Profile", free: "Limited", pro: "Full" },
  { feature: "Bank Integration", free: "No", pro: "Yes" },
  { feature: "Export Data", free: "No", pro: "Yes" },
  { feature: "Priority Support", free: "No", pro: "Yes" },
];

function CheckIcon({ className = "text-[#1B4332]" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const proPrice = annual ? "$7.99" : "$9.99";
  const proPeriod = "/mo";
  const proBilling = annual ? "Billed annually" : "Billed monthly";

  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-[#6B6B6B]">
            Start free. Upgrade when you&apos;re ready.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={`text-sm font-medium transition-colors ${
              !annual ? "text-[#1A1A1A]" : "text-[#B0B0A8]"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-7 rounded-full transition-colors ${
              annual ? "bg-[#1B4332]" : "bg-[#E8E8E0]"
            }`}
          >
            <div
              className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                annual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              annual ? "text-[#1A1A1A]" : "text-[#B0B0A8]"
            }`}
          >
            Annual
          </span>
          {annual && (
            <span className="text-xs font-medium text-[#1B4332] bg-[#1B4332]/10 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-20">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border-2 border-[#1B4332]/15 rounded-2xl p-8"
          >
            <h3
              className="text-xl font-bold text-[#1A1A1A] mb-1"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Free
            </h3>
            <p className="text-sm text-[#6B6B6B] mb-6">
              Get started with the basics
            </p>
            <div className="flex items-baseline gap-1 mb-6">
              <span
                className="text-5xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                $0
              </span>
              <span className="text-[#6B6B6B] text-sm">/forever</span>
            </div>
            <button className="w-full border-2 border-[#1B4332] text-[#1B4332] font-semibold py-3 rounded-xl hover:bg-[#1B4332] hover:text-white transition-colors text-sm mb-8">
              Get Started
            </button>
            <ul className="space-y-3">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#4A4A4A]">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1B4332] rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,160,23,0.12),transparent_50%)]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-1">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  Pro
                </h3>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D4A017] text-[#1A1A1A]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  PRO
                </span>
              </div>
              <p className="text-sm text-white/60 mb-6">
                Unlock your full potential
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className="text-5xl font-bold"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {proPrice}
                </span>
                <span className="text-white/60 text-sm">{proPeriod}</span>
              </div>
              <p
                className="text-xs text-white/40 mb-6"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {proBilling}
              </p>
              <button className="w-full bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-semibold py-3 rounded-xl transition-colors text-sm mb-8">
                Upgrade to Pro
              </button>
              <ul className="space-y-3">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckIcon className="text-[#D4A017]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h2
            className="text-2xl font-bold text-[#1A1A1A] text-center mb-8"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Feature comparison
          </h2>
          <div className="bg-white rounded-2xl border border-[#E8E8E0] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 px-6 py-4 border-b border-[#E8E8E0] bg-[#FAFAF7]">
              <span className="text-sm font-semibold text-[#1A1A1A]">Feature</span>
              <span className="text-sm font-semibold text-[#1A1A1A] text-center">Free</span>
              <span className="text-sm font-semibold text-[#D4A017] text-center">Pro</span>
            </div>
            {/* Table rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#FAFAF7]/50"
                } ${i < comparisonRows.length - 1 ? "border-b border-[#E8E8E0]/50" : ""}`}
              >
                <span className="text-sm text-[#4A4A4A]">{row.feature}</span>
                <span className="text-sm text-[#6B6B6B] text-center">{row.free}</span>
                <span className="text-sm text-[#1B4332] font-medium text-center">{row.pro}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
