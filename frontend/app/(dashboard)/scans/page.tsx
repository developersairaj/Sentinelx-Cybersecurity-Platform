import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusPill } from "@/components/ui/status-pill";
import { scanJobs } from "@/lib/mock-data";

export default function ScansPage() {
  return (
    <div>
      <PageHeader
        title="Authorized network scans"
        description="All scans require a signed authorization record scoped to the target · Milestone 6"
      />
      <Card>
        <div className="divide-y divide-border-muted">
          {scanJobs.map((job) => (
            <div key={job.id} className="flex items-center gap-6 px-5 py-4">
              <div className="w-40 shrink-0">
                <p className="font-mono text-xs text-gray-300">{job.id}</p>
                <p className="mt-0.5 truncate text-sm text-gray-200">{job.target}</p>
              </div>
              <div className="flex-1">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
                  <div
                    className="h-full rounded-full bg-signal transition-all"
                    style={{ width: `${job.progress}%` }}
                  />
                </div>
              </div>
              <span className="w-10 shrink-0 text-right font-mono text-xs text-gray-500">{job.progress}%</span>
              <div className="w-28 shrink-0 text-right">
                <StatusPill status={job.status} />
              </div>
              <span className="w-24 shrink-0 text-right font-mono text-[11px] text-gray-500">
                {job.startedBy}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
