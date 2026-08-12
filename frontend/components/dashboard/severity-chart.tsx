"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Severity } from "@/lib/mock-data";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const SEVERITY_COLORS: Record<Severity, string> = {
  critical: "#ef4444",
  high: "#f97316",
  medium: "#eab308",
  low: "#3b82f6",
  info: "#64748b",
};

export function SeverityChart({
  data,
}: {
  data: { severity: Severity; count: number }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Open findings by severity</CardTitle>
      </CardHeader>
      <CardContent className="h-56 pl-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
            <XAxis
              dataKey="severity"
              tick={{ fill: "#6b7280", fontSize: 11, fontFamily: "var(--font-plex-mono)" }}
              axisLine={{ stroke: "#212838" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 11, fontFamily: "var(--font-plex-mono)" }}
              axisLine={false}
              tickLine={false}
              width={28}
            />
            <Tooltip
              cursor={{ fill: "#ffffff08" }}
              contentStyle={{
                background: "#141a26",
                border: "1px solid #212838",
                borderRadius: 6,
                fontSize: 12,
                fontFamily: "var(--font-plex-mono)",
              }}
              labelStyle={{ color: "#9ca3af" }}
            />
            <Bar dataKey="count" radius={[3, 3, 0, 0]} maxBarSize={40}>
              {data.map((entry) => (
                <Cell key={entry.severity} fill={SEVERITY_COLORS[entry.severity]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
