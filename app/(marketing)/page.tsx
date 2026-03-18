"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Flame,
  ShieldCheck,
  Bell,
  Sparkles,
  Check,
  Quote,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { ChallengeCard } from "@/components/challenge-card"
import { RadarChart } from "@/components/radar-chart"
import { mockChallenges, mockBehavioralProfile } from "@/lib/mock-data"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
}

const cabinetGrotesk = { fontFamily: "'Cabinet Grotesk', sans-serif" }
const dmMono = { fontFamily: "'DM Mono', monospace" }

// ---------------------------------------------------------------------------
// Section 1 — Hero
// ---------------------------------------------------------------------------
function Hero() {
  return (
    <section className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left — 60% */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-[#1B4332]"
            style={cabinetGrotesk}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            3 minutes a day.
            <br />
            Real money habits.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Daily micro-challenges based on your real spending. Build the habits
            that actually move the needle — no budgets, no spreadsheets.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <button
              className="px-6 py-3 rounded-xl font-semibold text-white bg-[#D4A017] hover:bg-[#c29415] transition-colors cursor-pointer"
              style={cabinetGrotesk}
            >
              Start Free
            </button>
            <a
              href="#how-it-works"
              className="px-6 py-3 rounded-xl font-semibold border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors"
              style={cabinetGrotesk}
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Right — 40% */}
        <motion.div
          className="lg:col-span-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <ChallengeCard category={mockChallenges[0].category} text={mockChallenges[0].text} context={mockChallenges[0].context} showActions={false} />
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 2 — Problem Bar
// ---------------------------------------------------------------------------
const stats = [
  { value: "73%", label: "live paycheck to paycheck" },
  { value: "62%", label: "can't cover a $500 emergency" },
  { value: "$1.75T", label: "student debt" },
]

function ProblemBar() {
  return (
    <section className="bg-[#1B4332] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-12"
          style={cabinetGrotesk}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          The most financially educated generation.
          <br className="hidden md:block" /> Still broke.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              className="bg-white/10 backdrop-blur rounded-2xl p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
            >
              <p
                className="text-4xl md:text-5xl font-bold text-[#D4A017] mb-2"
                style={dmMono}
              >
                {s.value}
              </p>
              <p className="text-white/80 text-lg">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 3 — How It Works
// ---------------------------------------------------------------------------
const steps = [
  {
    num: 1,
    title: "Connect Your Bank",
    desc: "We analyze your real spending patterns",
  },
  {
    num: 2,
    title: "Get Daily Challenges",
    desc: "Personalized micro-actions based on your habits",
  },
  {
    num: 3,
    title: "Build Real Habits",
    desc: "Track streaks, earn insights, save more",
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-[#1B4332] mb-16"
        style={cabinetGrotesk}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        How It Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Dashed connector line */}
        <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] border-t-2 border-dashed border-[#1B4332]/30" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="flex flex-col items-center text-center gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
          >
            <div className="w-20 h-20 rounded-full bg-[#1B4332] text-white flex items-center justify-center text-2xl font-bold z-10"
              style={cabinetGrotesk}
            >
              {step.num}
            </div>
            <h3
              className="text-xl font-bold text-[#1B4332]"
              style={cabinetGrotesk}
            >
              {step.title}
            </h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 4 — Features Bento
// ---------------------------------------------------------------------------
const smallFeatures = [
  {
    icon: Flame,
    title: "Streak Tracking",
    desc: "Stay consistent with daily streaks and milestones.",
  },
  {
    icon: ShieldCheck,
    title: "Bank Integration",
    desc: "Secure read-only connection to your accounts.",
  },
  {
    icon: Bell,
    title: "Daily Nudges",
    desc: "Smart reminders that keep you on track.",
  },
  {
    icon: Sparkles,
    title: "Pro Insights",
    desc: "Deep analytics on your behavioral patterns.",
  },
]

function FeaturesBento() {
  return (
    <section id="features" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-[#1B4332] mb-12"
        style={cabinetGrotesk}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        Everything you need
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
        {/* Large card — Challenge showcase (spans 2 rows) */}
        <motion.div
          className="md:row-span-2 bg-[#1B4332] rounded-2xl p-6 flex flex-col justify-center items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <p
            className="text-sm font-semibold text-[#D4A017] mb-4 uppercase tracking-wider"
            style={cabinetGrotesk}
          >
            Daily Challenges
          </p>
          <div className="w-full max-w-xs">
            <ChallengeCard category={mockChallenges[3].category} text={mockChallenges[3].text} context={mockChallenges[3].context} showActions={false} />
          </div>
        </motion.div>

        {/* Large card — Radar chart (spans 2 cols on lg) */}
        <motion.div
          className="md:col-span-2 bg-white rounded-2xl shadow-sm border p-6 flex flex-col items-center justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <p
            className="text-sm font-semibold text-[#1B4332] mb-4 uppercase tracking-wider"
            style={cabinetGrotesk}
          >
            Behavioral Profile
          </p>
          <div className="w-full max-w-md">
            <RadarChart scores={mockBehavioralProfile} />
          </div>
        </motion.div>

        {/* 4 small cards */}
        {smallFeatures.map((f, i) => (
          <motion.div
            key={f.title}
            className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col justify-center gap-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 3}
          >
            <f.icon className="w-8 h-8 text-[#1B4332]" />
            <h3
              className="text-lg font-bold text-[#1B4332]"
              style={cabinetGrotesk}
            >
              {f.title}
            </h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 5 — Social Proof
// ---------------------------------------------------------------------------
const testimonials = [
  {
    name: "Zoe",
    age: 24,
    quote:
      "I saved $340 in my first month just by doing the daily challenges. It actually changed how I think about spending.",
  },
  {
    name: "Marcus",
    age: 22,
    quote:
      "The behavioral profile was a wake-up call. I didn't realize I was an impulse buyer until Coinstack showed me.",
  },
  {
    name: "Priya",
    age: 26,
    quote:
      "It's like having a financial coach in my pocket. 3 minutes a day is all it takes.",
  },
]

function SocialProof() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-[#1B4332] mb-12"
          style={cabinetGrotesk}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          People are saving real money
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
            >
              <Quote className="w-8 h-8 text-[#D4A017] opacity-60" />
              <p className="text-gray-700 leading-relaxed">{t.quote}</p>
              <p className="text-sm font-semibold text-[#1B4332]">
                {t.name}, {t.age}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center text-[#1B4332]/70 text-sm md:text-base"
          style={dmMono}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          10,000+ daily challenges completed &middot; 23-day average streak
          &middot; $340 avg monthly saved
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 6 — Pricing
// ---------------------------------------------------------------------------
const freePlan = [
  "1 challenge/day",
  "Basic streak tracking",
  "3 categories",
  "Community access",
]

const proPlan = [
  "Unlimited challenges",
  "Full behavioral profile",
  "All categories",
  "Priority insights",
  "Bank integration",
  "Export data",
]

function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-[#1B4332] mb-4"
        style={cabinetGrotesk}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        Simple pricing
      </motion.h2>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <span
          className={`text-sm font-medium ${!annual ? "text-[#1B4332]" : "text-gray-400"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
            annual ? "bg-[#1B4332]" : "bg-gray-300"
          }`}
          aria-label="Toggle annual pricing"
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
              annual ? "translate-x-6" : ""
            }`}
          />
        </button>
        <span
          className={`text-sm font-medium ${annual ? "text-[#1B4332]" : "text-gray-400"}`}
        >
          Annual
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Free */}
        <motion.div
          className="bg-white border-2 border-[#1B4332] rounded-2xl p-8 flex flex-col"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h3
            className="text-2xl font-bold text-[#1B4332] mb-1"
            style={cabinetGrotesk}
          >
            Free
          </h3>
          <p className="text-4xl font-bold text-[#1B4332] mb-1" style={dmMono}>
            $0
          </p>
          <p className="text-gray-500 text-sm mb-8">forever</p>
          <ul className="flex flex-col gap-3 mb-8 flex-1">
            {freePlan.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <Check className="w-4 h-4 text-[#1B4332] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full h-11 cursor-pointer">
            Get Started
          </Button>
        </motion.div>

        {/* Pro */}
        <motion.div
          className="bg-[#1B4332] rounded-2xl p-8 flex flex-col text-white relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <Badge className="absolute top-6 right-6 bg-[#D4A017] text-white border-none text-xs font-bold">
            PRO
          </Badge>
          <h3
            className="text-2xl font-bold text-white mb-1"
            style={cabinetGrotesk}
          >
            Pro
          </h3>
          <p className="text-4xl font-bold text-[#D4A017] mb-1" style={dmMono}>
            {annual ? "$7.99" : "$9.99"}
          </p>
          <p className="text-white/60 text-sm mb-8">/mo</p>
          <ul className="flex flex-col gap-3 mb-8 flex-1">
            {proPlan.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-white/90"
              >
                <Check className="w-4 h-4 text-[#D4A017] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full h-11 rounded-lg bg-[#D4A017] hover:bg-[#c29415] text-white font-semibold transition-colors cursor-pointer">
            Start Pro
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 7 — FAQ
// ---------------------------------------------------------------------------
const faqs = [
  {
    q: "Is my financial data safe?",
    a: "We use bank-level 256-bit encryption and never store your credentials. Your data is read-only — we can see transactions but can never move money. We're SOC 2 compliant and undergo regular security audits.",
  },
  {
    q: "How does the challenge system work?",
    a: "Each day, we analyze your recent spending patterns and generate a personalized micro-challenge. Challenges are small, actionable steps — like making coffee at home or taking public transit — designed to build lasting habits over time.",
  },
  {
    q: "Do I need to connect my bank?",
    a: "No! You can start with manual challenges and track your streaks without connecting any accounts. Bank integration unlocks personalized challenges based on your real spending, but it's completely optional.",
  },
  {
    q: "What's included in Pro?",
    a: "Pro gives you unlimited daily challenges, a full behavioral profile with insights, access to all spending categories, priority AI-powered insights, bank integration, and the ability to export your data.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your Pro subscription at any time. No contracts, no cancellation fees. You'll keep Pro access until the end of your billing period.",
  },
  {
    q: "How is this different from budgeting apps?",
    a: "Traditional budgeting apps tell you where your money went. Coinstack changes where your money goes. Instead of tracking spreadsheets, you get daily 3-minute challenges that build real behavioral change through action, not observation.",
  },
]

function FAQ() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-3xl mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-[#1B4332] mb-12"
        style={cabinetGrotesk}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        Frequently asked questions
      </motion.h2>

      <Accordion>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={i}>
            <AccordionTrigger className="text-base font-semibold text-[#1B4332] py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 8 — Final CTA
// ---------------------------------------------------------------------------
function FinalCTA() {
  return (
    <section className="bg-[#1B4332] py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          style={cabinetGrotesk}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Your money habits won&apos;t change themselves.
        </motion.h2>
        <motion.p
          className="text-white/70 text-lg md:text-xl mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Start building better habits in 3 minutes a day.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <button
            className="px-8 py-4 rounded-xl text-lg font-semibold text-white bg-[#D4A017] hover:bg-[#c29415] transition-colors cursor-pointer"
            style={cabinetGrotesk}
          >
            Start Free — No Credit Card Required
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function LandingPage() {
  return (
    <main className="bg-[#FAFAF7]">
      <Hero />
      <ProblemBar />
      <HowItWorks />
      <FeaturesBento />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
