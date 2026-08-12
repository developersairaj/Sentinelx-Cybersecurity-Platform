import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<string, string> = {
  Running: "bg-signal/15 text-signal border-signal/30",
  Queued: "bg-severity-info/15 text-severity-info border-severity-info/30",
  Completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Failed: "bg-severity-critical/15 text-severity-critical border-severity-critical/30",
  Open: "bg-severity-high/15 text-severity-high border-severity-high/30",
  "In progress": "bg-signal/15 text-signal border-signal/30",
  Patched: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

export function StatusPill({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px] font-medium",
        STATUS_STYLES[status] ?? "bg-surface text-gray-400 border-border"
      )}
    >
      {status}
    </span>
  );
}
