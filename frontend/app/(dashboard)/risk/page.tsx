"use client";

import { SecurityScoreRing } from "@/components/dashboard/security-score-ring";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { assets, riskTrend, securityScore } from "@/lib/mock-data";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function riskColor(score: number) {
  if (score >= 70) return "text-severity-critical";
  if (score >= 45) return "text-severity-high";
  if (score >= 25) return "text-severity-medium";
  return "text-severity-low";
}

export default function RiskPage() {
  const topRisk = [...assets].sort((a, b) => b.riskScore - a.riskScore).slice(0, 5);

  return (
    <div>
      <PageHeader
        title="Risk scoring"
        description="Deterministic, auditable scoring — never blindly trusted from AI output · Milestone 8"
      />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <SecurityScoreRing score={securityScore.score} trend={securityScore.trend} />
        </div>
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>7-day score trend</CardTitle>
            </CardHeader>
            <CardContent className="h-56 pl-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={riskTrend} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
                  <XAxis
                    dataKey="day"
                    tick={{ fill: "#6b7280", fontSize: 11, fontFamily: "var(--font-plex-mono)" }}
                    axisLine={{ stroke: "#212838" }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[60, 90]}
                    tick={{ fill: "#6b7280", fontSize: 11, fontFamily: "var(--font-plex-mono)" }}
                    axisLine={false}
                    tickLine={false}
                    width={28}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#141a26",
                      border: "1px solid #212838",
                      borderRadius: 6,
                      fontSize: 12,
                    }}
                    labelStyle={{ color: "#9ca3af" }}
                  />
                  <Line type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Highest risk assets</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-2">
            {topRisk.map((asset) => (
              <div key={asset.id} className="flex items-center justify-between text-sm">
                <span className="text-gray-300">{asset.name}</span>
                <span className={`font-mono text-sm font-medium ${riskColor(asset.riskScore)}`}>
                  {asset.riskScore}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
