import { AssetSummary } from "@/components/dashboard/asset-summary";
import { SecurityScoreRing } from "@/components/dashboard/security-score-ring";
import { SeverityChart } from "@/components/dashboard/severity-chart";
import { StatCard } from "@/components/dashboard/stat-card";
import { ThreatFeed } from "@/components/dashboard/threat-feed";
import {
  assetSummary,
  recentThreatEvents,
  securityScore,
  severityBreakdown,
  stats,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-xl font-semibold text-gray-100">Command Center</h1>
        <p className="mt-1 text-sm text-gray-500">
          Live security posture across monitored assets. Data below is illustrative pending
          Milestones 5–11.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <SecurityScoreRing score={securityScore.score} trend={securityScore.trend} />
        </div>
        <div className="col-span-2">
          <SeverityChart data={severityBreakdown} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ThreatFeed events={recentThreatEvents} />
        </div>
        <div className="col-span-1">
          <AssetSummary data={assetSummary} />
        </div>
      </div>
    </div>
  );
}
