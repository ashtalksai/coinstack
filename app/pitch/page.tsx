"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChallengeCard } from "@/components/challenge-card";

const TOTAL_SLIDES = 8;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function PitchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = useCallback(
    (dir: number) => {
      const next = currentSlide + dir;
      if (next < 0 || next >= TOTAL_SLIDES) return;
      setDirection(dir);
      setCurrentSlide(next);
    },
    [currentSlide]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  return (
    <div className="relative h-screen w-screen overflow-hidden select-none">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {currentSlide === 0 && <SlideHero />}
          {currentSlide === 1 && <SlideProblem />}
          {currentSlide === 2 && <SlideSolution />}
          {currentSlide === 3 && <SlideHowItWorks />}
          {currentSlide === 4 && <SlideProduct />}
          {currentSlide === 5 && <SlideMarket />}
          {currentSlide === 6 && <SlideBusinessModel />}
          {currentSlide === 7 && <SlideCTA />}
        </motion.div>
      </AnimatePresence>

      {/* Arrow buttons — hidden on mobile */}
      {currentSlide > 0 && (
        <button
          onClick={() => navigate(-1)}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white/60 hover:text-white transition-colors z-20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {currentSlide < TOTAL_SLIDES - 1 && (
        <button
          onClick={() => navigate(1)}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white/60 hover:text-white transition-colors z-20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentSlide ? 1 : -1);
              setCurrentSlide(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentSlide
                ? "bg-[#D4A017] w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Tap zones for mobile */}
      <div
        className="absolute inset-y-0 left-0 w-1/3 z-10 md:hidden"
        onClick={() => navigate(-1)}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/3 z-10 md:hidden"
        onClick={() => navigate(1)}
      />
    </div>
  );
}

/* ─── Slide Components ─── */

function SlideHero() {
  return (
    <div className="h-full w-full bg-[#1B4332] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,160,23,0.1),transparent_60%)]" />
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div
            className="w-14 h-14 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1B4332] font-bold text-2xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            C
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-white"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Coinstack
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-white/70 mb-16">
          Duolingo for Personal Finance
        </p>
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-white/40"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Press &rarr; to start
        </motion.p>
      </div>
    </div>
  );
}

function SlideProblem() {
  return (
    <div className="h-full w-full bg-[#1A1A1A] flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Gen Z knows more about money than any generation before.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-[#D4A017] mb-12"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          And they&apos;re still broke.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <p
              className="text-4xl md:text-5xl font-bold text-[#D4A017]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              73%
            </p>
            <p className="text-sm text-white/50 mt-2">paycheck to paycheck</p>
          </div>
          <div className="text-center">
            <p
              className="text-4xl md:text-5xl font-bold text-[#D4A017]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              $1.75T
            </p>
            <p className="text-sm text-white/50 mt-2">student debt</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SlideSolution() {
  return (
    <div className="h-full w-full bg-[#1B4332] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,160,23,0.08),transparent_50%)]" />
      <div className="relative z-10 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          The Habit Engine
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-white/70 mb-4"
        >
          We don&apos;t track budgets. We build habits.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-white/50"
        >
          Daily micro-challenges based on your real spending.
        </motion.p>
      </div>
    </div>
  );
}

function SlideHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Connect",
      desc: "Link your bank account securely in under 30 seconds.",
    },
    {
      num: "02",
      title: "Challenge",
      desc: "Get a daily micro-challenge tailored to your spending.",
    },
    {
      num: "03",
      title: "Habit",
      desc: "Build lasting financial habits through consistency.",
    },
  ];

  return (
    <div className="h-full w-full bg-[#FAFAF7] flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-center mb-16"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          How it works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="text-center"
            >
              <p
                className="text-sm text-[#D4A017] mb-3"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {step.num}
              </p>
              <h3
                className="text-2xl font-bold text-[#1A1A1A] mb-3"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideProduct() {
  return (
    <div className="h-full w-full bg-[#1B4332] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(212,160,23,0.08),transparent_50%)]" />
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white mb-10"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          The Challenge Card
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-sm mx-auto"
        >
          <ChallengeCard
            category="SPENDING"
            date="Day 12"
            text="Before your next purchase today, wait 10 minutes and ask: do I need this?"
            context="Based on 3 impulse purchases this week"
            showActions={false}
          />
        </motion.div>
      </div>
    </div>
  );
}

function SlideMarket() {
  const stats = [
    { value: "$12B", label: "behavioral fintech market" },
    { value: "72M", label: "Gen Z adults in the US" },
    { value: "87%", label: "want better money habits" },
  ];

  return (
    <div className="h-full w-full bg-[#1A1A1A] flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Market Opportunity
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="text-center"
            >
              <p
                className="text-5xl md:text-6xl font-bold text-[#D4A017] mb-3"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideBusinessModel() {
  return (
    <div className="h-full w-full bg-[#FAFAF7] flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-center mb-12"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Business Model
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Free */}
          <div className="bg-white rounded-2xl p-6 border border-[#E8E8E0]">
            <h3
              className="text-xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Free
            </h3>
            <ul className="space-y-2 text-sm text-[#6B6B6B]">
              <li>1 daily challenge</li>
              <li>3 categories</li>
              <li>Basic streak tracking</li>
            </ul>
          </div>
          {/* Pro */}
          <div className="bg-[#1B4332] rounded-2xl p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
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
                $9.99/mo
              </span>
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Unlimited challenges</li>
              <li>All categories</li>
              <li>Bank integration</li>
              <li>Full behavioral profile</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <p
              className="text-3xl md:text-4xl font-bold text-[#1B4332]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              $10M
            </p>
            <p className="text-sm text-[#6B6B6B] mt-1">ARR by Year 2</p>
          </div>
          <div className="text-center">
            <p
              className="text-3xl md:text-4xl font-bold text-[#1B4332]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              3%
            </p>
            <p className="text-sm text-[#6B6B6B] mt-1">free-to-pro conversion at scale</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SlideCTA() {
  return (
    <div className="h-full w-full bg-[#1B4332] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,160,23,0.12),transparent_50%)]" />
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-10"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Join the revolution.
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-bold text-lg py-4 px-10 rounded-2xl transition-colors"
        >
          Join the Waitlist
        </motion.button>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-white/40 mt-10"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          coinstack.app
        </motion.p>
      </div>
    </div>
  );
}
