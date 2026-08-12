# SentinelX AI — Cyber Defense Command Center

Enterprise cybersecurity command-center platform: asset inventory, authorized
network scanning, CVE intelligence, deterministic risk scoring, AI-assisted
explanations, digital-twin network visualization, and audit-logged RBAC.

## Stack

- **Frontend**: Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui
  · Framer Motion · React Three Fiber · React Flow · Recharts
- **Backend**: FastAPI · Python 3.12 · SQLAlchemy 2.0 · PostgreSQL 16 · Redis 7
- **Auth**: JWT (access + refresh) · Role-Based Access Control

## Local Development

Prerequisites: Docker + Docker Compose, Node 20+, Python 3.12+ (only needed
if you want to run services outside containers).

```bash
cp .env.example .env
# edit .env and set real secrets before running anything beyond local dev

docker compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api/v1
- API docs (dev only): http://localhost:8000/api/v1/docs
- Postgres: localhost:5432
- Redis: localhost:6379

Backend hot-reloads via uvicorn `--reload`; frontend hot-reloads via Next dev
server. Both are bind-mounted into the containers.

### Running without Docker

```bash
# backend
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements/dev.txt
uvicorn app.main:app --reload

# frontend
cd frontend
npm install
npm run dev
```

## Project Status

See `PROJECT_STATE.md` for the current milestone, completed work, and what's
next. This file is maintained incrementally as milestones land — do not
regenerate the project from scratch between milestones.

## Milestone Roadmap

1. **Project foundation & dev environment** ✅ (this milestone)
2. Database + SQLAlchemy models + migrations
3. Authentication + JWT + RBAC
4. Application shell + dashboard UI
5. Asset inventory
6. Authorized network scanner integration
7. CVE intelligence and vulnerability management
8. Risk scoring engine
9. AI-powered security explanations
10. Threat timeline and event management
11. Analytics and visualization
12. Interactive Digital Twin network visualization
13. PDF security report generation
14. User management
15. Audit logging
16. Security hardening
17. Testing and quality assurance
18. Production deployment

## Security Note

The network scanner (Milestone 6) is scoped to **explicitly authorized
targets only** and will require a signed authorization record before any
scan job can run. This platform does not implement exploitation, credential
harvesting, persistence, or evasion tooling.
