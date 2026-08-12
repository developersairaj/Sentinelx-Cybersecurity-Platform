"use client";

import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export function StatCard({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    Number.isInteger(value) ? Math.round(v).toLocaleString() : v.toFixed(1)
  );

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 1.1, ease: "easeOut" });
    return controls.stop;
  }, [value, motionValue]);

  return (
    <Card className="px-5 py-4">
      <p className="font-mono text-[11px] uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-1.5 font-mono text-2xl font-semibold text-gray-100">
        <motion.span>{rounded}</motion.span>
        {unit && <span className="ml-1 text-base text-gray-500">{unit}</span>}
      </p>
    </Card>
  );
}
