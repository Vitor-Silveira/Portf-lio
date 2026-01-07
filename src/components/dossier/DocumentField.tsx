import { cn } from "@/lib/utils";

interface DocumentFieldProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

export function DocumentField({ label, value, className }: DocumentFieldProps) {
  return (
    <div className={cn("doc-field", className)}>
      <div className="doc-label">{label}</div>
      <div className="doc-value">{value}</div>
    </div>
  );
}
