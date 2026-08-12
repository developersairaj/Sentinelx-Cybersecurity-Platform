import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { assets } from "@/lib/mock-data";

function riskColor(score: number) {
  if (score >= 70) return "text-severity-critical";
  if (score >= 45) return "text-severity-high";
  if (score >= 25) return "text-severity-medium";
  return "text-severity-low";
}

export default function AssetsPage() {
  return (
    <div>
      <PageHeader
        title="Asset inventory"
        description={`${assets.length} assets shown · full inventory wires in from Milestone 5`}
      />
      <Card>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-[11px] uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3 font-mono font-medium">Asset</th>
              <th className="px-5 py-3 font-mono font-medium">Type</th>
              <th className="px-5 py-3 font-mono font-medium">IP address</th>
              <th className="px-5 py-3 font-mono font-medium">Owner</th>
              <th className="px-5 py-3 font-mono font-medium">Risk score</th>
              <th className="px-5 py-3 font-mono font-medium">Last seen</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="border-b border-border-muted last:border-0 hover:bg-surface">
                <td className="px-5 py-3">
                  <p className="text-gray-200">{asset.name}</p>
                  <p className="font-mono text-[11px] text-gray-500">{asset.id}</p>
                </td>
                <td className="px-5 py-3 text-gray-400">{asset.type}</td>
                <td className="px-5 py-3 font-mono text-xs text-gray-400">{asset.ip}</td>
                <td className="px-5 py-3 text-gray-400">{asset.owner}</td>
                <td className={`px-5 py-3 font-mono text-sm font-medium ${riskColor(asset.riskScore)}`}>
                  {asset.riskScore}
                </td>
                <td className="px-5 py-3 font-mono text-xs text-gray-500">
                  {new Date(asset.lastSeen).toLocaleString(undefined, {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
