from datetime import date, datetime

from pydantic import BaseModel, ConfigDict


class AssetOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    name: str
    type: str
    ip: str
    owner: str
    risk_score: int
    last_seen: datetime


class VulnerabilityOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    cve: str
    title: str
    severity: str
    cvss: float
    asset: str
    status: str
    discovered: date


class ScanJobOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    target: str
    status: str
    progress: int
    started_by: str
    started_at: datetime


class ThreatEventOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    title: str
    severity: str
    asset: str
    timestamp: datetime


class DashboardSummary(BaseModel):
    security_score: int
    security_score_trend: int
    total_assets: int
    open_vulnerabilities: int
    active_scans: int
    severity_breakdown: dict[str, int]
