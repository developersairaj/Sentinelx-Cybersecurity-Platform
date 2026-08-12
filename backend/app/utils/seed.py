"""Seeds the database with demo data that mirrors the frontend mock data,
so numbers match between UI and API while the real scanner/CVE pipeline
(Milestones 6-7) isn't built yet. Idempotent — safe to call on every startup."""

from datetime import date, datetime

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.asset import Asset
from app.models.scan_job import ScanJob
from app.models.threat_event import ThreatEvent
from app.models.vulnerability import Vulnerability

ASSETS = [
    {"id": "AST-1042", "name": "ci-runner-04.internal", "type": "Server", "ip": "10.20.1.14", "owner": "Platform", "risk_score": 82, "last_seen": datetime(2026, 8, 12, 2, 10)},
    {"id": "AST-1039", "name": "auth.sentinelx.internal", "type": "Server", "ip": "10.20.1.9", "owner": "Identity", "risk_score": 71, "last_seen": datetime(2026, 8, 12, 1, 55)},
    {"id": "AST-1031", "name": "payments-svc-01", "type": "Cloud service", "ip": "10.30.4.2", "owner": "Payments", "risk_score": 66, "last_seen": datetime(2026, 8, 11, 23, 40)},
    {"id": "AST-1027", "name": "api-gateway-02", "type": "Server", "ip": "10.20.1.3", "owner": "Platform", "risk_score": 44, "last_seen": datetime(2026, 8, 11, 22, 47)},
    {"id": "AST-1018", "name": "core-switch-rack-b", "type": "Network device", "ip": "10.10.0.1", "owner": "NetOps", "risk_score": 29, "last_seen": datetime(2026, 8, 11, 20, 15)},
    {"id": "AST-1002", "name": "sk-workstation-14", "type": "Workstation", "ip": "10.40.2.14", "owner": "SK", "risk_score": 18, "last_seen": datetime(2026, 8, 11, 18, 2)},
]

VULNERABILITIES = [
    {"cve": "CVE-2026-31402", "title": "Remote code execution in OpenSSH pre-auth handler", "severity": "critical", "cvss": 9.8, "asset": "ci-runner-04.internal", "status": "Open", "discovered": date(2026, 8, 11)},
    {"cve": "CVE-2026-28810", "title": "Privilege escalation via misconfigured sudoers entry", "severity": "high", "cvss": 8.4, "asset": "auth.sentinelx.internal", "status": "In progress", "discovered": date(2026, 8, 10)},
    {"cve": "CVE-2026-22190", "title": "SQL injection in legacy reporting endpoint", "severity": "high", "cvss": 7.9, "asset": "payments-svc-01", "status": "Open", "discovered": date(2026, 8, 9)},
    {"cve": "CVE-2026-19004", "title": "Outdated TLS cipher suite accepted", "severity": "medium", "cvss": 5.6, "asset": "api-gateway-02", "status": "Open", "discovered": date(2026, 8, 8)},
    {"cve": "CVE-2026-11287", "title": "Verbose error messages leak stack traces", "severity": "low", "cvss": 3.1, "asset": "core-switch-rack-b", "status": "Patched", "discovered": date(2026, 8, 2)},
]

SCAN_JOBS = [
    {"id": "SCN-2211", "target": "10.20.1.0/24", "status": "Running", "progress": 64, "started_by": "SK", "started_at": datetime(2026, 8, 12, 2, 0)},
    {"id": "SCN-2210", "target": "payments-svc-01", "status": "Running", "progress": 22, "started_by": "SK", "started_at": datetime(2026, 8, 12, 2, 4)},
    {"id": "SCN-2205", "target": "10.30.4.0/24", "status": "Queued", "progress": 0, "started_by": "scheduler", "started_at": datetime(2026, 8, 12, 3, 0)},
    {"id": "SCN-2198", "target": "core-switch-rack-b", "status": "Completed", "progress": 100, "started_by": "scheduler", "started_at": datetime(2026, 8, 11, 20, 0)},
    {"id": "SCN-2190", "target": "10.40.2.0/24", "status": "Failed", "progress": 38, "started_by": "SK", "started_at": datetime(2026, 8, 11, 15, 0)},
]

THREAT_EVENTS = [
    {"id": "EVT-8841", "title": "Anomalous outbound traffic from build server", "severity": "critical", "asset": "ci-runner-04.internal", "timestamp": datetime(2026, 8, 12, 2, 14)},
    {"id": "EVT-8839", "title": "Repeated failed auth against admin console", "severity": "high", "asset": "auth.sentinelx.internal", "timestamp": datetime(2026, 8, 12, 1, 2)},
    {"id": "EVT-8834", "title": "TLS certificate expiring within 7 days", "severity": "medium", "asset": "api-gateway-02", "timestamp": datetime(2026, 8, 11, 22, 47)},
    {"id": "EVT-8829", "title": "New CVE matched against installed package", "severity": "high", "asset": "payments-svc-01", "timestamp": datetime(2026, 8, 11, 19, 31)},
    {"id": "EVT-8811", "title": "Unusual scan pattern from internal subnet", "severity": "low", "asset": "10.20.4.0/24", "timestamp": datetime(2026, 8, 11, 14, 8)},
]


async def seed_if_empty(session: AsyncSession) -> None:
    result = await session.execute(select(Asset.id).limit(1))
    if result.scalar_one_or_none() is not None:
        return  # already seeded

    session.add_all(Asset(**row) for row in ASSETS)
    session.add_all(Vulnerability(**row) for row in VULNERABILITIES)
    session.add_all(ScanJob(**row) for row in SCAN_JOBS)
    session.add_all(ThreatEvent(**row) for row in THREAT_EVENTS)
    await session.commit()
