"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChallengeCard } from "@/components/challenge-card";

const TOTAL_SLIDES = 12;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -400 : 400,
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
    <div className="relative h-screen w-screen overflow-hidden select-none bg-[#1B4332]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {currentSlide === 0 && <SlideTitle />}
          {currentSlide === 1 && <SlideProblem />}
          {currentSlide === 2 && <SlideSolution />}
          {currentSlide === 3 && <SlideHowItWorks />}
          {currentSlide === 4 && <SlideProduct />}
          {currentSlide === 5 && <SlideMarket />}
          {currentSlide === 6 && <SlideTraction />}
          {currentSlide === 7 && <SlideBusinessModel />}
          {currentSlide === 8 && <SlideCompetition />}
          {currentSlide === 9 && <SlideGTM />}
          {currentSlide === 10 && <SlideTeamAsk />}
          {currentSlide === 11 && <SlideVision />}
        </motion.div>
      </AnimatePresence>

      {/* Left arrow */}
      {currentSlide > 0 && (
        <button
          onClick={() => navigate(-1)}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white/60 hover:text-white transition-all z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {currentSlide < TOTAL_SLIDES - 1 && (
        <button
          onClick={() => navigate(1)}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white/60 hover:text-white transition-all z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Slide counter */}
      <div
        className="absolute top-6 right-6 text-xs text-white/30 z-20 tabular-nums"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {String(currentSlide + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentSlide ? 1 : -1);
              setCurrentSlide(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? "bg-[#D4A017] w-6" : "bg-white/25 hover:bg-white/50 w-1.5"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Mobile tap zones */}
      <div className="absolute inset-y-0 left-0 w-1/3 z-10 md:hidden" onClick={() => navigate(-1)} />
      <div className="absolute inset-y-0 right-0 w-1/3 z-10 md:hidden" onClick={() => navigate(1)} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 1: TITLE
───────────────────────────────────────────── */
function SlideTitle() {
  return (
    <div className="h-full w-full bg-[#1B4332] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(212,160,23,0.12),transparent_70%)]" />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(250,250,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,247,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 text-center max-w-3xl">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#D4A017] flex items-center justify-center shadow-lg shadow-[#D4A017]/30">
            <span className="text-3xl font-bold text-[#1B4332]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>C</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            Coinstack
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-3xl text-white/80 mb-4 font-medium"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          3 minutes a day. Real money habits.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg text-white/50 mb-16"
        >
          The behavioral finance app for Gen Z — built on your actual transactions.
        </motion.p>

        {/* Tag line chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-3 flex-wrap mb-16"
        >
          {["Behavioral Fintech", "Gen Z", "Freemium SaaS"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs border border-white/20 text-white/50"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-sm text-white/30"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Press → to continue
        </motion.p>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-xs text-white/20" style={{ fontFamily: "'DM Mono', monospace" }}>
        coinstack.ashketing.com · ChimeStream Portfolio Company
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 2: PROBLEM
───────────────────────────────────────────── */
function SlideProblem() {
  return (
    <div className="h-full w-full bg-[#111111] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-6 left-6 text-xs text-white/20" style={{ fontFamily: "'DM Mono', monospace" }}>THE PROBLEM</div>

      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Gen Z knows everything about money.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-[#D4A017] leading-tight mb-12"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Still broke.
        </motion.h2>

        {/* Data points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {[
            { stat: "20B+", label: "TikTok views on #PersonalFinance" },
            { stat: "$800", label: "Median Gen Z savings balance" },
            { stat: "73%", label: "Live paycheck to paycheck" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
            >
              <p className="text-4xl font-bold text-[#D4A017] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                {item.stat}
              </p>
              <p className="text-sm text-white/50">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Insight block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="bg-[#D4A017]/10 border border-[#D4A017]/30 rounded-2xl p-5"
        >
          <p className="text-lg text-white/80 leading-relaxed">
            <span className="text-[#D4A017] font-semibold">The insight:</span>{" "}
            The content taught the concept. Nothing taught the behavior.
            Every budgeting app built in the last decade attacked the information problem.
            <span className="text-white font-medium"> Nobody attacked the behavior problem.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 3: SOLUTION
───────────────────────────────────────────── */
function SlideSolution() {
  return (
    <div className="h-full w-full bg-[#1B4332] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,160,23,0.1),transparent_60%)]" />
      <div className="absolute top-6 left-6 text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>THE SOLUTION</div>

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 bg-[#D4A017]/15 border border-[#D4A017]/30 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="text-[#D4A017] text-sm font-medium">The Duolingo for Money Behavior</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Coinstack.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-3xl md:text-5xl font-bold text-white/60 mb-10 leading-tight"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Not a budgeting app. A behavior change engine.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: "🔗",
              title: "Connect",
              desc: "Link your bank. We pull your real transactions — coffee shops, subscriptions, impulse buys. Your raw behavioral data.",
            },
            {
              icon: "⚡",
              title: "Challenge",
              desc: "Every day: one 3-minute challenge from your actual spending. Multiple choice. No journaling. Just a decision that makes you think.",
            },
            {
              icon: "🧠",
              title: "Profile",
              desc: "After 30 days, a behavioral map emerges. Not what you spend — how you think about spending. No app has produced this before.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="bg-white/8 border border-white/15 rounded-2xl p-6"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="mt-6 flex items-center gap-2"
        >
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-sm text-[#D4A017] font-medium px-4">
            The only app that combines real transaction data + behavioral challenges + psychological profiling
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 4: HOW IT WORKS
───────────────────────────────────────────── */
function SlideHowItWorks() {
  return (
    <div className="h-full w-full bg-[#FAFAF7] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-6 left-6 text-xs text-[#1B4332]/40" style={{ fontFamily: "'DM Mono', monospace" }}>THE DAILY HABIT LOOP</div>

      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] text-center mb-3"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          The daily habit loop that builds lasting financial behavior.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-[#8A8A80] mb-12"
        >
          Like Duolingo — but for your actual spending, not vocabulary drills.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              icon: "🏦",
              title: "SYNC",
              subtitle: "Connect your bank",
              detail: "Coinstack connects to your bank via Plaid. Pulls in real transactions — coffee shops, subscriptions, impulse buys, rent. This is your raw behavioral data.",
              color: "bg-[#1B4332]",
            },
            {
              step: "02",
              icon: "🎯",
              title: "CHALLENGE",
              subtitle: "3 minutes every morning",
              detail: `One challenge, based on your real spending. Multiple choice — no journaling, no spreadsheets.\n\n"You made 4 coffee shop trips this week totaling $52. What does that tell you about your triggers?"`,
              color: "bg-[#D4A017]",
              dark: false,
            },
            {
              step: "03",
              icon: "📊",
              title: "PROFILE",
              subtitle: "6-axis behavioral radar",
              detail: "Every completed challenge updates your Behavioral Profile across: Impulse Control · Future Orientation · Social Comparison · Risk Tolerance · Loss Aversion · Reward Sensitivity",
              color: "bg-[#1B4332]",
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className={`${item.color} rounded-2xl p-7 ${item.dark === false ? "text-[#1A1A1A]" : "text-white"}`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-4xl">{item.icon}</span>
                <span
                  className={`text-xs font-bold ${item.dark === false ? "text-[#1A1A1A]/50" : "text-white/40"}`}
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {item.step}
                </span>
              </div>
              <h3
                className={`text-sm font-bold mb-1 ${item.dark === false ? "text-[#1A1A1A]" : "text-[#D4A017]"}`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {item.title}
              </h3>
              <h4
                className={`text-xl font-bold mb-3 ${item.dark === false ? "text-[#1A1A1A]" : "text-white"}`}
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {item.subtitle}
              </h4>
              <p className={`text-sm leading-relaxed ${item.dark === false ? "text-[#1A1A1A]/70" : "text-white/55"}`}>
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 5: PRODUCT
───────────────────────────────────────────── */
function SlideProduct() {
  return (
    <div className="h-full w-full bg-[#1B4332] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(212,160,23,0.09),transparent_60%)]" />
      <div className="absolute top-6 left-6 text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>THE PRODUCT</div>

      <div className="relative z-10 max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left: text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            The Challenge Card
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/60 mb-8 leading-relaxed"
          >
            One card. Every morning. Built from your actual transactions.
            Not a reminder to save — a behavioral question that rewires how you relate to money.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            {[
              "Pulls from your real bank transactions via Plaid",
              "6 behavioral axes tracked over time",
              "Streak system + XP for daily engagement",
              "Behavioral profile radar chart after 30 days",
            ].map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <span className="text-[#D4A017] mt-0.5 font-bold">✓</span>
                <span className="text-sm text-white/65 leading-relaxed">{feat}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: ChallengeCard component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-xs mx-auto w-full"
        >
          <ChallengeCard
            category="IMPULSE CONTROL"
            date="Day 14"
            text="You made 4 coffee shop trips this week totaling $52. What does that tell you about your spending triggers?"
            context="Based on your transaction history · Tue–Fri pattern detected"
            showActions={false}
          />
          <div className="mt-4 bg-white/8 border border-white/15 rounded-xl p-4 text-center">
            <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>BEHAVIORAL PROFILE</p>
            <div className="flex justify-center gap-4 mt-2">
              {["Impulse", "Future", "Social", "Risk", "Loss", "Reward"].map((axis) => (
                <div key={axis} className="text-center">
                  <div className="w-1 mx-auto rounded-full bg-[#D4A017]/60" style={{ height: `${Math.random() * 30 + 20}px` }} />
                  <p className="text-[8px] text-white/30 mt-1">{axis.charAt(0)}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 6: MARKET
───────────────────────────────────────────── */
function SlideMarket() {
  return (
    <div className="h-full w-full bg-[#111111] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-6 left-6 text-xs text-white/20" style={{ fontFamily: "'DM Mono', monospace" }}>MARKET SIZE</div>

      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-3"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          A massive, underserved market with a critical timing window.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-white/40 mb-12"
        >
          Personal finance software market growing at 20.57% CAGR → $507B by 2030
        </motion.p>

        {/* TAM/SAM/SOM */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "TAM", value: "$165.9B", sub: "Global personal finance software (2025)", size: "text-3xl md:text-4xl" },
            { label: "SAM", value: "$28B", sub: "US fintech apps, 18–35 demographic", size: "text-3xl md:text-4xl", featured: true },
            { label: "SOM (Year 1)", value: "$2.4M", sub: "4,000 Pro users + employer channel", size: "text-3xl md:text-4xl" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className={`rounded-2xl p-6 ${item.featured ? "bg-[#1B4332] border border-[#D4A017]/30" : "bg-white/5 border border-white/10"}`}
            >
              <p
                className={`text-xs font-bold mb-2 ${item.featured ? "text-[#D4A017]" : "text-white/40"}`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {item.label}
              </p>
              <p className={`${item.size} font-bold ${item.featured ? "text-white" : "text-[#D4A017]"} mb-2`} style={{ fontFamily: "'DM Mono', monospace" }}>
                {item.value}
              </p>
              <p className={`text-sm ${item.featured ? "text-white/55" : "text-white/35"}`}>{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Why now */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="grid md:grid-cols-4 gap-3"
        >
          {[
            { label: "Monthly searches", value: "165K", note: '"apps for budgeting" — LOW competition' },
            { label: "Keyword growth", value: "+4,468%", note: "Over 24 months" },
            { label: "Cleo validation", value: "$280M", note: "ARR — Gen Z pays for this" },
            { label: "Greenlight raised", value: "$556M", note: "Adjacent parent market, nobody owns 18–28" },
          ].map((item, i) => (
            <div key={item.label} className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-[#D4A017]" style={{ fontFamily: "'DM Mono', monospace" }}>
                {item.value}
              </p>
              <p className="text-[10px] text-white/30 mt-1 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 7: TRACTION
───────────────────────────────────────────── */
function SlideTraction() {
  return (
    <div className="h-full w-full bg-[#FAFAF7] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-6 left-6 text-xs text-[#1B4332]/40" style={{ fontFamily: "'DM Mono', monospace" }}>PROOF OF DEMAND</div>

      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          The market is already searching for this.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#8A8A80] mb-10"
        >
          We just built the answer.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Search demand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-[#E8E8E0] rounded-2xl p-6"
          >
            <h3 className="text-sm font-bold text-[#1B4332] mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
              SEARCH DEMAND
            </h3>
            <div className="space-y-3">
              {[
                { kw: "apps for budgeting", vol: "165,000/mo", comp: "LOW" },
                { kw: "personal finance app", vol: "110,000/mo", comp: "LOW" },
                { kw: "personal money management app", vol: "110,000/mo", comp: "LOW" },
                { kw: "best finance apps for beginners", vol: "Growing +4,468%", comp: "LOW" },
              ].map((row) => (
                <div key={row.kw} className="flex items-center justify-between text-sm">
                  <span className="text-[#4A4A4A] font-medium">{row.kw}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8A8A80] text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>{row.vol}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] font-bold">{row.comp}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Community signals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white border border-[#E8E8E0] rounded-2xl p-6"
          >
            <h3 className="text-sm font-bold text-[#1B4332] mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
              COMMUNITY SIGNALS
            </h3>
            <div className="space-y-3">
              {[
                { platform: "Reddit", detail: "5 communities · 17M+ members discussing behavioral money challenges" },
                { platform: "TikTok", detail: "#MoneyTok · 20 billion+ views on personal finance content" },
                { platform: "YouTube", detail: "14 channels · 15 distinct content themes on finance apps" },
                { platform: "Facebook Groups", detail: "5 groups · 100K+ members in Gen Z finance category" },
              ].map((item) => (
                <div key={item.platform} className="flex gap-3">
                  <span className="text-xs font-bold text-[#D4A017] min-w-[70px]" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {item.platform}
                  </span>
                  <span className="text-xs text-[#8A8A80] leading-relaxed">{item.detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Competitor proof */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-6 grid md:grid-cols-3 gap-4"
        >
          {[
            { company: "Cleo", signal: "$280M ARR", note: "Gen Z pays for personality-forward finance apps ✅" },
            { company: "Greenlight", signal: "$556M raised", note: "Adjacent parent market — nobody owns 18–28 ✅" },
            { company: "Mint", signal: "Shut down", note: '"Show you charts" model is dead ✅' },
          ].map((item) => (
            <div key={item.company} className="bg-[#1B4332]/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[#1A1A1A] text-sm">{item.company}</span>
                <span className="text-[#1B4332] font-bold text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>{item.signal}</span>
              </div>
              <p className="text-xs text-[#8A8A80]">{item.note}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 8: BUSINESS MODEL
───────────────────────────────────────────── */
function SlideBusinessModel() {
  return (
    <div className="h-full w-full bg-[#1B4332] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,160,23,0.08),transparent_60%)]" />
      <div className="absolute top-6 left-6 text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>BUSINESS MODEL</div>

      <div className="relative z-10 max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold text-white mb-10"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Freemium SaaS with a B2B employer expansion channel.
        </motion.h2>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {[
            {
              name: "Free",
              price: "$0",
              period: "/month",
              features: ["1 challenge/day", "3-month history", "Basic streak tracking"],
              featured: false,
            },
            {
              name: "Pro",
              price: "$9.99",
              period: "/month",
              features: ["Unlimited challenges", "Full behavioral radar profile", "Savings goals + insights", "Full transaction history"],
              featured: true,
              badge: "CORE REVENUE",
            },
            {
              name: "Employer",
              price: "$3",
              period: "/seat/month",
              features: ["Financial wellness program", "HR team dashboard", "Bulk licensing", "Q1 2027 roadmap"],
              featured: false,
              future: true,
            },
          ].map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className={`rounded-2xl p-6 relative ${
                tier.featured
                  ? "bg-[#D4A017] text-[#1A1A1A]"
                  : tier.future
                  ? "bg-white/5 border border-white/10 text-white opacity-70"
                  : "bg-white/8 border border-white/15 text-white"
              }`}
            >
              {tier.badge && (
                <span
                  className="absolute -top-3 left-4 text-[10px] font-bold bg-[#1B4332] text-[#D4A017] px-3 py-1 rounded-full"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {tier.badge}
                </span>
              )}
              <h3
                className="text-lg font-bold mb-1"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>{tier.price}</span>
                <span className={`text-sm ${tier.featured ? "text-[#1A1A1A]/60" : "text-white/40"}`}>{tier.period}</span>
              </div>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className={`text-sm flex items-start gap-2 ${tier.featured ? "text-[#1A1A1A]/80" : "text-white/55"}`}>
                    <span className={tier.featured ? "text-[#1B4332]" : "text-[#D4A017]"}>·</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Revenue projections + unit economics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-5 gap-4"
        >
          {[
            { label: "Month 1", value: "$500 MRR", sub: "50 Pro users" },
            { label: "Month 3", value: "$2K MRR", sub: "200 Pro users" },
            { label: "Month 6", value: "$4K MRR", sub: "400 Pro users" },
            { label: "Month 12", value: "$12K+ MRR", sub: "1K+ users + employer" },
            { label: "LTV:CAC", value: "24–120×", sub: "Organic first" },
          ].map((item) => (
            <div key={item.label} className="bg-white/8 rounded-xl p-4 text-center">
              <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>{item.label}</p>
              <p className="text-lg font-bold text-[#D4A017]" style={{ fontFamily: "'DM Mono', monospace" }}>{item.value}</p>
              <p className="text-xs text-white/40 mt-1">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 9: COMPETITION
───────────────────────────────────────────── */
function SlideCompetition() {
  return (
    <div className="h-full w-full bg-[#111111] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-6 left-6 text-xs text-white/20" style={{ fontFamily: "'DM Mono', monospace" }}>COMPETITIVE LANDSCAPE</div>

      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-5xl font-bold text-white mb-3"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Nobody built this yet.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#D4A017] text-lg mb-10 font-medium"
        >
          We own the category before it has a name.
        </motion.p>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 mb-6"
        >
          {/* Header */}
          <div className="grid grid-cols-6 gap-0 px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="col-span-2 text-xs text-white/40" style={{ fontFamily: "'DM Mono', monospace" }}>PRODUCT</div>
            {["Real Txns", "Daily Habit", "Behavioral", "Gen Z Tone"].map((h) => (
              <div key={h} className="text-xs text-white/40 text-center" style={{ fontFamily: "'DM Mono', monospace" }}>{h}</div>
            ))}
          </div>
          {/* Rows */}
          {[
            { name: "Coinstack", us: true, vals: ["✅", "✅", "✅", "✅"] },
            { name: "YNAB", vals: ["❌", "❌", "❌", "❌"] },
            { name: "Cleo", vals: ["❌", "Partial", "❌", "✅"] },
            { name: "Mint (dead)", vals: ["✅", "❌", "❌", "❌"] },
            { name: "Monarch Money", vals: ["✅", "❌", "❌", "❌"] },
            { name: "Greenlight", vals: ["❌", "❌", "❌", "❌"] },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-6 gap-0 px-4 py-3 border-b border-white/5 ${row.us ? "bg-[#1B4332]/60" : ""}`}
            >
              <div
                className={`col-span-2 text-sm font-semibold ${row.us ? "text-[#D4A017]" : "text-white/60"}`}
                style={row.us ? { fontFamily: "'Cabinet Grotesk', sans-serif" } : {}}
              >
                {row.name} {row.us && "← US"}
              </div>
              {row.vals.map((v, vi) => (
                <div key={vi} className={`text-center text-sm ${v === "✅" ? "text-green-400" : v === "Partial" ? "text-yellow-400" : "text-white/20"}`}>
                  {v}
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Whitespace callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex gap-4 flex-wrap"
        >
          {[
            "Real transaction data as input",
            "Daily 3-minute behavioral challenges",
            "Long-term psychological profile",
            "Gen Z brand (not a bank)",
            "Freemium mobile-first",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-[#1B4332]/50 border border-[#D4A017]/30 rounded-full px-4 py-1.5"
            >
              <span className="text-[#D4A017] text-sm">✅</span>
              <span className="text-sm text-white/70">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 10: GO-TO-MARKET
───────────────────────────────────────────── */
function SlideGTM() {
  return (
    <div className="h-full w-full bg-[#FAFAF7] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-6 left-6 text-xs text-[#1B4332]/40" style={{ fontFamily: "'DM Mono', monospace" }}>GO-TO-MARKET</div>

      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Community-first launch. Organic proof. Then scale what works.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#8A8A80] mb-8"
        >
          Month 1 budget: $0. The content IS the product.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              phase: "DAYS 1–7",
              title: "Reddit + TikTok Ignition",
              items: [
                "Founder post on r/personalfinance (17M members)",
                "First 5 TikTok videos — onboarding, radar reveal, Gen Z paradox",
                "Twitter/X 'Gen Z finance paradox' thread",
                "Target: 500–1,000 organic signups",
              ],
              color: "bg-[#1B4332] text-white",
              accent: "text-[#D4A017]",
            },
            {
              phase: "DAYS 8–14",
              title: "Product Hunt",
              items: [
                "Full PH launch with maker story + video walkthrough",
                "Target: Top 5 product of the day",
                "Expected: 500–2,000 additional signups",
                "Ash active in comments all launch day",
              ],
              color: "bg-[#D4A017] text-[#1A1A1A]",
              accent: "text-[#1B4332]",
            },
            {
              phase: "MONTH 2–3",
              title: "Creator + Scale",
              items: [
                "10 micro-influencer outreach (50K–200K TikTok finance creators)",
                "2–3 YouTube integrations (Humphrey Yang tier)",
                "SEO articles targeting 165K/month keyword cluster",
                "Employer outreach pilot: 5 companies",
              ],
              color: "bg-[#1A1A1A] text-white",
              accent: "text-[#D4A017]",
            },
          ].map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className={`rounded-2xl p-6 ${phase.color}`}
            >
              <p
                className={`text-xs font-bold mb-2 ${phase.accent}`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {phase.phase}
              </p>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {phase.title}
              </h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm opacity-70 flex items-start gap-2">
                    <span className={`mt-0.5 ${phase.accent}`}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-5 grid grid-cols-4 gap-3"
        >
          {[
            { metric: "Week 1", target: "300 signups" },
            { metric: "Month 1", target: "1,000 signups · $500 MRR" },
            { metric: "Month 3", target: "5,000 signups · $2K MRR" },
            { metric: "North star", target: "40% day-14 retention" },
          ].map((m) => (
            <div key={m.metric} className="bg-white border border-[#E8E8E0] rounded-xl p-3 text-center">
              <p className="text-xs text-[#8A8A80]" style={{ fontFamily: "'DM Mono', monospace" }}>{m.metric}</p>
              <p className="text-sm font-bold text-[#1B4332] mt-1">{m.target}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 11: TEAM & ASK
───────────────────────────────────────────── */
function SlideTeamAsk() {
  return (
    <div className="h-full w-full bg-[#1B4332] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(212,160,23,0.1),transparent_60%)]" />
      <div className="absolute top-6 left-6 text-xs text-white/30" style={{ fontFamily: "'DM Mono', monospace" }}>TEAM + ASK</div>

      <div className="relative z-10 max-w-5xl w-full grid md:grid-cols-2 gap-10">
        {/* Team */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            ChimeStream — building behavioral products that change what people do.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/8 border border-white/15 rounded-2xl p-6 mb-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1B4332] font-bold text-xl">A</div>
              <div>
                <p className="font-bold text-white" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Ash Hatef</p>
                <p className="text-sm text-white/50">Founder, ChimeStream · Rotterdam, NL</p>
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "Product, marketing, strategy across multiple portfolio companies",
                "Coinstack: MVP → live URL in under 2 weeks",
                "Background: growth marketing + product development",
                "Stack: Next.js 15 + PostgreSQL + Stripe + Coolify",
              ].map((item) => (
                <li key={item} className="text-sm text-white/60 flex items-start gap-2">
                  <span className="text-[#D4A017] mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-[#D4A017]/10 border border-[#D4A017]/30 rounded-xl p-4"
          >
            <p className="text-sm text-white/70">
              <span className="text-[#D4A017] font-bold">Live now:</span>{" "}
              <a href="https://coinstack.ashketing.com" target="_blank" rel="noopener noreferrer" className="underline text-white/70 hover:text-white">
                coinstack.ashketing.com
              </a>{" "}
              · Deployed, tested, 49/49 tests passing.
            </p>
          </motion.div>
        </div>

        {/* The Ask */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-2xl font-bold text-[#D4A017] mb-6"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            The Ask
          </motion.h3>

          <div className="space-y-4">
            {[
              {
                audience: "For Investors",
                ask: "$250K Seed",
                detail: "Fund full Plaid integration, creator marketing campaign, first hire (iOS dev). Target: $4K MRR by month 6.",
              },
              {
                audience: "For Partners",
                ask: "Distribution Deal",
                detail: "Your audience + our product + revenue share. Finance communities, creators, HR platforms.",
              },
              {
                audience: "For Employers",
                ask: "Pilot Program",
                detail: "50 seats, 90 days, $0 cost. We prove ROI on employee financial wellness.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.audience}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12 }}
                className="bg-white/8 border border-white/10 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/40" style={{ fontFamily: "'DM Mono', monospace" }}>{item.audience}</span>
                  <span className="text-sm font-bold text-[#D4A017]">{item.ask}</span>
                </div>
                <p className="text-sm text-white/55 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-5 text-center"
          >
            <p className="text-sm text-white/40" style={{ fontFamily: "'DM Mono', monospace" }}>
              ash@chimestream.io · coinstack.ashketing.com
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE 12: VISION
───────────────────────────────────────────── */
function SlideVision() {
  return (
    <div className="h-full w-full bg-[#111111] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(212,160,23,0.08),transparent_70%)]" />
      <div className="absolute top-6 left-6 text-xs text-white/20" style={{ fontFamily: "'DM Mono', monospace" }}>THE VISION</div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-[#D4A017] mb-6 uppercase tracking-widest"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          5-Year Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          The world's largest dataset on how people actually think about money.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-white/50 mb-16 max-w-2xl mx-auto"
        >
          Not what they earn. Not what they spend. How they think. That's a category nobody owns.
          Coinstack is the foundation.
        </motion.p>

        {/* Future milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-6 flex-wrap mb-14"
        >
          {[
            { horizon: "Now", milestone: "Web app + behavioral profiling" },
            { horizon: "6 months", milestone: "iOS + Android native apps" },
            { horizon: "Year 1", milestone: "Employer financial wellness B2B" },
            { horizon: "Year 3", milestone: "Behavioral data platform + API" },
          ].map((item, i) => (
            <div key={item.horizon} className="text-left bg-white/5 border border-white/10 rounded-xl p-4 min-w-[180px]">
              <p className="text-xs text-[#D4A017] mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>{item.horizon}</p>
              <p className="text-sm text-white/70 leading-snug">{item.milestone}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://coinstack.ashketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-bold text-lg py-4 px-12 rounded-2xl transition-colors"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Start My Free Challenge →
          </a>
          <p className="text-sm text-white/25 mt-5" style={{ fontFamily: "'DM Mono', monospace" }}>
            coinstack.ashketing.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}
