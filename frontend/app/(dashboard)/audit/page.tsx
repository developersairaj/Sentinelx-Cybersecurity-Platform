import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { auditLog } from "@/lib/mock-data";

export default function AuditPage() {
  return (
    <div>
      <PageHeader
        title="Audit log"
        description="Immutable record of state-changing actions across the platform · Milestone 15"
      />
      <Card>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-[11px] uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3 font-mono font-medium">Timestamp</th>
              <th className="px-5 py-3 font-mono font-medium">Actor</th>
              <th className="px-5 py-3 font-mono font-medium">Action</th>
              <th className="px-5 py-3 font-mono font-medium">Target</th>
            </tr>
          </thead>
          <tbody>
            {auditLog.map((entry) => (
              <tr key={entry.id} className="border-b border-border-muted last:border-0 hover:bg-surface">
                <td className="px-5 py-3 font-mono text-xs text-gray-500">
                  {new Date(entry.timestamp).toLocaleString(undefined, {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="px-5 py-3 font-mono text-xs text-gray-300">{entry.actor}</td>
                <td className="px-5 py-3 text-gray-300">{entry.action}</td>
                <td className="px-5 py-3 text-gray-400">{entry.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
