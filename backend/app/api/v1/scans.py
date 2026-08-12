from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models.scan_job import ScanJob
from app.schemas.security import ScanJobOut

router = APIRouter(prefix="/scans", tags=["scans"])


@router.get("", response_model=list[ScanJobOut])
async def list_scans(db: AsyncSession = Depends(get_db)) -> list[ScanJob]:
    result = await db.execute(select(ScanJob).order_by(ScanJob.started_at.desc()))
    return list(result.scalars().all())
