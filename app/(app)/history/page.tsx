"use client";

import { RadarChart } from "@/components/radar-chart";
import {
  mockBehavioralProfile,
  mockCompletedChallenges,
  categoryColors,
} from "@/lib/mock-data";

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return { firstDay, daysInMonth };
}

export default function HistoryPage() {
  const year = 2026;
  const month = 2; // March (0-indexed)
  const { firstDay, daysInMonth } = getCalendarDays(year, month);
  const today = 18; // March 18, 2026

  const completedDates = new Map<number, "complete" | "skip">();
  mockCompletedChallenges.forEach((c) => {
    const d = new Date(c.date);
    if (d.getFullYear() === year && d.getMonth() === month) {
      completedDates.set(d.getDate(), c.status);
    }
  });

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const completionPercent = 78;
  const circumference = 2 * Math.PI * 40;
  const strokeOffset = circumference - (completionPercent / 100) * circumference;

  return (
    <div className="p-6 md:p-8 max-w-4xl">
      {/* Page Title */}
      <h1
        className="text-3xl font-bold text-[#1A1A1A] mb-8"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
      >
        History
      </h1>

      {/* Calendar */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] mb-6">
        <h2
          className="text-lg font-bold text-[#1A1A1A] mb-4"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          March 2026
        </h2>
        <div className="grid grid-cols-7 gap-1">
          {/* Day headers */}
          {dayLabels.map((d) => (
            <div
              key={d}
              className="text-center text-xs text-[#8A8A80] font-medium py-2"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {d}
            </div>
          ))}

          {/* Empty cells before first day */}
          {Array.from({ length: firstDay }, (_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const status = completedDates.get(day);
            const isFuture = day > today;

            return (
              <div
                key={day}
                className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm ${
                  isFuture ? "text-[#D0D0C8]" : "text-[#1A1A1A]"
                } ${day === today ? "bg-[#1B4332]/5 font-bold" : ""}`}
              >
                <span className="text-xs">{day}</span>
                {status === "complete" && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-0.5" />
                )}
                {status === "skip" && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C0C0B8] mt-0.5" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Completion Rate */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col items-center">
          <h3 className="text-sm font-medium text-[#8A8A80] mb-3">Completion Rate</h3>
          <div className="relative w-24 h-24 mb-2">
            <svg width="96" height="96" viewBox="0 0 96 96">
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="none"
                stroke="#E8E8E0"
                strokeWidth="6"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="none"
                stroke="#D4A017"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                transform="rotate(-90 48 48)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                78%
              </span>
            </div>
          </div>
        </div>

        {/* Total Challenges */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center">
          <h3 className="text-sm font-medium text-[#8A8A80] mb-3">Total Challenges</h3>
          <span
            className="text-4xl font-bold text-[#1A1A1A]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            47
          </span>
        </div>

        {/* Avg Streak */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center">
          <h3 className="text-sm font-medium text-[#8A8A80] mb-3">Avg Streak</h3>
          <span
            className="text-4xl font-bold text-[#1A1A1A]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            12
          </span>
          <span className="text-sm text-[#8A8A80]">days</span>
        </div>
      </div>

      {/* Behavioral Breakdown (Locked for Free) */}
      <div className="mb-8">
        <h2
          className="text-sm font-medium text-[#8A8A80] uppercase tracking-wider mb-3"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Behavioral Breakdown
        </h2>
        <div className="relative bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Blurred radar chart */}
          <div className="flex items-center justify-center blur-[6px] opacity-50 pointer-events-none select-none">
            <RadarChart scores={mockBehavioralProfile} size={280} />
          </div>

          {/* Upgrade overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center max-w-xs shadow-lg">
              <div className="w-10 h-10 rounded-full bg-[#D4A017]/10 flex items-center justify-center mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" fill="#D4A017" />
                </svg>
              </div>
              <h3
                className="text-lg font-bold text-[#1A1A1A] mb-1"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Upgrade to Pro
              </h3>
              <p className="text-sm text-[#8A8A80] mb-4">
                Unlock your full behavioral profile and personalized insights
              </p>
              <button className="w-full bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-semibold py-2.5 px-5 rounded-xl transition-colors text-sm">
                Unlock Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge History List */}
      <div>
        <h2
          className="text-sm font-medium text-[#8A8A80] uppercase tracking-wider mb-3"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Challenge History
        </h2>
        <div className="space-y-2">
          {mockCompletedChallenges.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
            >
              {/* Status */}
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

              {/* Date */}
              <span
                className="flex-shrink-0 text-xs text-[#8A8A80] w-16"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
