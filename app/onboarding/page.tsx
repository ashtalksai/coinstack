"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockTransactions, mockChallenges } from "@/lib/mock-data";
import { ChallengeCard } from "@/components/challenge-card";
import Link from "next/link";

const goals = [
  "I want to stop overspending",
  "I need to build an emergency fund",
  "I want to pay off debt faster",
  "I want to be more mindful with money",
  "Just curious!",
];

const banks = ["Chase", "Bank of America", "Wells Fargo", "Capital One"];

function ProgressDots({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-3 justify-center pt-8 pb-6">
      {[1, 2, 3, 4].map((s) => (
        <div
          key={s}
          className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
          style={{
            backgroundColor:
              s === step ? "#D4A017" : s < step ? "#1B4332" : "rgba(255,255,255,0.2)",
          }}
        />
      ))}
    </div>
  );
}

function GoldParticles() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    size: 4 + Math.random() * 8,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: "#D4A017",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [analyzeProgress, setAnalyzeProgress] = useState(0);

  // Step 3: auto-advance after 3 seconds
  useEffect(() => {
    if (step !== 3) return;
    const timer = setTimeout(() => setStep(4), 3000);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Step 1 — Why are you here? */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex flex-col"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <ProgressDots step={1} />
            <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
              <h1
                className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                What brought you to Coinstack?
              </h1>
              <div className="w-full max-w-md space-y-3">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setSelectedGoal(goal)}
                    className="w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-white"
                    style={{
                      borderColor:
                        selectedGoal === goal ? "#D4A017" : "rgba(255,255,255,0.12)",
                      backgroundColor:
                        selectedGoal === goal
                          ? "rgba(212,160,23,0.08)"
                          : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <span className="text-sm md:text-base">{goal}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!selectedGoal}
                className="mt-8 px-10 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#D4A017",
                  color: "#1A1A1A",
                }}
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2 — Mock Bank Connection */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex flex-col"
            style={{ backgroundColor: "#1B4332" }}
          >
            <ProgressDots step={2} />
            <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
              <h1
                className="text-3xl md:text-4xl font-bold text-white text-center mb-3"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Connect your bank
              </h1>
              <p className="text-white/60 text-center mb-10 max-w-md">
                We&apos;ll analyze your spending to create personalized challenges
              </p>

              <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-10">
                {banks.map((bank) => (
                  <div
                    key={bank}
                    className="bg-white rounded-xl px-4 py-5 text-center cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <span
                      className="text-sm font-semibold text-[#1A1A1A]"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {bank}
                    </span>
                  </div>
                ))}
              </div>

              {/* Security badge */}
              <div className="flex items-center gap-2 mb-8">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div className="text-xs text-white/60">
                  <span className="block">Bank-level 256-bit encryption</span>
                  <span className="block">We never store your credentials</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => setStep(3)}
                  className="px-10 py-3.5 rounded-xl font-semibold text-sm"
                  style={{ backgroundColor: "#D4A017", color: "#1A1A1A" }}
                >
                  Connect Bank
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="text-sm text-white/50 hover:text-white/80 transition-colors py-2"
                >
                  Skip for now
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3 — Analyzing */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex flex-col"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <ProgressDots step={3} />
            <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
              <h1
                className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Analyzing your transactions...
              </h1>

              {/* Animated progress bar */}
              <div className="w-full max-w-md h-2 rounded-full bg-white/10 mb-10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: "#D4A017" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </div>

              {/* Staggered transaction list */}
              <div className="w-full max-w-md space-y-2">
                {mockTransactions.slice(0, 8).map((tx, i) => (
                  <motion.div
                    key={tx.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3, duration: 0.35 }}
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5"
                  >
                    <div>
                      <span className="text-sm text-white">{tx.merchant}</span>
                      <span
                        className="ml-2 text-xs text-white/40"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {tx.category}
                      </span>
                    </div>
                    <span
                      className="text-sm text-white/70"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      ${tx.amount.toFixed(2)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4 — First Challenge Reveal */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col relative"
            style={{ backgroundColor: "#FAFAF7" }}
          >
            <GoldParticles />
            <ProgressDots step={4} />
            <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12 relative z-10">
              <h1
                className="text-3xl md:text-4xl font-bold text-center mb-10"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  color: "#1B4332",
                }}
              >
                Your first challenge is ready
              </h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="w-full max-w-md mb-8"
              >
                <ChallengeCard
                  category={mockChallenges[0].category}
                  text={mockChallenges[0].text}
                  context={mockChallenges[0].context}
                  showActions={false}
                />
              </motion.div>

              <Link
                href="/dashboard"
                className="px-10 py-3.5 rounded-xl font-semibold text-sm inline-block"
                style={{ backgroundColor: "#D4A017", color: "#1A1A1A" }}
              >
                Accept Challenge
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
