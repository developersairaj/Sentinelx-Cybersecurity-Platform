import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AssetSummary({
  data,
}: {
  data: { category: string; total: number; atRisk: number }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset inventory</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-2">
        {data.map((row) => (
          <div key={row.category} className="flex items-center justify-between text-sm">
            <span className="text-gray-300">{row.category}</span>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-gray-500">{row.total} total</span>
              {row.atRisk > 0 && <span className="text-severity-high">{row.atRisk} at risk</span>}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
