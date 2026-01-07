import { cn } from "@/lib/utils";

interface RedactedTextProps {
  children: React.ReactNode;
  revealOnHover?: boolean;
  className?: string;
}

export function RedactedText({ children, revealOnHover = true, className }: RedactedTextProps) {
  return (
    <span 
      className={cn(
        revealOnHover ? "redacted-hover" : "redacted",
        className
      )}
      title={revealOnHover ? "Hover to reveal" : undefined}
    >
      {children}
    </span>
  );
}
