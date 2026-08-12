"""Centralized application configuration.

All configuration is sourced from environment variables (see .env.example).
Nothing in this codebase should hardcode secrets, hosts, or credentials —
import `settings` from here instead.
"""

from functools import lru_cache

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    # --- App ---
    APP_NAME: str = "SentinelX AI"
    ENVIRONMENT: str = Field(default="local")  # local | staging | production
    API_V1_PREFIX: str = "/api/v1"

    # --- Database ---
    # Defaults to local SQLite so the backend runs with zero setup. Docker
    # Compose overrides this to Postgres via DATABASE_URL in .env — same
    # setting, no code change needed to switch.
    DATABASE_URL: str = "sqlite+aiosqlite:///./sentinelx.db"

    # --- Redis (used from Milestone 2/6 onward) ---
    REDIS_URL: str = "redis://localhost:6379/0"

    # --- Auth (used from Milestone 3 onward) ---
    JWT_SECRET_KEY: str = "insecure-dev-only-change-me"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # --- CORS ---
    BACKEND_CORS_ORIGINS: list[str] = ["http://localhost:3000"]

    @field_validator("BACKEND_CORS_ORIGINS", mode="before")
    @classmethod
    def split_cors_origins(cls, value: str | list[str]) -> list[str]:
        if isinstance(value, str):
            return [origin.strip() for origin in value.split(",") if origin.strip()]
        return value

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == "production"


@lru_cache
def get_settings() -> Settings:
    """Cached settings accessor — import this, not Settings() directly."""
    return Settings()


settings = get_settings()
