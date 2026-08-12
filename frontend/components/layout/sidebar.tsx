"use client";

import { cn } from "@/lib/utils";
import {
  Activity,
  BarChart3,
  Bug,
  FileText,
  LayoutDashboard,
  Network,
  ScrollText,
  Server,
  Shield,
  ShieldAlert,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Assets", href: "/assets", icon: Server },
  { label: "Scans", href: "/scans", icon: Activity },
  { label: "Vulnerabilities", href: "/vulnerabilities", icon: Bug },
  { label: "Risk", href: "/risk", icon: ShieldAlert },
  { label: "Threat timeline", href: "/threats", icon: Shield },
  { label: "Digital twin", href: "/network", icon: Network },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Reports", href: "/reports", icon: FileText },
  { label: "Audit log", href: "/audit", icon: ScrollText },
  { label: "Users", href: "/users", icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-60 flex-col border-r border-border bg-surface">
      <div className="flex h-16 items-center gap-2.5 border-b border-border px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-signal/15">
          <Shield className="h-4.5 w-4.5 text-signal" strokeWidth={2.25} />
        </div>
        <div className="leading-tight">
          <p className="font-display text-sm font-semibold tracking-wide text-gray-100">SentinelX</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">AI Command Center</p>
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-signal/10 text-signal"
                  : "text-gray-400 hover:bg-surface-raised hover:text-gray-200"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
              <span>{label}</span>
              {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-signal" />}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border px-5 py-3">
        <p className="font-mono text-[10px] text-gray-600">v0.1.0 · Milestone 4</p>
      </div>
    </aside>
  );
}
