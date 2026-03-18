"use client";

import { useEffect, useState } from "react";

interface RadarChartProps {
  scores: {
    spendingAwareness: number;
    savingReflex: number;
    debtMindset: number;
    impulsivity: number;
    planning: number;
    consistency: number;
  };
  size?: number;
}

const labels = [
  "Spending\nAwareness",
  "Saving\nReflex",
  "Debt\nMindset",
  "Impulsivity",
  "Planning",
  "Consistency",
];

export function RadarChart({ scores, size = 280 }: RadarChartProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const center = size / 2;
  const radius = size * 0.35;
  const levels = 5;
  const axes = 6;
  const angleStep = (Math.PI * 2) / axes;

  const values = [
    scores.spendingAwareness,
    scores.savingReflex,
    scores.debtMindset,
    scores.impulsivity,
    scores.planning,
    scores.consistency,
  ];

  const getPoint = (index: number, value: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const dataPoints = values.map((v, i) => getPoint(i, v));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
      {/* Grid levels */}
      {Array.from({ length: levels }).map((_, level) => {
        const r = ((level + 1) / levels) * radius;
        const points = Array.from({ length: axes })
          .map((_, i) => {
            const angle = angleStep * i - Math.PI / 2;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
          })
          .join(" ");
        return (
          <polygon
            key={level}
            points={points}
            fill="none"
            stroke="#E8E8E0"
            strokeWidth={1}
          />
        );
      })}

      {/* Axis lines */}
      {Array.from({ length: axes }).map((_, i) => {
        const angle = angleStep * i - Math.PI / 2;
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={center + radius * Math.cos(angle)}
            y2={center + radius * Math.sin(angle)}
            stroke="#E8E8E0"
            strokeWidth={1}
          />
        );
      })}

      {/* Data polygon */}
      <polygon
        points={dataPoints.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="rgba(212, 160, 23, 0.2)"
        stroke="#D4A017"
        strokeWidth={2}
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease-out",
        }}
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={4}
          fill="#D4A017"
          style={{
            opacity: mounted ? 1 : 0,
            transition: `opacity 0.8s ease-out ${i * 0.1}s`,
          }}
        />
      ))}

      {/* Labels */}
      {labels.map((label, i) => {
        const angle = angleStep * i - Math.PI / 2;
        const labelR = radius + 30;
        const x = center + labelR * Math.cos(angle);
        const y = center + labelR * Math.sin(angle);
        const lines = label.split("\n");
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-[10px] fill-[#8A8A80]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {lines.map((line, li) => (
              <tspan key={li} x={x} dy={li === 0 ? 0 : 12}>
                {line}
              </tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}
