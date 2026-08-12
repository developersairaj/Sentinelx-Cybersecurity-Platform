from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models.threat_event import ThreatEvent
from app.schemas.security import ThreatEventOut

router = APIRouter(prefix="/threats", tags=["threats"])


@router.get("", response_model=list[ThreatEventOut])
async def list_threat_events(db: AsyncSession = Depends(get_db)) -> list[ThreatEvent]:
    result = await db.execute(select(ThreatEvent).order_by(ThreatEvent.timestamp.desc()))
    return list(result.scalars().all())
