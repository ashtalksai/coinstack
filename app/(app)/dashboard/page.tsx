"use client";

import { ChallengeCard } from "@/components/challenge-card";
import { RadarChart } from "@/components/radar-chart";
import {
  mockChallenges,
  mockBehavioralProfile,
  mockCompletedChallenges,
  categoryColors,
} from "@/lib/mock-data";

export default function DashboardPage() {
  const todayChallenge = mockChallenges[0];
  const recentActivity = mockCompletedChallenges.slice(0, 5);

  return (
    <div className="p-6 md:p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-[32px] font-bold text-[#1A1A1A] mb-1"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Good morning, Alex 👋
        </h1>
        <p className="text-[#8A8A80] text-sm">
          Day 12 of your streak 🔥
        </p>
      </div>

      {/* Today's Challenge */}
      <div className="mb-6">
        <h2
          className="text-sm font-medium text-[#8A8A80] uppercase tracking-wider mb-3"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Today&apos;s Challenge
        </h2>
        <ChallengeCard
          category={todayChallenge.category}
          text={todayChallenge.text}
          context={todayChallenge.context}
          showActions={true}
        />
      </div>

      {/* Streak + Profile Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Streak Counter */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <h3 className="text-sm font-medium text-[#8A8A80] mb-4">Current Streak</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span
              className="text-5xl font-bold text-[#D4A017]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              12
            </span>
            <span className="text-[#8A8A80] text-sm">days</span>
          </div>
          <div className="w-full bg-[#E8E8E0] rounded-full h-2 mb-2">
            <div
              className="bg-[#D4A017] h-2 rounded-full transition-all"
              style={{ width: `${(12 / 23) * 100}%` }}
            />
          </div>
          <p className="text-xs text-[#8A8A80]">Longest: 23 days</p>
        </div>

        {/* Behavioral Profile Mini */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-[#8A8A80]">Your Profile</h3>
            <span
              className="text-xs px-2.5 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332] font-medium"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {mockBehavioralProfile.primaryPersona}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <RadarChart scores={mockBehavioralProfile} size={200} />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2
          className="text-sm font-medium text-[#8A8A80] uppercase tracking-wider mb-3"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Recent Activity
        </h2>
        <div className="space-y-2">
          {recentActivity.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
            >
              {/* Status indicator */}
              <div className="flex-shrink-0">
                {item.status === "complete" ? (
                  <div className="w-6 h-6 rounded-full bg-[#1B4332]/10 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#1B4332" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#E8E8E0] flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6H9" stroke="#8A8A80" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#1A1A1A] truncate">{item.text}</p>
              </div>

              {/* Category Badge */}
              <span
                className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  backgroundColor: `${categoryColors[item.category]}15`,
                  color: categoryColors[item.category],
                }}
              >
                {item.category}
              </span>

              {/* Date */}
              <span
                className="flex-shrink-0 text-xs text-[#8A8A80]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
