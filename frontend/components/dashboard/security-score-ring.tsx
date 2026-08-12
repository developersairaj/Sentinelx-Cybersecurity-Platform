"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function SecurityScoreRing({ score, trend }: { score: number; trend: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const scoreColor = score >= 80 ? "#34d399" : score >= 60 ? "#f59e0b" : "#ef4444";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security posture score</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-6">
        <div className="relative h-32 w-32 shrink-0">
          <svg viewBox="0 0 128 128" className="h-32 w-32 -rotate-90">
            <circle cx="64" cy="64" r={radius} fill="none" stroke="#212838" strokeWidth="10" />
            <motion.circle
              cx="64"
              cy="64"
              r={radius}
              fill="none"
              stroke={scoreColor}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-3xl font-semibold text-gray-100">{score}</span>
            <span className="font-mono text-[10px] uppercase tracking-wide text-gray-500">/ 100</span>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-gray-400">
            Composite score across authentication, patching, and exposure signals.
          </p>
          <p className="font-mono text-xs">
            <span className={trend >= 0 ? "text-emerald-400" : "text-severity-critical"}>
              {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)} pts
            </span>{" "}
            <span className="text-gray-500">vs. last 7 days</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
