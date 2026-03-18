"use client";

import { motion } from "framer-motion";

interface ChallengeCardProps {
  category: string;
  date?: string;
  text: string;
  context?: string;
  onComplete?: () => void;
  onSkip?: () => void;
  showActions?: boolean;
  className?: string;
}

export function ChallengeCard({
  category,
  date,
  text,
  context,
  onComplete,
  onSkip,
  showActions = true,
  className = "",
}: ChallengeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-[#1B4332] text-[#FAFAF7] rounded-[20px] p-7 shadow-[0_8px_32px_rgba(27,67,50,0.25)] ${className}`}
    >
      {/* Top: Category + Date */}
      <div className="flex items-center justify-between mb-5">
        <span
          className="text-xs font-medium px-3 py-1 rounded-full bg-[#D4A017]/10 text-[#D4A017]"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {category}
        </span>
        {date && (
          <span className="text-xs text-white/40" style={{ fontFamily: "'DM Mono', monospace" }}>
            {date}
          </span>
        )}
      </div>

      {/* Challenge Text */}
      <p
        className="text-xl md:text-2xl font-bold leading-snug mb-4"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
      >
        {text}
      </p>

      {/* Context */}
      {context && (
        <p className="text-sm text-white/50 mb-6">{context}</p>
      )}

      {/* Actions */}
      {showActions && (
        <div className="flex items-center gap-3">
          <button
            onClick={onComplete}
            className="flex-1 bg-[#D4A017] hover:bg-[#E5B020] text-[#1A1A1A] font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
          >
            ✓ Done
          </button>
          <button
            onClick={onSkip}
            className="px-6 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            Skip
          </button>
        </div>
      )}
    </motion.div>
  );
}
