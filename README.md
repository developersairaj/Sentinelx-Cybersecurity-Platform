# 🛡️ SentinelX AI
### ⚡ Cyber Defense Command Center

<p align="center">
  <strong>See the threat. Understand the risk. Defend with intelligence.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-00ff9d?style=for-the-badge&labelColor=080b12" alt="Status"/>
  <img src="https://img.shields.io/badge/AI-POWERED-8b5cf6?style=for-the-badge&labelColor=080b12" alt="AI"/>
  <img src="https://img.shields.io/badge/SECURITY-DEFENSE-00d9ff?style=for-the-badge&labelColor=080b12" alt="Security"/>
  <img src="https://img.shields.io/badge/LICENSE-PRIVATE-ff3366?style=for-the-badge&labelColor=080b12" alt="License"/>
</p>

---

## 🌐 What is SentinelX?

**SentinelX AI** is an enterprise-grade **Cyber Defense Command Center** designed to transform complex security data into clear, actionable intelligence.

It brings **asset visibility, authorized network scanning, CVE intelligence, deterministic risk scoring, AI-assisted analysis, threat monitoring, digital-twin visualization, RBAC, and audit logging** into one unified security platform.

> 🧠 **Built for defenders. Designed for visibility. Engineered for control.**

---

## ⚔️ Core Capabilities

| Capability | Description |
|---|---|
| 🖥️ **Asset Intelligence** | Discover, organize, monitor, and manage your security assets |
| 🔎 **Authorized Scanning** | Perform controlled network discovery against explicitly authorized targets |
| 🧬 **CVE Intelligence** | Track vulnerabilities and connect affected assets with security findings |
| 🎯 **Risk Engine** | Deterministic risk scoring for consistent security prioritization |
| 🤖 **AI Security Assistant** | Generate intelligent explanations and security insights |
| 🌐 **Digital Twin** | Visualize infrastructure and network relationships interactively |
| 🚨 **Threat Intelligence** | Track security events and build a unified threat timeline |
| 📊 **Security Analytics** | Transform security telemetry into meaningful dashboards |
| 👥 **RBAC** | Role-based access control for enterprise environments |
| 📝 **Audit Logging** | Maintain traceable records of security-sensitive actions |
| 📄 **Security Reports** | Generate structured security reports for decision makers |

---

## 🧠 SentinelX Architecture

