import { cn } from "@/lib/utils";

interface ClassifiedHeaderProps {
  text?: string;
  className?: string;
}

export function ClassifiedHeader({ text = "CLASSIFIED", className }: ClassifiedHeaderProps) {
  return (
    <div className={cn("classified-header", className)}>
      ★ {text} ★
    </div>
  );
}
