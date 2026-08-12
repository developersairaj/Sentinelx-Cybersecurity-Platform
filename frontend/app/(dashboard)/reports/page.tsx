import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { reports } from "@/lib/mock-data";
import { FileText } from "lucide-react";

export default function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="Security reports"
        description="Generated PDF reports — real generation lands in Milestone 13"
      />
      <div className="grid grid-cols-2 gap-4">
        {reports.map((report) => (
          <Card key={report.id} className="flex items-center gap-4 px-5 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-signal/10">
              <FileText className="h-5 w-5 text-signal" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-gray-200">{report.title}</p>
              <p className="mt-0.5 font-mono text-[11px] text-gray-500">
                {report.type} · {report.generatedAt}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
