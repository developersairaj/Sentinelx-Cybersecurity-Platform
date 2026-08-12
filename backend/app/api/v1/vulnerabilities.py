from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models.vulnerability import Vulnerability
from app.schemas.security import VulnerabilityOut

router = APIRouter(prefix="/vulnerabilities", tags=["vulnerabilities"])


@router.get("", response_model=list[VulnerabilityOut])
async def list_vulnerabilities(db: AsyncSession = Depends(get_db)) -> list[Vulnerability]:
    result = await db.execute(select(Vulnerability).order_by(Vulnerability.cvss.desc()))
    return list(result.scalars().all())
