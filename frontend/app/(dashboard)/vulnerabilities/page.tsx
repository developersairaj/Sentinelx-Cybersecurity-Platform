import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { SeverityBadge } from "@/components/ui/severity-badge";
import { StatusPill } from "@/components/ui/status-pill";
import { vulnerabilities } from "@/lib/mock-data";

export default function VulnerabilitiesPage() {
  return (
    <div>
      <PageHeader
        title="Vulnerability management"
        description="CVE intelligence and remediation tracking · deterministic risk scoring lands in Milestone 8"
      />
      <Card>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-[11px] uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3 font-mono font-medium">CVE</th>
              <th className="px-5 py-3 font-mono font-medium">Description</th>
              <th className="px-5 py-3 font-mono font-medium">Severity</th>
              <th className="px-5 py-3 font-mono font-medium">CVSS</th>
              <th className="px-5 py-3 font-mono font-medium">Asset</th>
              <th className="px-5 py-3 font-mono font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {vulnerabilities.map((v) => (
              <tr key={v.cve} className="border-b border-border-muted last:border-0 hover:bg-surface">
                <td className="px-5 py-3 font-mono text-xs text-gray-300">{v.cve}</td>
                <td className="max-w-xs px-5 py-3 text-gray-300">{v.title}</td>
                <td className="px-5 py-3">
                  <SeverityBadge severity={v.severity} />
                </td>
                <td className="px-5 py-3 font-mono text-xs text-gray-400">{v.cvss.toFixed(1)}</td>
                <td className="px-5 py-3 text-gray-400">{v.asset}</td>
                <td className="px-5 py-3">
                  <StatusPill status={v.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
