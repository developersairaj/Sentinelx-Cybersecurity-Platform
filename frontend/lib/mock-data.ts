/**
 * Placeholder data for the dashboard shell (Milestone 4).
 *
 * This is intentionally isolated in one file so it's trivial to delete once
 * real endpoints exist: Assets (M5), Scans (M6), Vulnerabilities/CVEs (M7),
 * Risk Assessments (M8), Threat Events (M10), Analytics (M11).
 */

export type Severity = "critical" | "high" | "medium" | "low" | "info";

export const securityScore = {
  score: 78,
  trend: 4, // points vs. last 7 days
};

export const severityBreakdown: { severity: Severity; count: number }[] = [
  { severity: "critical", count: 3 },
  { severity: "high", count: 12 },
  { severity: "medium", count: 27 },
  { severity: "low", count: 41 },
  { severity: "info", count: 18 },
];

export const stats = [
  { label: "Assets monitored", value: 214, unit: "" },
  { label: "Open vulnerabilities", value: 83, unit: "" },
  { label: "Active scans", value: 2, unit: "" },
  { label: "Mean time to remediate", value: 4.2, unit: "d" },
];

export type ThreatEvent = {
  id: string;
  title: string;
  severity: Severity;
  asset: string;
  timestamp: string;
};

export const recentThreatEvents: ThreatEvent[] = [
  {
    id: "EVT-8841",
    title: "Anomalous outbound traffic from build server",
    severity: "critical",
    asset: "ci-runner-04.internal",
    timestamp: "2026-08-12T02:14:00Z",
  },
  {
    id: "EVT-8839",
    title: "Repeated failed auth against admin console",
    severity: "high",
    asset: "auth.sentinelx.internal",
    timestamp: "2026-08-12T01:02:00Z",
  },
  {
    id: "EVT-8834",
    title: "TLS certificate expiring within 7 days",
    severity: "medium",
    asset: "api-gateway-02",
    timestamp: "2026-08-11T22:47:00Z",
  },
  {
    id: "EVT-8829",
    title: "New CVE matched against installed package",
    severity: "high",
    asset: "payments-svc-01",
    timestamp: "2026-08-11T19:31:00Z",
  },
  {
    id: "EVT-8811",
    title: "Unusual scan pattern from internal subnet",
    severity: "low",
    asset: "10.20.4.0/24",
    timestamp: "2026-08-11T14:08:00Z",
  },
];

export const assetSummary = [
  { category: "Servers", total: 64, atRisk: 5 },
  { category: "Workstations", total: 98, atRisk: 2 },
  { category: "Network devices", total: 31, atRisk: 1 },
  { category: "Cloud services", total: 21, atRisk: 4 },
];

export type Asset = {
  id: string;
  name: string;
  type: "Server" | "Workstation" | "Network device" | "Cloud service";
  ip: string;
  owner: string;
  riskScore: number;
  lastSeen: string;
};

export const assets: Asset[] = [
  { id: "AST-1042", name: "ci-runner-04.internal", type: "Server", ip: "10.20.1.14", owner: "Platform", riskScore: 82, lastSeen: "2026-08-12T02:10:00Z" },
  { id: "AST-1039", name: "auth.sentinelx.internal", type: "Server", ip: "10.20.1.9", owner: "Identity", riskScore: 71, lastSeen: "2026-08-12T01:55:00Z" },
  { id: "AST-1031", name: "payments-svc-01", type: "Cloud service", ip: "10.30.4.2", owner: "Payments", riskScore: 66, lastSeen: "2026-08-11T23:40:00Z" },
  { id: "AST-1027", name: "api-gateway-02", type: "Server", ip: "10.20.1.3", owner: "Platform", riskScore: 44, lastSeen: "2026-08-11T22:47:00Z" },
  { id: "AST-1018", name: "core-switch-rack-b", type: "Network device", ip: "10.10.0.1", owner: "NetOps", riskScore: 29, lastSeen: "2026-08-11T20:15:00Z" },
  { id: "AST-1002", name: "sk-workstation-14", type: "Workstation", ip: "10.40.2.14", owner: "SK", riskScore: 18, lastSeen: "2026-08-11T18:02:00Z" },
];

export type Vulnerability = {
  cve: string;
  title: string;
  severity: Severity;
  cvss: number;
  asset: string;
  status: "Open" | "In progress" | "Patched";
  discovered: string;
};

export const vulnerabilities: Vulnerability[] = [
  { cve: "CVE-2026-31402", title: "Remote code execution in OpenSSH pre-auth handler", severity: "critical", cvss: 9.8, asset: "ci-runner-04.internal", status: "Open", discovered: "2026-08-11" },
  { cve: "CVE-2026-28810", title: "Privilege escalation via misconfigured sudoers entry", severity: "high", cvss: 8.4, asset: "auth.sentinelx.internal", status: "In progress", discovered: "2026-08-10" },
  { cve: "CVE-2026-22190", title: "SQL injection in legacy reporting endpoint", severity: "high", cvss: 7.9, asset: "payments-svc-01", status: "Open", discovered: "2026-08-09" },
  { cve: "CVE-2026-19004", title: "Outdated TLS cipher suite accepted", severity: "medium", cvss: 5.6, asset: "api-gateway-02", status: "Open", discovered: "2026-08-08" },
  { cve: "CVE-2026-11287", title: "Verbose error messages leak stack traces", severity: "low", cvss: 3.1, asset: "core-switch-rack-b", status: "Patched", discovered: "2026-08-02" },
];

