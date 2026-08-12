import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { networkEdges, networkNodes, type Severity } from "@/lib/mock-data";

const NODE_COLOR: Record<Severity | "safe", string> = {
  critical: "#ef4444",
  high: "#f97316",
  medium: "#eab308",
  low: "#3b82f6",
  info: "#64748b",
  safe: "#34d399",
};

export default function NetworkPage() {
  const nodeMap = Object.fromEntries(networkNodes.map((n) => [n.id, n]));

  return (
    <div>
      <PageHeader
        title="Digital twin"
        description="Live network topology — full interactive 3D view lands in Milestone 12"
      />
      <Card className="p-4">
        <svg viewBox="0 0 760 380" className="w-full" style={{ maxHeight: 420 }}>
          {networkEdges.map((edge, i) => {
            const from = nodeMap[edge.from];
            const to = nodeMap[edge.to];
            if (!from || !to) return null;
            return (
              <line
                key={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#212838"
                strokeWidth={1.5}
              />
            );
          })}
          {networkNodes.map((node) => (
            <g key={node.id}>
              <circle cx={node.x} cy={node.y} r={22} fill="#0f1420" stroke={NODE_COLOR[node.severity]} strokeWidth={2} />
              <circle cx={node.x} cy={node.y} r={4} fill={NODE_COLOR[node.severity]} />
              <text
                x={node.x}
                y={node.y + 40}
                textAnchor="middle"
                fill="#9ca3af"
                fontSize="11"
                fontFamily="var(--font-plex-mono)"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </Card>

      <div className="mt-4 flex gap-4 text-xs text-gray-500">
        {Object.entries(NODE_COLOR).map(([label, color]) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: color }} />
            <span className="font-mono uppercase">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
