"use client";

import { useState } from "react";
import Link from "next/link";

const sections = [
  {
    id: "research",
    title: "Research",
    icon: "🔬",
    description:
      "Market research, competitive analysis, and user insights that shaped Coinstack's product direction.",
    items: [
      {
        title: "IdeaBrowser Research Doc",
        description:
          "Full market research including competitor analysis, user pain points, monetization strategies, and market sizing for the gamified personal finance space.",
        type: "research" as const,
      },
    ],
  },
  {
    id: "gtm",
    title: "GTM Plan",
    icon: "🚀",
    description:
      "Go-to-market strategy covering launch phases, distribution channels, and growth targets.",
    items: [
      {
        title: "GTM Strategy Document",
        description:
          "Complete go-to-market plan including launch timeline, channel strategy, partnership targets, and KPIs for Coinstack's market entry.",
        type: "link" as const,
        href: "https://docs.google.com/document/d/1DaToydXjmt8wruppRxoxuauZNf-fQMGQlRsbOHCI-tI/edit",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: "📣",
    description:
      "Marketing plan with content strategy, paid acquisition, and community-building tactics.",
    items: [
      {
        title: "Marketing Plan",
        description:
          "Detailed marketing plan covering content strategy, social media playbook, paid acquisition channels, influencer partnerships, and community growth tactics.",
        type: "link" as const,
        href: "https://docs.google.com/document/d/1AZFtnsfL43tmJpav4Lhjz8xUxb9l7gDvnXZBadDVs30/edit",
      },
    ],
  },
  {
    id: "brand",
    title: "Brand",
    icon: "🎨",
    description:
      "Brand guidelines, visual identity system, and design tokens.",
    items: [
      {
        title: "Brand Identity",
        description:
          "Coinstack's visual identity system — colors, typography, spacing, logo usage, and tone of voice guidelines.",
        type: "brand" as const,
      },
    ],
  },
  {
    id: "pitch",
    title: "Pitch",
    icon: "🎯",
    description:
      "Investor pitch deck with market opportunity, product vision, and growth projections.",
    items: [
      {
        title: "Pitch Deck",
        description:
          "Full investor pitch deck covering the problem, solution, market size, traction, business model, and team.",
        type: "route" as const,
        href: "/pitch",
      },
    ],
  },
];

const brandColors = [
  { name: "Forest Green", hex: "#1B4332", text: "white" },
  { name: "Gold", hex: "#D4A017", text: "black" },
  { name: "Cream", hex: "#FAFAF7", text: "black" },
  { name: "Dark Forest", hex: "#0F2A1D", text: "white" },
  { name: "Light Gold", hex: "#F5E6B8", text: "black" },
];

const brandFonts = [
  {
    name: "Cabinet Grotesk",
    usage: "Headlines, buttons, navigation",
    weight: "700–800",
  },
  {
    name: "Instrument Sans",
    usage: "Body text, descriptions, UI copy",
    weight: "400–600",
  },
  {
    name: "DM Mono",
    usage: "Stats, numbers, code snippets",
    weight: "400–500",
  },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentSection = sections.find((s) => s.id === activeSection)!;

  return (
    <div style={{ minHeight: "80vh", backgroundColor: "#FAFAF7" }}>
      {/* Section Header Banner */}
      <div
        style={{
          backgroundColor: "#1B4332",
          borderBottom: "3px solid #D4A017",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 36,
              color: "#D4A017",
              margin: "0 0 8px 0",
            }}
          >
            Documentation
          </h1>
          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
            }}
          >
            Research, strategy, brand guidelines, and pitch materials for
            Coinstack.
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          minHeight: "calc(80vh - 120px)",
        }}
      >
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="docs-mobile-toggle"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 40,
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#1B4332",
            color: "#D4A017",
            border: "2px solid #D4A017",
            fontSize: 24,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Sidebar */}
        <aside
          className={`docs-sidebar ${mobileMenuOpen ? "docs-sidebar-open" : ""}`}
          style={{
            width: 260,
            flexShrink: 0,
            borderRight: "1px solid #e5e5e0",
            padding: "32px 0",
            backgroundColor: "#FAFAF7",
          }}
        >
          <div style={{ padding: "0 24px", marginBottom: 24 }}>
            <h2
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#1B4332",
                opacity: 0.5,
                margin: 0,
              }}
            >
              Sections
            </h2>
          </div>
          <nav>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  padding: "12px 24px",
                  border: "none",
                  backgroundColor:
                    activeSection === section.id ? "#1B4332" : "transparent",
                  color:
                    activeSection === section.id ? "#D4A017" : "#1B4332",
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: activeSection === section.id ? 600 : 400,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                  borderLeft:
                    activeSection === section.id
                      ? "3px solid #D4A017"
                      : "3px solid transparent",
                }}
              >
                <span style={{ fontSize: 18 }}>{section.icon}</span>
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "40px 48px" }} className="docs-main">
          <div style={{ maxWidth: 720 }}>
            {/* Section Header */}
            <div style={{ marginBottom: 40 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontSize: 32 }}>{currentSection.icon}</span>
                <h2
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: 32,
                    color: "#1B4332",
                    margin: 0,
                  }}
                >
                  {currentSection.title}
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 16,
                  color: "#1B4332",
                  opacity: 0.7,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {currentSection.description}
              </p>
            </div>

            {/* Items */}
            {currentSection.items.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #e5e5e0",
                  borderRadius: 12,
                  padding: 32,
                  marginBottom: 20,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#1B4332",
                    margin: "0 0 8px 0",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 15,
                    color: "#1B4332",
                    opacity: 0.7,
                    lineHeight: 1.6,
                    margin: "0 0 20px 0",
                  }}
                >
                  {item.description}
                </p>

                {item.type === "link" && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 20px",
                      backgroundColor: "#1B4332",
                      color: "#D4A017",
                      borderRadius: 8,
                      textDecoration: "none",
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      transition: "opacity 0.15s ease",
                    }}
                  >
                    Open in Google Docs ↗
                  </a>
                )}

                {item.type === "route" && (
                  <Link
                    href={item.href!}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 20px",
                      backgroundColor: "#D4A017",
                      color: "#1B4332",
                      borderRadius: 8,
                      textDecoration: "none",
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    View Pitch Deck →
                  </Link>
                )}

                {item.type === "research" && (
                  <div
                    style={{
                      padding: 20,
                      backgroundColor: "#f5f5f0",
                      borderRadius: 8,
                      border: "1px dashed #d5d5d0",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: 14,
                        color: "#1B4332",
                        opacity: 0.6,
                        margin: "0 0 12px 0",
                        lineHeight: 1.6,
                      }}
                    >
                      Research documentation compiled from IdeaBrowser analysis.
                      Key findings include:
                    </p>
                    <ul
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: 14,
                        color: "#1B4332",
                        opacity: 0.6,
                        margin: 0,
                        paddingLeft: 20,
                        lineHeight: 1.8,
                      }}
                    >
                      <li>
                        <strong>Market size:</strong> $4.2B gamified education
                        market
                      </li>
                      <li>
                        <strong>Gap identified:</strong> No Duolingo-style app
                        exists for personal finance
                      </li>
                      <li>
                        <strong>Target demographic:</strong> 18–35 year olds
                        seeking financial literacy
                      </li>
                      <li>
                        <strong>Monetization:</strong> Freemium with premium
                        tiers ($4.99–$14.99/mo)
                      </li>
                      <li>
                        <strong>Competitor weakness:</strong> Existing tools
                        focus on tracking, not habit formation
                      </li>
                    </ul>
                  </div>
                )}

                {item.type === "brand" && (
                  <div>
                    {/* Color Palette */}
                    <div style={{ marginBottom: 24 }}>
                      <h4
                        style={{
                          fontFamily: "'Cabinet Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          color: "#1B4332",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          margin: "0 0 12px 0",
                        }}
                      >
                        Color Palette
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          flexWrap: "wrap",
                        }}
                      >
                        {brandColors.map((color) => (
                          <div
                            key={color.hex}
                            style={{
                              width: 100,
                              borderRadius: 8,
                              overflow: "hidden",
                              border: "1px solid #e5e5e0",
                            }}
                          >
                            <div
                              style={{
                                height: 48,
                                backgroundColor: color.hex,
                              }}
                            />
                            <div style={{ padding: "8px 10px" }}>
                              <div
                                style={{
                                  fontFamily: "'DM Mono', monospace",
                                  fontSize: 11,
                                  color: "#1B4332",
                                  fontWeight: 500,
                                }}
                              >
                                {color.hex}
                              </div>
                              <div
                                style={{
                                  fontFamily: "'Instrument Sans', sans-serif",
                                  fontSize: 11,
                                  color: "#1B4332",
                                  opacity: 0.5,
                                }}
                              >
                                {color.name}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Typography */}
                    <div>
                      <h4
                        style={{
                          fontFamily: "'Cabinet Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          color: "#1B4332",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          margin: "0 0 12px 0",
                        }}
                      >
                        Typography
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {brandFonts.map((font) => (
                          <div
                            key={font.name}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "10px 14px",
                              backgroundColor: "#f5f5f0",
                              borderRadius: 8,
                              flexWrap: "wrap",
                              gap: 8,
                            }}
                          >
                            <span
                              style={{
                                fontFamily:
                                  font.name === "Cabinet Grotesk"
                                    ? "'Cabinet Grotesk', sans-serif"
                                    : font.name === "DM Mono"
                                      ? "'DM Mono', monospace"
                                      : "'Instrument Sans', sans-serif",
                                fontSize: 15,
                                fontWeight: 600,
                                color: "#1B4332",
                              }}
                            >
                              {font.name}
                            </span>
                            <span
                              style={{
                                fontFamily: "'Instrument Sans', sans-serif",
                                fontSize: 12,
                                color: "#1B4332",
                                opacity: 0.5,
                              }}
                            >
                              {font.usage}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .docs-mobile-toggle {
            display: flex !important;
          }
          .docs-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 30;
            transform: translateX(-100%);
            transition: transform 0.2s ease;
            box-shadow: 4px 0 12px rgba(0,0,0,0.1);
            width: 260px !important;
          }
          .docs-sidebar-open {
            transform: translateX(0) !important;
          }
          .docs-main {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