export type ScanJob = {
  id: string;
  target: string;
  status: "Running" | "Queued" | "Completed" | "Failed";
  progress: number;
  startedBy: string;
  startedAt: string;
};

export const scanJobs: ScanJob[] = [
  { id: "SCN-2211", target: "10.20.1.0/24", status: "Running", progress: 64, startedBy: "SK", startedAt: "2026-08-12T02:00:00Z" },
  { id: "SCN-2210", target: "payments-svc-01", status: "Running", progress: 22, startedBy: "SK", startedAt: "2026-08-12T02:04:00Z" },
  { id: "SCN-2205", target: "10.30.4.0/24", status: "Queued", progress: 0, startedBy: "scheduler", startedAt: "2026-08-12T03:00:00Z" },
  { id: "SCN-2198", target: "core-switch-rack-b", status: "Completed", progress: 100, startedBy: "scheduler", startedAt: "2026-08-11T20:00:00Z" },
  { id: "SCN-2190", target: "10.40.2.0/24", status: "Failed", progress: 38, startedBy: "SK", startedAt: "2026-08-11T15:00:00Z" },
];

export type NetworkNode = { id: string; label: string; x: number; y: number; severity: Severity | "safe" };
export type NetworkEdge = { from: string; to: string };

export const networkNodes: NetworkNode[] = [
  { id: "gw", label: "api-gateway-02", x: 400, y: 60, severity: "medium" },
  { id: "auth", label: "auth.sentinelx", x: 220, y: 180, severity: "high" },
  { id: "ci", label: "ci-runner-04", x: 580, y: 180, severity: "critical" },
  { id: "pay", label: "payments-svc-01", x: 400, y: 300, severity: "high" },
  { id: "sw", label: "core-switch-rack-b", x: 130, y: 320, severity: "low" },
  { id: "ws", label: "sk-workstation-14", x: 670, y: 320, severity: "safe" },
];

export const networkEdges: NetworkEdge[] = [
  { from: "gw", to: "auth" },
  { from: "gw", to: "ci" },
  { from: "gw", to: "pay" },
  { from: "auth", to: "sw" },
  { from: "ci", to: "ws" },
];

export type Report = {
  id: string;
  title: string;
  generatedAt: string;
  type: "Executive summary" | "Full technical" | "Compliance";
};

export const reports: Report[] = [
  { id: "RPT-118", title: "Weekly security posture — Aug 5–11", generatedAt: "2026-08-11", type: "Executive summary" },
  { id: "RPT-117", title: "Full vulnerability assessment — Q3", generatedAt: "2026-08-09", type: "Full technical" },
  { id: "RPT-112", title: "SOC 2 control evidence pack", generatedAt: "2026-08-01", type: "Compliance" },
];

export type AuditEntry = {
  id: string;
  actor: string;
  action: string;
  target: string;
  timestamp: string;
};

export const auditLog: AuditEntry[] = [
  { id: "AUD-9042", actor: "sk@sentinelx.local", action: "Started scan", target: "SCN-2211", timestamp: "2026-08-12T02:00:00Z" },
  { id: "AUD-9038", actor: "system", action: "Ingested CVE feed", target: "142 new CVEs", timestamp: "2026-08-12T01:00:00Z" },
  { id: "AUD-9021", actor: "sk@sentinelx.local", action: "Acknowledged event", target: "EVT-8834", timestamp: "2026-08-11T22:50:00Z" },
  { id: "AUD-9004", actor: "sk@sentinelx.local", action: "Signed in", target: "—", timestamp: "2026-08-11T18:00:00Z" },
];

export type PlatformUser = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Analyst" | "Viewer";
  lastActive: string;
};

export const platformUsers: PlatformUser[] = [
  { id: "USR-01", name: "SK", email: "sk@sentinelx.local", role: "Admin", lastActive: "2026-08-12T02:14:00Z" },
  { id: "USR-02", name: "R. Nair", email: "rnair@sentinelx.local", role: "Analyst", lastActive: "2026-08-11T19:20:00Z" },
  { id: "USR-03", name: "M. Iyer", email: "miyer@sentinelx.local", role: "Viewer", lastActive: "2026-08-10T09:05:00Z" },
];

export const riskTrend = [
  { day: "Mon", score: 71 }, { day: "Tue", score: 73 }, { day: "Wed", score: 69 },
  { day: "Thu", score: 75 }, { day: "Fri", score: 74 }, { day: "Sat", score: 76 }, { day: "Sun", score: 78 },
];
