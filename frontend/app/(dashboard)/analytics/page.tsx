import { SeverityChart } from "@/components/dashboard/severity-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { assetSummary, severityBreakdown } from "@/lib/mock-data";

export default function AnalyticsPage() {
  return (
    <div>
      <PageHeader
        title="Security analytics"
        description="Aggregate views across assets, vulnerabilities, and scan history · Milestone 11"
      />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <SeverityChart data={severityBreakdown} />
        </div>
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Coverage by category</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              {assetSummary.map((row) => {
                const pct = Math.round(((row.total - row.atRisk) / row.total) * 100);
                return (
                  <div key={row.category}>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{row.category}</span>
                      <span className="font-mono">{pct}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                      <div className="h-full rounded-full bg-signal" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
