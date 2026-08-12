from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models.asset import Asset
from app.schemas.security import AssetOut

router = APIRouter(prefix="/assets", tags=["assets"])


@router.get("", response_model=list[AssetOut])
async def list_assets(db: AsyncSession = Depends(get_db)) -> list[Asset]:
    result = await db.execute(select(Asset).order_by(Asset.risk_score.desc()))
    return list(result.scalars().all())
