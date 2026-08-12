"""Database engine and session management.

Uses async SQLAlchemy throughout so FastAPI request handlers never block on
DB I/O. Works against SQLite (dev default) or Postgres (docker-compose /
production) via the same DATABASE_URL setting.
"""

from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from app.core.config import settings

engine = create_async_engine(settings.DATABASE_URL, echo=False)
async_session_factory = async_sessionmaker(engine, expire_on_commit=False)


class Base(DeclarativeBase):
    pass


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """FastAPI dependency — yields a request-scoped async DB session."""
    async with async_session_factory() as session:
        yield session


async def init_db() -> None:
    """Create tables if they don't exist. Fine for SQLite/dev; production
    Postgres deployments should use Alembic migrations instead (Milestone 2
    follow-up), but this keeps tonight's demo path zero-config."""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
