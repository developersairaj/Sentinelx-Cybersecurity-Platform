import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { platformUsers } from "@/lib/mock-data";

const ROLE_STYLES: Record<string, string> = {
  Admin: "text-signal",
  Analyst: "text-emerald-400",
  Viewer: "text-gray-400",
};

export default function UsersPage() {
  return (
    <div>
      <PageHeader
        title="User management"
        description="Role-based access control — Admin, Analyst, Viewer · Milestone 14"
      />
      <Card>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-[11px] uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3 font-mono font-medium">Name</th>
              <th className="px-5 py-3 font-mono font-medium">Email</th>
              <th className="px-5 py-3 font-mono font-medium">Role</th>
              <th className="px-5 py-3 font-mono font-medium">Last active</th>
            </tr>
          </thead>
          <tbody>
            {platformUsers.map((user) => (
              <tr key={user.id} className="border-b border-border-muted last:border-0 hover:bg-surface">
                <td className="px-5 py-3 text-gray-200">{user.name}</td>
                <td className="px-5 py-3 font-mono text-xs text-gray-400">{user.email}</td>
                <td className={`px-5 py-3 font-mono text-xs font-medium ${ROLE_STYLES[user.role]}`}>
                  {user.role}
                </td>
                <td className="px-5 py-3 font-mono text-xs text-gray-500">
                  {new Date(user.lastActive).toLocaleString(undefined, {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
