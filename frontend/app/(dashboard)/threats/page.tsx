import { SeverityBadge } from "@/components/ui/severity-badge";
import { PageHeader } from "@/components/ui/page-header";
import { recentThreatEvents } from "@/lib/mock-data";

export default function ThreatsPage() {
  return (
    <div>
      <PageHeader
        title="Threat timeline"
        description="Chronological feed of detected threat events · Milestone 10"
      />
      <div className="relative ml-3 border-l border-border pl-8">
        {recentThreatEvents.map((event) => (
          <div key={event.id} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-background bg-signal" />
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-gray-500">
                {new Date(event.timestamp).toLocaleString(undefined, {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <SeverityBadge severity={event.severity} />
            </div>
            <p className="mt-1.5 text-sm text-gray-200">{event.title}</p>
            <p className="mt-0.5 font-mono text-[11px] text-gray-500">
              {event.asset} · {event.id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
