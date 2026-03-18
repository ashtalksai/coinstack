"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ───────────────────────────────────────────────
type SectionId = "research" | "gtm" | "marketing" | "brand" | "pitch";

interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "research", label: "Research", icon: "📊" },
  { id: "gtm", label: "GTM Plan", icon: "🎯" },
  { id: "marketing", label: "Marketing", icon: "📣" },
  { id: "brand", label: "Brand", icon: "🎨" },
  { id: "pitch", label: "Pitch Deck", icon: "🎤" },
];

// ─── Main layout ──────────────────────────────────────────
export default function DocsPage() {
  const [active, setActive] = useState<SectionId>("research");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const navigate = (id: SectionId) => {
    setActive(id);
    setSidebarOpen(false);
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SectionId;
    if (hash && NAV_ITEMS.find((n) => n.id === hash)) {
      setActive(hash);
    }
  }, []);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-[#0F1A14] text-[#FAFAF7]">
      {/* ── Sidebar (desktop) ── */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 bg-[#1B4332] border-r border-white/10 overflow-y-auto">
        <SidebarContent active={active} navigate={navigate} />
      </aside>

      {/* ── Mobile sidebar overlay ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-[#1B4332] z-50 md:hidden overflow-y-auto"
            >
              <SidebarContent active={active} navigate={navigate} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Main content area ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-14 shrink-0 bg-[#0F1A14] border-b border-white/10 flex items-center px-5 gap-4">
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-white/60 hover:text-white"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#D4A017] flex items-center justify-center">
              <span className="text-xs font-bold text-[#1B4332]">C</span>
            </div>
            <span className="font-semibold text-white text-sm" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Coinstack
            </span>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-white/50 text-sm">
              {NAV_ITEMS.find((n) => n.id === active)?.label}
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="https://coinstack.ashketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-[#D4A017] transition-colors"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              ↗ Live Site
            </a>
            <a
              href="/pitch"
              className="text-xs bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-bold px-3 py-1.5 rounded-lg transition-colors"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              View Pitch →
            </a>
          </div>
        </header>

        {/* Scrollable content */}
        <main ref={contentRef} className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {active === "research" && <ResearchSection />}
              {active === "gtm" && <GTMSection />}
              {active === "marketing" && <MarketingSection />}
              {active === "brand" && <BrandSection />}
              {active === "pitch" && <PitchSection />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// ─── Sidebar content ─────────────────────────────────────
function SidebarContent({ active, navigate }: { active: SectionId; navigate: (id: SectionId) => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#D4A017] flex items-center justify-center">
            <span className="font-bold text-[#1B4332] text-sm">C</span>
          </div>
          <span className="font-bold text-white text-lg" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Coinstack</span>
        </div>
        <p className="text-xs text-white/40 ml-11">Documentation Hub</p>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        <p className="text-[10px] text-white/30 px-3 py-2 uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
          Documents
        </p>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left ${
              active === item.id
                ? "bg-[#D4A017] text-[#1A1A1A] font-semibold"
                : "text-white/60 hover:text-white hover:bg-white/8"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        <a
          href="https://coinstack.ashketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors px-2 py-1"
        >
          <span>🌐</span> Live Site
        </a>
        <a
          href="/pitch"
          className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors px-2 py-1"
        >
          <span>📽️</span> Pitch Deck
        </a>
        <p className="text-[10px] text-white/20 px-2 pt-2" style={{ fontFamily: "'DM Mono', monospace" }}>
          ChimeStream Portfolio · March 2026
        </p>
      </div>
    </div>
  );
}

// ─── Shared components ────────────────────────────────────
function SectionHeader({ icon, label, title, subtitle }: { icon: string; label: string; title: string; subtitle?: string }) {
  return (
    <div className="px-8 pt-10 pb-8 border-b border-white/10">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">{icon}</span>
          <span className="text-xs text-[#D4A017] font-bold uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
            {label}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          {title}
        </h1>
        {subtitle && <p className="text-white/50 text-lg">{subtitle}</p>}
      </div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}

function GoldCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#1B4332] border border-[#D4A017]/30 rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}

function StatGrid({ stats }: { stats: { label: string; value: string; note?: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>{s.label}</p>
          <p className="text-2xl font-bold text-[#D4A017]" style={{ fontFamily: "'DM Mono', monospace" }}>{s.value}</p>
          {s.note && <p className="text-xs text-white/30 mt-1">{s.note}</p>}
        </div>
      ))}
    </div>
  );
}

// ─── SECTION: RESEARCH ───────────────────────────────────
function ResearchSection() {
  return (
    <div className="min-h-full">
      <SectionHeader
        icon="📊"
        label="Market Research"
        title="Coinstack Research Document"
        subtitle="Market validation, competitive analysis, and opportunity assessment · March 2026"
      />

      <div className="px-8 py-8 max-w-5xl space-y-8">
        {/* Executive Summary */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Executive Summary</h2>
          <GoldCard>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              <span className="text-[#D4A017] font-bold">Coinstack</span> addresses the behavioral gap in Gen Z personal finance.
              83% of Gen Z consume personal finance content regularly. Median savings: $800. The problem is not information — it&apos;s behavior.
              Coinstack is the only product that combines real transaction data, daily behavioral challenges, and long-term psychological profiling.
            </p>
            <StatGrid stats={[
              { label: "Market Verdict", value: "GO", note: "High-conviction opportunity" },
              { label: "Validation Score", value: "8.5/10", note: "Strong organic demand signals" },
              { label: "Competition", value: "LOW", note: "No direct behavioral app competitor" },
              { label: "Timing", value: "NOW", note: "+4,468% keyword growth" },
            ]} />
          </GoldCard>
        </div>

        {/* Market Size */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Market Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "TAM", value: "$165.9B", desc: "Global personal finance software market (2025)", featured: false },
              { label: "SAM", value: "$28B", desc: "US fintech apps for 18–35 demographic", featured: true },
              { label: "SOM Year 1", value: "$2.4M", desc: "4,000 Pro users + employer B2B channel", featured: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-6 ${item.featured ? "bg-[#1B4332] border border-[#D4A017]/40" : "bg-white/5 border border-white/10"}`}
              >
                <p className="text-xs text-[#D4A017] font-bold mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{item.label}</p>
                <p className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{item.value}</p>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-sm text-white/60">
              <span className="text-[#D4A017]">CAGR 20.57%</span> — Market growing from $165.9B to{" "}
              <span className="text-white font-medium">$507.64B by 2030</span>. The behavioral fintech sub-segment has no dominant player.
            </p>
          </div>
        </div>

        {/* Search Validation */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Search Demand Validation</h2>
          <Card>
            <div className="space-y-3">
              {[
                { kw: "apps for budgeting", vol: "165,000/mo", comp: "LOW", trend: "+stable" },
                { kw: "personal finance app", vol: "110,000/mo", comp: "LOW", trend: "+stable" },
                { kw: "personal money management app", vol: "110,000/mo", comp: "LOW", trend: "+stable" },
                { kw: "best finance apps for beginners", vol: "Growing", comp: "LOW", trend: "+4,468%" },
                { kw: "how to stop overspending", vol: "High volume", comp: "LOW", trend: "Consistent" },
              ].map((row) => (
                <div key={row.kw} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-white/80 text-sm font-medium">{row.kw}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-white/40 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>{row.vol}</span>
                    <span className="text-[#D4A017] text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>{row.trend}</span>
                    <span className="bg-[#1B4332]/80 text-[#D4A017] text-[10px] font-bold px-2 py-0.5 rounded-full">{row.comp}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Competitive Analysis */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Competitive Landscape</h2>
          <Card className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 font-normal pb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Company</th>
                  <th className="text-center text-white/40 font-normal pb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Real Txns</th>
                  <th className="text-center text-white/40 font-normal pb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Daily Habit</th>
                  <th className="text-center text-white/40 font-normal pb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Behavioral</th>
                  <th className="text-center text-white/40 font-normal pb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Gen Z Tone</th>
                  <th className="text-left text-white/40 font-normal pb-3" style={{ fontFamily: "'DM Mono', monospace" }}>Weakness</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Coinstack ✨", us: true, r: "✅", d: "✅", b: "✅", g: "✅", w: "Category creator" },
                  { name: "YNAB", r: "❌", d: "❌", b: "❌", g: "❌", w: "No gamification, no Gen Z" },
                  { name: "Cleo", r: "❌", d: "Partial", b: "❌", g: "✅", w: "Reactions, not habit building" },
                  { name: "Mint (dead)", r: "✅", d: "❌", b: "❌", g: "❌", w: "Charts don't change behavior" },
                  { name: "Monarch Money", r: "✅", d: "❌", b: "❌", g: "❌", w: "$14.99/mo, complex, not Gen Z" },
                  { name: "Greenlight", r: "❌", d: "❌", b: "❌", g: "❌", w: "Parent-controlled, wrong demographic" },
                ].map((row) => (
                  <tr key={row.name} className={`border-b border-white/5 ${row.us ? "bg-[#1B4332]/30" : ""}`}>
                    <td className={`py-3 font-medium ${row.us ? "text-[#D4A017]" : "text-white/70"}`}>{row.name}</td>
                    <td className={`text-center ${row.r === "✅" ? "text-green-400" : "text-white/20"}`}>{row.r}</td>
                    <td className={`text-center ${row.d === "✅" ? "text-green-400" : row.d === "Partial" ? "text-yellow-400" : "text-white/20"}`}>{row.d}</td>
                    <td className={`text-center ${row.b === "✅" ? "text-green-400" : "text-white/20"}`}>{row.b}</td>
                    <td className={`text-center ${row.g === "✅" ? "text-green-400" : "text-white/20"}`}>{row.g}</td>
                    <td className="text-white/40 text-xs py-3">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* Community Signals */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Community Validation Signals</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { platform: "Reddit", signal: "5 communities · 17M+ members", detail: "r/personalfinance, r/financialindependence, r/povertyfinance, r/youngadults, r/college actively discussing behavioral money challenges" },
              { platform: "TikTok", signal: "20 billion+ views", detail: "#PersonalFinance, #MoneyTok, #FinTok — format matches 3-minute daily use case perfectly" },
              { platform: "YouTube", signal: "14 channels · 15 themes", detail: "Graham Stephan (5M+), Andrei Jikh (1M+), Humphrey Yang — 'best personal finance apps' is a top search theme" },
              { platform: "Facebook", signal: "5 groups · 100K+ members", detail: "'Millennial Money', 'Personal Finance for Young Professionals' — organic, high-intent audience" },
            ].map((item) => (
              <Card key={item.platform}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white">{item.platform}</span>
                  <span className="text-[#D4A017] text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>{item.signal}</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{item.detail}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <GoldCard>
          <h3 className="text-[#D4A017] font-bold text-lg mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            ✅ Recommendation: GO
          </h3>
          <p className="text-white/70 leading-relaxed">
            Strong organic demand (165K+/mo search volume, LOW competition), competitor proof that Gen Z pays for personality-forward finance apps ($280M ARR Cleo),
            and a clear whitespace in behavioral profiling. The zero-competition window exists NOW — keyword growth of +4,468% signals a forming market.
            Launch organic immediately, validate retention, then scale creator distribution.
          </p>
        </GoldCard>
      </div>
    </div>
  );
}

// ─── SECTION: GTM ─────────────────────────────────────────
function GTMSection() {
  return (
    <div className="min-h-full">
      <SectionHeader
        icon="🎯"
        label="Go-to-Market Plan"
        title="Coinstack GTM Plan"
        subtitle="Community-first launch strategy · March 2026"
      />

      <div className="px-8 py-8 max-w-5xl space-y-8">
        {/* Overview */}
        <GoldCard>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>LAUNCH DATE</p>
              <p className="text-2xl font-bold text-white">March 18, 2026</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>WEEK 1 TARGET</p>
              <p className="text-2xl font-bold text-[#D4A017]">300 signups</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>MONTH 1 MRR TARGET</p>
              <p className="text-2xl font-bold text-[#D4A017]">$500</p>
            </div>
          </div>
        </GoldCard>

        {/* Target Audience */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Target Audience</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <h3 className="font-bold text-white mb-3">&ldquo;Broke But Educated Gen Z&rdquo;</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>18–28, first real job or in college</li>
                <li>Earning $30K–$70K/year</li>
                <li>Watches Graham Stephan, NerdWallet YouTube</li>
                <li>Median savings: $800</li>
                <li>Knows concepts, doesn&apos;t do the habits</li>
                <li>Mobile-first, Venmo/Robinhood user</li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-bold text-white mb-3">Where They Are</h3>
              <div className="space-y-2">
                {[
                  { platform: "Reddit", channels: "r/personalfinance (17M+), r/povertyfinance, r/financialindependence" },
                  { platform: "TikTok", channels: "#PersonalFinance (20B+ views), #MoneyTok, #FinTok" },
                  { platform: "YouTube", channels: "Graham Stephan, Humphrey Yang, Jarrad Morrow" },
                  { platform: "Twitter/X", channels: "@RamitSethi community, #BuildInPublic" },
                ].map((item) => (
                  <div key={item.platform}>
                    <span className="text-[#D4A017] text-xs font-bold">{item.platform}</span>
                    <span className="text-white/50 text-xs ml-2">{item.channels}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* 90-Day Plan */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>90-Day Launch Timeline</h2>
          <div className="space-y-4">
            {[
              {
                phase: "WEEK 1 · Mar 18–24",
                title: "Reddit + TikTok Ignition",
                color: "bg-[#1B4332] border-[#D4A017]/30",
                items: [
                  "Day 1: Reddit post r/personalfinance + r/povertyfinance (Ash as founder)",
                  "Day 2: First TikTok — onboarding walkthrough video, 60 seconds",
                  "Day 3: Twitter/X 'Gen Z finance paradox' thread",
                  "Day 4: Email/DM 10 micro-influencers (50K–200K TikTok finance creators)",
                  "Day 5: Second TikTok — behavioral radar chart reveal",
                  "Target: 500–1,000 organic signups",
                ],
              },
              {
                phase: "WEEK 2 · Mar 25–31",
                title: "Product Hunt Launch",
                color: "bg-[#D4A017]/10 border-[#D4A017]/20",
                items: [
                  "Monday: Product Hunt launch (prep hunters list in week 1)",
                  "Tuesday: PH launch day — Ash active in comments all day",
                  "Target: Top 5 product of the day",
                  "Expected: 500–2,000 additional signups",
                  "Thursday: Post 'launch week results' on Twitter/X + Reddit",
                  "Friday: First creator outreach emails for YouTube integrations",
                ],
              },
              {
                phase: "MONTH 2 · April 2026",
                title: "Creator Integrations + SEO",
                color: "bg-white/5 border-white/10",
                items: [
                  "2 TikTok videos per week (tutorial + social proof)",
                  "Weekly Twitter/X thread on money habit data (anonymized, build-in-public)",
                  "SEO: Publish 2 blog posts targeting 165K/mo keyword cluster",
                  "Creator integration goes live (1–2 YouTube reviews)",
                  "Analyze retention: day 7, day 14, day 30 streak rates",
                  "Target: 5,000 total signups, 200 Pro users",
                ],
              },
              {
                phase: "MONTH 3 · May 2026",
                title: "Scale What Works",
                color: "bg-white/5 border-white/10",
                items: [
                  "Scale best-performing channel (TikTok Spark Ads on top organic video)",
                  "Cut underperforming channels",
                  "Employer outreach pilot: 5 companies at $3/seat/month",
                  "Email onboarding sequence tuned based on months 1–2 data",
                  "Target: $2,000 MRR, 400 Pro users",
                ],
              },
            ].map((phase) => (
              <div key={phase.phase} className={`border rounded-2xl p-6 ${phase.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#D4A017] font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>{phase.phase}</span>
                  <span className="font-bold text-white text-lg" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{phase.title}</span>
                </div>
                <ul className="space-y-1.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#D4A017] mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Success Metrics</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10">
                  {["Metric", "Week 1", "Month 1", "Month 3"].map((h) => (
                    <th key={h} className="text-left text-white/40 font-normal pb-3 pr-6" style={{ fontFamily: "'DM Mono', monospace" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Signups", "300", "1,000", "5,000"],
                  ["Day-7 Retention", "—", "40%", "45%"],
                  ["Free → Pro Conversion", "—", "5%", "8%"],
                  ["MRR", "—", "$500", "$2,000"],
                  ["Reddit upvotes", "200+", "—", "—"],
                  ["TikTok views (total)", "5,000+", "50,000", "200,000"],
                  ["ProductHunt rank", "Top 5", "—", "—"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-white/5">
                    <td className="py-3 text-white/70 pr-6 font-medium">{row[0]}</td>
                    {row.slice(1).map((v, i) => (
                      <td key={i} className="py-3 text-white/50 pr-6" style={{ fontFamily: "'DM Mono', monospace" }}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <GoldCard>
          <h3 className="font-bold text-white mb-3">Month 1 Budget: $0</h3>
          <p className="text-white/60 text-sm mb-4">Pure organic. Validate signal before spending.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-white/40 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>MONTH 1 (BOOTSTRAP)</p>
              <p className="text-3xl font-bold text-[#D4A017]">$0</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>MONTH 2 (IF ORGANIC SIGNALS STRONG)</p>
              <p className="text-3xl font-bold text-[#D4A017]">$700–$2,200</p>
              <p className="text-xs text-white/40 mt-1">TikTok Spark Ads $200 + Creator integration $500–$2K</p>
            </div>
          </div>
        </GoldCard>
      </div>
    </div>
  );
}

// ─── SECTION: MARKETING ───────────────────────────────────
function MarketingSection() {
  return (
    <div className="min-h-full">
      <SectionHeader
        icon="📣"
        label="Marketing Plan"
        title="Coinstack Marketing Plan"
        subtitle="Positioning, messaging, content strategy, and campaigns · March 2026"
      />

      <div className="px-8 py-8 max-w-5xl space-y-8">
        {/* Positioning */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Positioning Statement</h2>
          <GoldCard>
            <div className="space-y-3 text-sm">
              {[
                { label: "FOR", value: "18–28 year-olds who consume personal finance content compulsively" },
                { label: "WHO", value: "Know what to do with money but still don't do it — information without behavior change" },
                { label: "COINSTACK IS", value: "A behavioral finance app that turns real transactions into daily 3-minute habits" },
                { label: "THAT", value: "Builds a long-term psychological profile of how you actually think about money" },
                { label: "UNLIKE", value: "YNAB, Cleo, Mint — which all show you data but don't change your behavior" },
                { label: "WE", value: "Combine real transaction data + daily challenges + growing behavioral profile — the first of its kind" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-[#D4A017] font-bold w-32 shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>{item.label}</span>
                  <span className="text-white/70">{item.value}</span>
                </div>
              ))}
            </div>
          </GoldCard>
        </div>

        {/* Brand Voice */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Brand Voice</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <h3 className="font-bold text-[#D4A017] mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>TONE</h3>
              <p className="text-white/70 text-sm mb-4">Smart-casual. Non-judgmental. Direct. Not a bank. Sounds like a friend who figured out money — not a financial advisor in a suit.</p>
              <h3 className="font-bold text-[#D4A017] mb-2 mt-4" style={{ fontFamily: "'DM Mono', monospace" }}>KEY PHRASES</h3>
              <ul className="space-y-1 text-sm">
                {["3 minutes a day", "Real money habits", "Your behavioral profile", "Today's challenge", "Gen Z's money problem isn't education", "Not a budgeting app"].map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-[#D4A017]">·</span>
                    <span className="text-white/60">&ldquo;{p}&rdquo;</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="font-bold text-red-400 mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>NEVER SAY</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Financial wellness",
                  "Take control of your finances",
                  "Smart money management",
                  "Start your journey",
                  "Achieve your financial goals",
                  "You wasted / You overspent (shame language)",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-white/40 line-through">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-white/5 rounded-xl p-3">
                <p className="text-xs text-white/50 italic">
                  &ldquo;Coinstack is the finance app for people who already know what to do and just need something that makes them actually do it.&rdquo;
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Messaging Pillars */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Core Messaging Pillars</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Speed", message: '"3 minutes, not 3 hours"', desc: "The 3-minute format is core to the value prop. Everywhere." },
              { title: "Intelligence", message: '"AI trained on YOUR spending"', desc: "Real transactions as input. Not generic advice.", featured: true },
              { title: "Control", message: '"You\'re still the expert"', desc: "Non-judgmental. You're building awareness, not being judged." },
            ].map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl p-6 ${p.featured ? "bg-[#1B4332] border border-[#D4A017]/40" : "bg-white/5 border border-white/10"}`}
              >
                <p className="text-xs text-[#D4A017] font-bold mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{p.title}</p>
                <p className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{p.message}</p>
                <p className="text-sm text-white/50">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Cadence */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Social Media Cadence</h2>
          <Card>
            <div className="space-y-3">
              {[
                { platform: "TikTok", freq: "3×/week", type: "Screen recordings, POV, before/after" },
                { platform: "Twitter/X", freq: "5×/week", type: "Threads, hot takes, data, replies" },
                { platform: "Reddit", freq: "2×/month", type: "Launch threads, community value posts" },
                { platform: "Instagram", freq: "2×/week", type: "Carousels, behavioral data visuals" },
                { platform: "LinkedIn", freq: "1×/week", type: "Founder story, fintech angle, B2B seed" },
              ].map((row) => (
                <div key={row.platform} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
                  <span className="text-[#D4A017] font-bold text-sm w-24">{row.platform}</span>
                  <span className="text-white/70 text-sm w-20" style={{ fontFamily: "'DM Mono', monospace" }}>{row.freq}</span>
                  <span className="text-white/50 text-sm">{row.type}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Email Sequence */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Email Welcome Sequence (7 emails)</h2>
          <div className="space-y-3">
            {[
              { day: "Day 0", subject: "Welcome + 'Your first challenge is waiting'", note: "Personalized to challenge category" },
              { day: "Day 1", subject: "'Here's what your behavioral profile means'", note: "Education on the radar chart" },
              { day: "Day 3", subject: "Social proof — '600 people completed yesterday's challenge'", note: "Show anonymized community data" },
              { day: "Day 7", subject: "Day 7 is where habits form. Here's your re-entry challenge.", note: "If no 7-day streak" },
              { day: "Day 10", subject: "Unlock your full behavioral profile for $9.99/month", note: "Free → Pro upgrade nudge" },
              { day: "Day 14", subject: "'Your 2-week financial behavioral report'", note: "Show progress, reinforce habit" },
              { day: "Day 30", subject: "'30 days of Coinstack. Here's your full behavioral shift.'", note: "Powerful retention hook" },
            ].map((email) => (
              <div key={email.day} className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-xl px-4 py-3">
                <span className="text-[#D4A017] text-xs font-bold w-14 shrink-0 mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{email.day}</span>
                <div>
                  <p className="text-white/80 text-sm font-medium">{email.subject}</p>
                  <p className="text-white/40 text-xs mt-0.5">{email.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <GoldCard>
          <h3 className="font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>North Star Metric: Day-14 Retention</h3>
          <p className="text-white/60 text-sm mb-5">
            If 40%+ of users who sign up are still completing daily challenges on day 14, the behavioral habit loop is working.
            Everything else (MRR, signups, conversion) follows from retention.
          </p>
          <StatGrid stats={[
            { label: "North Star", value: "40%", note: "Day-14 retention target" },
            { label: "Week 1 Target", value: "300", note: "Total signups" },
            { label: "Month 1 MRR", value: "$500", note: "50 Pro users" },
            { label: "Conversion Goal", value: "5%", note: "Free → Pro" },
          ]} />
        </GoldCard>
      </div>
    </div>
  );
}

// ─── SECTION: BRAND ───────────────────────────────────────
function BrandSection() {
  return (
    <div className="min-h-full">
      <SectionHeader
        icon="🎨"
        label="Brand Specification"
        title="Coinstack Brand Spec"
        subtitle="Visual identity, color palette, typography, and component library"
      />

      <div className="px-8 py-8 max-w-5xl space-y-8">
        {/* Colors */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Forest Green", hex: "#1B4332", rgb: "27, 67, 50", role: "Primary · Brand color · Backgrounds" },
              { name: "Warm Gold", hex: "#D4A017", rgb: "212, 160, 23", role: "Accent · CTAs · Highlights · Stats" },
              { name: "Cream", hex: "#FAFAF7", rgb: "250, 250, 247", role: "Light bg · High-contrast text on dark" },
              { name: "Charcoal", hex: "#1A1A1A", rgb: "26, 26, 26", role: "Foreground text · Dark backgrounds" },
              { name: "Gold Hover", hex: "#E5B020", rgb: "229, 176, 32", role: "Button hover state" },
              { name: "Forest Dark", hex: "#245A42", rgb: "36, 90, 66", role: "Sidebar accent · Hover states" },
            ].map((color) => (
              <div key={color.hex} className="rounded-2xl overflow-hidden border border-white/10">
                <div className="h-24" style={{ backgroundColor: color.hex }} />
                <div className="bg-white/5 p-4">
                  <p className="font-bold text-white text-sm">{color.name}</p>
                  <p className="text-[#D4A017] text-xs mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{color.hex}</p>
                  <p className="text-white/30 text-[10px] mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>rgb({color.rgb})</p>
                  <p className="text-white/40 text-xs mt-1">{color.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Typography</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                font: "Cabinet Grotesk",
                role: "Display / Headlines",
                usage: "H1–H3, product name, deck headlines, CTAs",
                sample: "Coinstack",
                weight: "800 · 700 · 500",
                family: "'Cabinet Grotesk', sans-serif",
              },
              {
                font: "Instrument Sans",
                role: "Body / UI",
                usage: "Body copy, UI elements, nav, descriptions",
                sample: "Real money habits.",
                weight: "600 · 500 · 400",
                family: "'Instrument Sans', sans-serif",
              },
              {
                font: "DM Mono",
                role: "Data / Labels",
                usage: "Stats, numbers, code, labels, metadata",
                sample: "$9.99/mo",
                weight: "500 · 400",
                family: "'DM Mono', monospace",
              },
            ].map((t) => (
              <Card key={t.font}>
                <p className="text-xs text-[#D4A017] font-bold mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{t.role.toUpperCase()}</p>
                <p className="text-3xl font-bold text-white mb-3" style={{ fontFamily: t.family }}>{t.sample}</p>
                <p className="font-bold text-white text-sm mb-1">{t.font}</p>
                <p className="text-white/40 text-xs">{t.weight}</p>
                <p className="text-white/40 text-xs mt-2">{t.usage}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Components */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>UI Components</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <p className="text-xs text-[#D4A017] font-bold mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>BUTTONS</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <button className="bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-bold px-5 py-2.5 rounded-xl text-sm">Start My Free Challenge</button>
                  <span className="text-xs text-white/30">Primary CTA</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <button className="bg-[#1B4332] border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-white/40">Go Pro — $9.99/mo</button>
                  <span className="text-xs text-white/30">Secondary</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <button className="text-white/60 hover:text-white px-5 py-2.5 text-sm font-medium">See How It Works →</button>
                  <span className="text-xs text-white/30">Ghost</span>
                </div>
              </div>
            </Card>

            <Card>
              <p className="text-xs text-[#D4A017] font-bold mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>BADGES & LABELS</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#D4A017]/15 text-[#D4A017] text-xs font-bold px-3 py-1 rounded-full">IMPULSE CONTROL</span>
                <span className="bg-[#1B4332] text-white text-xs px-3 py-1 rounded-full border border-white/20">Day 14 🔥</span>
                <span className="bg-green-500/15 text-green-400 text-xs font-bold px-3 py-1 rounded-full">LOW COMPETITION</span>
                <span className="bg-[#D4A017] text-[#1A1A1A] text-[10px] font-bold px-2 py-0.5 rounded-full">$9.99/mo</span>
                <span className="border border-white/20 text-white/50 text-xs px-3 py-1 rounded-full">Behavioral Fintech</span>
              </div>
            </Card>

            <Card>
              <p className="text-xs text-[#D4A017] font-bold mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>CARD HIERARCHY</p>
              <div className="space-y-3">
                <div className="bg-[#1B4332] border border-[#D4A017]/30 rounded-xl p-4">
                  <p className="text-xs text-[#D4A017] mb-1">FEATURED</p>
                  <p className="text-white font-semibold text-sm">Pro Plan — $9.99/month</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-sm">Standard card — supporting content</p>
                </div>
                <div className="rounded-xl p-4 border border-white/5">
                  <p className="text-white/30 text-sm">Muted card — metadata, secondary</p>
                </div>
              </div>
            </Card>

            <Card>
              <p className="text-xs text-[#D4A017] font-bold mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>DO &amp; DON&apos;T</p>
              <div className="space-y-2">
                {[
                  { ok: true, text: "Forest Green #1B4332 as primary brand color" },
                  { ok: true, text: "Gold #D4A017 for ONE key element per layout" },
                  { ok: true, text: "Cabinet Grotesk for all headlines" },
                  { ok: false, text: "Generic blue/purple color schemes" },
                  { ok: false, text: "Corporate buzzwords: 'financial wellness'" },
                  { ok: false, text: "Shame language about spending behavior" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-xs">
                    <span className={item.ok ? "text-green-400" : "text-red-400"}>{item.ok ? "✅" : "❌"}</span>
                    <span className={item.ok ? "text-white/60" : "text-white/40"}>{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Imagery */}
        <GoldCard>
          <h3 className="font-bold text-white mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Imagery Direction</h3>
          <div className="grid md:grid-cols-2 gap-5 text-sm">
            <div>
              <p className="text-[#D4A017] font-bold mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>VISUAL STYLE</p>
              <ul className="space-y-1.5 text-white/60">
                <li>· Abstract 3D renders with brand color gradients</li>
                <li>· Clean, warm lighting — not cold or clinical</li>
                <li>· Gen Z lifestyle contexts — mobile, casual, real</li>
                <li>· No stock photos of suited financial advisors</li>
                <li>· Data visualizations as hero visuals</li>
              </ul>
            </div>
            <div>
              <p className="text-[#D4A017] font-bold mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>PROMPT FORMULA</p>
              <div className="bg-black/30 rounded-xl p-3 font-mono text-xs text-white/50 leading-relaxed">
                &ldquo;[Subject] + [3D render / vector style] + [warm forest green #1B4332 and gold #D4A017] + [clean minimal professional] + [no text in image]&rdquo;
              </div>
            </div>
          </div>
        </GoldCard>
      </div>
    </div>
  );
}

// ─── SECTION: PITCH ───────────────────────────────────────
function PitchSection() {
  return (
    <div className="min-h-full">
      <SectionHeader
        icon="🎤"
        label="Pitch Deck"
        title="Coinstack Pitch Deck"
        subtitle="12-slide interactive deck · Framer Motion · Full-screen navigation"
      />

      <div className="px-8 py-8 max-w-5xl space-y-8">
        {/* Launch link */}
        <GoldCard>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-[#D4A017] font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>INTERACTIVE PITCH DECK</p>
              <p className="text-white text-lg font-semibold mb-1" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Full-screen slide deck with Framer Motion animations
              </p>
              <p className="text-white/50 text-sm">
                Arrow keys / click to navigate · 12 slides · Mobile-responsive · Brand-accurate
              </p>
            </div>
            <a
              href="/pitch"
              className="shrink-0 bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-bold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Open Pitch Deck →
            </a>
          </div>
        </GoldCard>

        {/* Slide structure */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Slide Structure (12 Slides)</h2>
          <div className="space-y-3">
            {[
              { num: "01", title: "Title", headline: "Coinstack — 3 minutes a day. Real money habits.", bg: "Forest Green" },
              { num: "02", title: "Problem", headline: "Gen Z knows everything about money. Still broke.", bg: "Charcoal" },
              { num: "03", title: "Solution", headline: "Coinstack. Not a budgeting app. A behavior change engine.", bg: "Forest Green" },
              { num: "04", title: "How It Works", headline: "The daily habit loop: Sync → Challenge → Profile", bg: "Cream" },
              { num: "05", title: "Product", headline: "The Challenge Card — built from your actual transactions", bg: "Forest Green" },
              { num: "06", title: "Market", headline: "$165.9B TAM · 20.57% CAGR · Zero-competition keyword window", bg: "Charcoal" },
              { num: "07", title: "Traction", headline: "The market is already searching for this. We built the answer.", bg: "Cream" },
              { num: "08", title: "Business Model", headline: "Freemium SaaS · $9.99/mo · B2B employer expansion", bg: "Forest Green" },
              { num: "09", title: "Competition", headline: "Nobody built this yet. We own the category.", bg: "Charcoal" },
              { num: "10", title: "GTM", headline: "Community-first · Organic proof · Then scale what works", bg: "Cream" },
              { num: "11", title: "Team & Ask", headline: "$250K seed · ChimeStream · Ash Hatef, Rotterdam", bg: "Forest Green" },
              { num: "12", title: "Vision", headline: "The world's largest dataset on how people actually think about money.", bg: "Charcoal" },
            ].map((slide) => (
              <div key={slide.num} className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-xl px-5 py-3">
                <span className="text-[#D4A017] text-sm font-bold w-8 shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>{slide.num}</span>
                <span className="font-semibold text-white text-sm w-36 shrink-0">{slide.title}</span>
                <span className="text-white/50 text-sm flex-1">{slide.headline}</span>
                <span className="text-xs text-white/25 shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>{slide.bg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key stats from deck */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Key Figures in Deck</h2>
          <StatGrid stats={[
            { label: "TAM", value: "$165.9B", note: "Global personal finance software" },
            { label: "Gen Z Savings", value: "$800", note: "Federal Reserve median, 2025" },
            { label: "TikTok Views", value: "20B+", note: "#PersonalFinance" },
            { label: "Cleo Benchmark", value: "$280M", note: "ARR — Gen Z pays" },
            { label: "Keyword Volume", value: "165K", note: "/mo, LOW competition" },
            { label: "Keyword Growth", value: "+4,468%", note: "Over 24 months" },
            { label: "Pro Price", value: "$9.99", note: "/month" },
            { label: "LTV:CAC", value: "24–120×", note: "Organic first" },
          ]} />
        </div>
      </div>
    </div>
  );
}
