from datetime import datetime

from sqlalchemy import DateTime, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class Asset(Base):
    __tablename__ = "assets"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    name: Mapped[str] = mapped_column(String, index=True)
    type: Mapped[str] = mapped_column(String)
    ip: Mapped[str] = mapped_column(String)
    owner: Mapped[str] = mapped_column(String)
    risk_score: Mapped[int] = mapped_column(Integer)
    last_seen: Mapped[datetime] = mapped_column(DateTime)
