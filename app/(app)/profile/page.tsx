"use client";

import { useState } from "react";
import { mockBehavioralProfile, mockUser } from "@/lib/mock-data";
import { RadarChart } from "@/components/radar-chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const scores = [
  { label: "Spending Awareness", value: mockBehavioralProfile.spendingAwareness },
  { label: "Saving Reflex", value: mockBehavioralProfile.savingReflex },
  { label: "Debt Mindset", value: mockBehavioralProfile.debtMindset },
  { label: "Impulsivity", value: mockBehavioralProfile.impulsivity },
  { label: "Planning", value: mockBehavioralProfile.planning },
  { label: "Consistency", value: mockBehavioralProfile.consistency },
];

const proFeatures = [
  "Unlimited daily challenges",
  "Advanced behavioral insights",
  "Custom challenge categories",
  "Priority support",
];

export default function ProfilePage() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel 1 — Behavioral Profile */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2
            className="text-xl font-bold mb-6"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: "#1A1A1A",
            }}
          >
            Your Behavioral Profile
          </h2>

          <div className="flex justify-center mb-4">
            <RadarChart scores={mockBehavioralProfile} size={300} />
          </div>

          <div className="flex justify-center mb-6">
            <Badge
              className="px-4 py-1.5 text-sm font-semibold"
              style={{
                backgroundColor: "rgba(212,160,23,0.12)",
                color: "#D4A017",
                border: "none",
              }}
            >
              {mockBehavioralProfile.primaryPersona}
            </Badge>
          </div>

          <div className="space-y-3">
            {scores.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span
                  className="text-xs text-[#6B6B60] w-36 shrink-0"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {s.label}
                </span>
                <div className="flex-1 h-2 rounded-full bg-[#F0F0EB] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${s.value}%`,
                      backgroundColor: s.value >= 60 ? "#1B4332" : "#D4A017",
                    }}
                  />
                </div>
                <span
                  className="text-xs font-medium text-[#1A1A1A] w-8 text-right"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 2 — Account Settings */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2
            className="text-xl font-bold mb-6"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: "#1A1A1A",
            }}
          >
            Account
          </h2>

          <div className="space-y-4">
            <div>
              <label
                className="block text-xs text-[#6B6B60] mb-1"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Name
              </label>
              <input
                type="text"
                readOnly
                value={mockUser.name}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E0] bg-[#FAFAF7] text-sm text-[#1A1A1A]"
              />
            </div>
            <div>
              <label
                className="block text-xs text-[#6B6B60] mb-1"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Email
              </label>
              <input
                type="email"
                readOnly
                value={mockUser.email}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E0] bg-[#FAFAF7] text-sm text-[#1A1A1A]"
              />
            </div>

            {/* Notifications toggle */}
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[#1A1A1A]">Notifications</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className="relative w-11 h-6 rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: notifications ? "#1B4332" : "#D1D1CB",
                }}
              >
                <span
                  className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200"
                  style={{
                    transform: notifications ? "translateX(20px)" : "translateX(0)",
                  }}
                />
              </button>
            </div>

            {/* Connected bank */}
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[#1A1A1A]">Connected Bank</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span
                  className="text-sm text-[#6B6B60]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Chase
                </span>
              </div>
            </div>
          </div>

          <Separator className="my-5" />

          <Button
            variant="ghost"
            className="text-sm text-[#6B6B60] hover:text-[#1A1A1A] px-0"
          >
            Sign Out
          </Button>
        </div>

        {/* Panel 3 — Subscription */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2
            className="text-xl font-bold mb-6"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: "#1A1A1A",
            }}
          >
            Subscription
          </h2>

          <div className="mb-4">
            <Badge
              className="px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: "#F0F0EB",
                color: "#6B6B60",
                border: "none",
              }}
            >
              Free
            </Badge>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#1A1A1A]">Daily challenges</span>
              <span
                className="text-xs text-[#6B6B60]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                1/1 used
              </span>
            </div>
            <Progress value={100} className="h-2" />
            <p className="text-xs text-[#6B6B60]">Basic streak tracking</p>
          </div>

          <Separator className="my-5" />

          <Button
            className="w-full py-3 font-semibold text-sm rounded-xl mb-2"
            style={{ backgroundColor: "#D4A017", color: "#1A1A1A" }}
          >
            Upgrade to Pro
          </Button>
          <p
            className="text-center text-xs text-[#6B6B60] mb-5"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            $9.99/mo
          </p>

          <ul className="space-y-2">
            {proFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-[#1A1A1A]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1B4332"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
