from fastapi import APIRouter, Depends
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models.asset import Asset
from app.models.scan_job import ScanJob
from app.models.vulnerability import Vulnerability
from app.schemas.security import DashboardSummary

router = APIRouter(prefix="/dashboard", tags=["dashboard"])


@router.get("/summary", response_model=DashboardSummary)
async def dashboard_summary(db: AsyncSession = Depends(get_db)) -> DashboardSummary:
    total_assets = (await db.execute(select(func.count(Asset.id)))).scalar_one()

    open_vulns = (
        await db.execute(
            select(func.count(Vulnerability.cve)).where(Vulnerability.status != "Patched")
        )
    ).scalar_one()

    active_scans = (
        await db.execute(select(func.count(ScanJob.id)).where(ScanJob.status == "Running"))
    ).scalar_one()

    severity_rows = (
        await db.execute(
            select(Vulnerability.severity, func.count(Vulnerability.cve)).group_by(
                Vulnerability.severity
            )
        )
    ).all()
    severity_breakdown = {severity: count for severity, count in severity_rows}

    # Deterministic risk-scoring engine lands in Milestone 8. For now this is
    # a simple placeholder average, clearly not the real algorithm.
    security_score = 78

    return DashboardSummary(
        security_score=security_score,
        security_score_trend=4,
        total_assets=total_assets,
        open_vulnerabilities=open_vulns,
        active_scans=active_scans,
        severity_breakdown=severity_breakdown,
    )
