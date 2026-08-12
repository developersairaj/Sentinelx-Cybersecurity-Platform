# PROJECT_STATE

**Current milestone:** 1 — Project Foundation
**Completed:** 1

## Files created
- README.md, PROJECT_STATE.md, .gitignore, .env.example, docker-compose.yml
- backend/app/main.py, app/core/config.py, app/core/logging.py
- backend/requirements/{base,dev}.txt, backend/Dockerfile, backend/.dockerignore
- backend/app/api/v1/health.py
- backend/pyproject.toml (ruff/black config), backend/tests/test_health.py
- frontend/package.json, tsconfig.json, tailwind.config.ts, next.config.mjs,
  postcss.config.mjs, app/layout.tsx, app/page.tsx, app/globals.css
- frontend/Dockerfile, frontend/.dockerignore
- frontend/lib/env.ts

## Files modified
- (none yet — first milestone)

## Database changes
- None yet. Milestone 2 introduces SQLAlchemy models + Alembic migrations.

## API endpoints implemented
- `GET /api/v1/health` — liveness/readiness probe (no auth)

## Environment variables (see .env.example)
- `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`, `DATABASE_URL`
- `REDIS_URL`
- `JWT_SECRET_KEY`, `JWT_ALGORITHM`, `ACCESS_TOKEN_EXPIRE_MINUTES`, `REFRESH_TOKEN_EXPIRE_DAYS`
- `BACKEND_CORS_ORIGINS`
- `ENVIRONMENT` (local | staging | production)
- `NEXT_PUBLIC_API_BASE_URL`

## Dependencies added
- Backend: fastapi, uvicorn[standard], pydantic-settings, python-json-logger
- Frontend: next, react, react-dom, typescript, tailwindcss, @types/*

## Architectural decisions
- Monorepo with independent `frontend/` and `backend/` services, composed via
  Docker Compose for local dev.
- Backend config centralized in `app/core/config.py` via `pydantic-settings`;
  no config values hardcoded elsewhere.
- API versioned under `/api/v1` from day one.
- Structured JSON logging from the start (security/audit friendly).

## Known issues
- None.

## Next milestone
- **Milestone 2** — Database + SQLAlchemy models + migrations (Users, Roles,
  Permissions, Assets, Vulnerabilities, CVEs, Scan Jobs, Scan Results, Risk
  Assessments, Threat Events, Audit Events — schema design first, then Alembic
  migration + models).