```text
                         ┌──────────────────────────┐
                         │       SENTINELX AI       │
                         │   CYBER DEFENSE CENTER   │
                         └────────────┬─────────────┘
                                      │
             ┌────────────────────────┼────────────────────────┐
             │                        │                        │
             ▼                        ▼                        ▼
      ┌─────────────┐          ┌─────────────┐          ┌─────────────┐
      │   FRONTEND  │          │   BACKEND   │          │    AI /     │
      │  Next.js 14 │◄────────►│   FastAPI   │◄────────►│ INTELLIGENCE│
      └──────┬──────┘          └──────┬──────┘          └─────────────┘
             │                        │
             │                ┌───────┴────────┐
             │                │                │
             ▼                ▼                ▼
      ┌─────────────┐   ┌─────────────┐ ┌─────────────┐
      │   Security  │   │ PostgreSQL  │ │    Redis    │
      │  Dashboard  │   │    16       │ │      7      │
      └─────────────┘   └─────────────┘ └─────────────┘

🎨 Technology Stack
Frontend
⚛️ Next.js 14 — App Router
🔷 TypeScript
🎨 Tailwind CSS
🧩 shadcn/ui
🎞️ Framer Motion
🌐 React Three Fiber
🕸️ React Flow
📈 Recharts
Backend
🐍 Python 3.12
⚡ FastAPI
🗄️ SQLAlchemy 2.0
🐘 PostgreSQL 16
⚡ Redis 7
Security
🔐 JWT Authentication
🛡️ Role-Based Access Control
📝 Audit Logging
🎯 Deterministic Risk Scoring
🔎 Authorized Network Scanning
🧬 CVE Intelligence
🚀 Quick Start
1️⃣ Clone the Project
git clone https://github.com/developersairaj/Sentinelx-Cybersecurity-Platform.git
cd Sentinelx-Cybersecurity-Platform
2️⃣ Configure Environment
cp .env.example .env

⚠️ Edit .env and replace development placeholders with real secrets before using SentinelX beyond local development.

3️⃣ Launch SentinelX
docker compose up --build

That's it. 🚀

🖥️ Local Services
Service	URL
🛡️ SentinelX Frontend	http://localhost:3000
⚡ Backend API	http://localhost:8000/api/v1
📚 API Documentation	http://localhost:8000/api/v1/docs
🐘 PostgreSQL	localhost:5432
⚡ Redis	localhost:6379

Both frontend and backend support hot-reloading during development.

🧑‍💻 Run Without Docker
Backend
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

# Linux / macOS
source .venv/bin/activate

pip install -r requirements/dev.txt

uvicorn app.main:app --reload
Frontend
cd frontend

npm install
npm run dev
🗺️ Development Roadmap
01 ━ Project Foundation                 ✅
02 ━ Database + SQLAlchemy Models       🔄
03 ━ Authentication + JWT + RBAC        🔜
04 ━ Application Shell + Dashboard      🔜
05 ━ Asset Inventory                    🔜
06 ━ Authorized Network Scanner         🔜
07 ━ CVE Intelligence                   🔜
08 ━ Risk Scoring Engine                🔜
09 ━ AI Security Explanations           🔜
10 ━ Threat Timeline                    🔜
11 ━ Analytics & Visualization          🔜
12 ━ Digital Twin Network               🔜
13 ━ PDF Security Reports               🔜
14 ━ User Management                    🔜
15 ━ Audit Logging                      🔜
16 ━ Security Hardening                 🔜
17 ━ Testing & QA                       🔜
18 ━ Production Deployment              🔜
📂 Project Structure
Sentinelx-Cybersecurity-Platform/
│
├── 🐍 backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │   └── workers/
│   │
│   ├── tests/
│   ├── Dockerfile
│   └── pyproject.toml
│
├── ⚛️ frontend/
│   ├── app/
│   │   └── (dashboard)/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── layout/
│   │   └── ui/
│   ├── lib/
│   ├── Dockerfile
│   └── package.json
│
├── 🐳 docker-compose.yml
├── 🔐 .env.example
├── 📋 PROJECT_STATE.md
└── 📖 README.md
🔐 Security Philosophy

SentinelX is built around a defense-first security model.

The platform focuses on:

VISIBILITY
    ↓
DETECTION
    ↓
ANALYSIS
    ↓
RISK
    ↓
PRIORITIZATION
    ↓
RESPONSE
    ↓
AUDIT
🛡️ Authorized Scanning Only

The network scanner is intentionally restricted to explicitly authorized targets.

Before a scan can execute, the platform is designed to require a valid authorization record.

SentinelX does not provide:

❌ Exploitation tooling
❌ Credential harvesting
❌ Persistence mechanisms
❌ Evasion tooling
❌ Unauthorized network access

Security testing should be authorized, accountable, and auditable.

📊 Security Command Center

SentinelX is designed to give security teams a single operational view of:

┌───────────────────────────────────────────────────────┐
│                  SENTINELX COMMAND CENTER             │
├───────────────────────────────────────────────────────┤
│                                                       │
│  🟢 SECURITY SCORE        🔴 CRITICAL FINDINGS        │
│       87 / 100                    12                  │
│                                                       │
│  🖥️ ASSETS                🧬 VULNERABILITIES          │
│       248                         37                  │
│                                                       │
│  🚨 ACTIVE THREATS        🔎 ACTIVE SCANS             │
│       06                           03                 │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│        🌐 LIVE DIGITAL-TWIN NETWORK                  │
│                                                       │
│      ◉───────◉────────◉───────◉                      │
│       \       │        │       /                      │
│        \      │        │      /                       │
│         ◉─────┴────────┴─────◉                       │
│                                                       │
└───────────────────────────────────────────────────────┘
🤖 AI + Cybersecurity

SentinelX combines traditional security engineering with AI-assisted intelligence.

Instead of presenting security teams with endless raw findings, the platform aims to answer:

What happened?

Why does it matter?

What is affected?

How severe is it?

What should we prioritize?

What should the security team investigate next?

📈 Project Status

Current milestone: Project Foundation & Development Environment

See PROJECT_STATE.md for the current milestone, completed work, implementation notes, and upcoming development.

The project state is maintained incrementally as new milestones are completed.

⚡ Design Principles

SentinelX is being developed around six core principles:

👁️ Visibility

Know what exists before trying to secure it.

🎯 Prioritization

Not every vulnerability deserves the same response.

🧠 Intelligence

Turn security data into understandable decisions.

🔐 Control

Every sensitive operation should be controlled and accountable.

📝 Accountability

Security actions should be traceable through audit logs.

🛡️ Defense First

Build capabilities that strengthen defenders without enabling unauthorized attacks.

🌌 Vision

The long-term vision for SentinelX is simple:

Build a modern security command center where an organization can see, understand, prioritize, and defend its digital environment from one place.

From asset discovery to risk intelligence.

From vulnerability management to AI-assisted analysis.

From network visualization to auditable security operations.

One platform. One security view. One source of truth.

⭐ Contributing

SentinelX is currently under active development.

As the architecture stabilizes, contribution guidelines, development standards, testing requirements, and security contribution policies will be expanded.

If you discover a security issue, please report it responsibly rather than publicly exposing sensitive details.

⚠️ Disclaimer

SentinelX is intended for defensive cybersecurity, authorized security testing, security monitoring, vulnerability management, and security research.

Only scan systems and networks for which you have explicit authorization.

The developers are not responsible for misuse of this software.

<p align="center">
🛡️ SENTINELX AI
SEE. ANALYZE. PRIORITIZE. DEFEND.

Cyber Defense Command Center

<br>

Built for defenders • Designed for intelligence • Engineered for security

</p> ```
