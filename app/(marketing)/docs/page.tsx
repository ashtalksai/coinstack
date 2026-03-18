"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { id: "research", label: "Research" },
  { id: "gtm", label: "GTM" },
  { id: "marketing", label: "Marketing" },
  { id: "brand", label: "Brand" },
  { id: "pitch", label: "Pitch" },
];

const docs = [
  {
    id: "research",
    title: "Market Research",
    description: "Target audience analysis, competitive landscape, market sizing",
    link: "#research",
    linkLabel: "Open Doc",
  },
  {
    id: "gtm",
    title: "Go-To-Market Strategy",
    description: "Launch plan, distribution channels, growth strategy",
    link: "#gtm",
    linkLabel: "Open Doc",
  },
  {
    id: "marketing",
    title: "Marketing Playbook",
    description: "Content strategy, social media, partnerships",
    link: "#marketing",
    linkLabel: "Open Doc",
  },
  {
    id: "brand",
    title: "Brand Guidelines",
    description: "Visual identity, tone of voice, messaging framework",
    link: "#brand",
    linkLabel: "Open Doc",
  },
  {
    id: "pitch",
    title: "Pitch Deck",
    description: "Investor-ready presentation with financials",
    link: "/pitch",
    linkLabel: "View Pitch",
  },
];

export default function DocsPage() {
  const [activeNav, setActiveNav] = useState("research");

  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-16">
      <div className="flex">
        {/* Sidebar — hidden on mobile */}
        <aside className="hidden lg:flex flex-col w-[220px] min-h-[calc(100vh-4rem)] bg-[#1B4332] px-6 py-8 fixed top-16 left-0">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <div
              className="w-7 h-7 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1B4332] font-bold text-xs"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              C
            </div>
            <span
              className="text-sm font-bold text-white"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Coinstack
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                  activeNav === item.id
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-[220px] px-6 sm:px-10 lg:px-16 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Documentation Hub
            </h1>
            <p className="text-lg text-[#6B6B6B] mb-12 max-w-xl">
              Everything you need to understand Coinstack&apos;s strategy
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {docs.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href={doc.link}
                  className="group block bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <h3
                    className="text-lg font-bold text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {doc.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] mb-4 leading-relaxed">
                    {doc.description}
                  </p>
                  <span className="text-sm font-medium text-[#1B4332] group-hover:text-[#D4A017] transition-colors">
                    {doc.linkLabel} &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
