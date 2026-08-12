import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SeverityBadge } from "@/components/ui/severity-badge";
import type { ThreatEvent } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const SEVERITY_BORDER: Record<ThreatEvent["severity"], string> = {
  critical: "border-l-severity-critical",
  high: "border-l-severity-high",
  medium: "border-l-severity-medium",
  low: "border-l-severity-low",
  info: "border-l-severity-info",
};

function formatTimestamp(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ThreatFeed({ events }: { events: ThreatEvent[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent threat events</CardTitle>
        <span className="font-mono text-[11px] text-gray-500">Live · Milestone 10 wires real events</span>
      </CardHeader>
      <CardContent className="space-y-2 pt-2">
        {events.map((event) => (
          <div
            key={event.id}
            className={cn(
              "flex items-center justify-between gap-4 rounded-md border-l-2 bg-surface px-3 py-2.5",
              SEVERITY_BORDER[event.severity]
            )}
          >
            <div className="min-w-0">
              <p className="truncate text-sm text-gray-200">{event.title}</p>
              <p className="mt-0.5 font-mono text-[11px] text-gray-500">
                {event.asset} · {event.id}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="font-mono text-[11px] text-gray-600">{formatTimestamp(event.timestamp)}</span>
              <SeverityBadge severity={event.severity} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
