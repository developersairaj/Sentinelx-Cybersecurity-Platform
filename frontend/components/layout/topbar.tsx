"use client";

import { SignalPulse } from "@/components/layout/signal-pulse";
import { env } from "@/lib/env";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

type BackendStatus = "checking" | "connected" | "unreachable";

export function Topbar() {
  const [status, setStatus] = useState<BackendStatus>("checking");

  useEffect(() => {
    let cancelled = false;
    fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/health`)
      .then((res) => {
        if (!cancelled) setStatus(res.ok ? "connected" : "unreachable");
      })
      .catch(() => {
        if (!cancelled) setStatus("unreachable");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-background/90 pl-60 pr-6 backdrop-blur-sm">
      <div className="flex items-center gap-4 px-6">
        <div className="flex items-center gap-2 rounded-md border border-border-muted bg-surface px-3 py-1.5 text-sm text-gray-500">
          <Search className="h-3.5 w-3.5" />
          <span className="font-mono text-xs">Search assets, CVEs, events…</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <SignalPulse />
        <StatusPill status={status} />
      </div>
    </header>
  );
}

function StatusPill({ status }: { status: BackendStatus }) {
  const config = {
    checking: { dot: "bg-gray-500", text: "text-gray-400", label: "Checking backend…" },
    connected: { dot: "bg-emerald-400", text: "text-emerald-400", label: "Backend connected" },
    unreachable: { dot: "bg-severity-critical", text: "text-severity-critical", label: "Backend unreachable" },
  }[status];

  return (
    <div className="flex items-center gap-2 rounded-md border border-border-muted bg-surface px-3 py-1.5">
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      <span className={`font-mono text-xs ${config.text}`}>{config.label}</span>
    </div>
  );
}
