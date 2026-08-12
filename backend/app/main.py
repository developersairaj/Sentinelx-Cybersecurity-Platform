from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.assets import router as assets_router
from app.api.v1.dashboard import router as dashboard_router
from app.api.v1.health import router as health_router
from app.api.v1.scans import router as scans_router
from app.api.v1.threats import router as threats_router
from app.api.v1.vulnerabilities import router as vulnerabilities_router
from app.core.config import settings
from app.core.database import async_session_factory, init_db
from app.core.logging import configure_logging, get_logger
from app.utils.seed import seed_if_empty

configure_logging()
logger = get_logger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("startup", extra={"environment": settings.ENVIRONMENT})
    await init_db()
    async with async_session_factory() as session:
        await seed_if_empty(session)
    yield
    logger.info("shutdown")


def create_app() -> FastAPI:
    app = FastAPI(
        title=settings.APP_NAME,
        version="0.1.0",
        # Docs are disabled in production to avoid exposing schema details.
        docs_url=f"{settings.API_V1_PREFIX}/docs" if not settings.is_production else None,
        redoc_url=f"{settings.API_V1_PREFIX}/redoc" if not settings.is_production else None,
        openapi_url=f"{settings.API_V1_PREFIX}/openapi.json" if not settings.is_production else None,
        lifespan=lifespan,
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.BACKEND_CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(health_router, prefix=settings.API_V1_PREFIX)
    app.include_router(dashboard_router, prefix=settings.API_V1_PREFIX)
    app.include_router(assets_router, prefix=settings.API_V1_PREFIX)
    app.include_router(vulnerabilities_router, prefix=settings.API_V1_PREFIX)
    app.include_router(scans_router, prefix=settings.API_V1_PREFIX)
    app.include_router(threats_router, prefix=settings.API_V1_PREFIX)

    return app


app = create_app()
