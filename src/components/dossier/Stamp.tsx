import { cn } from "@/lib/utils";

type StampVariant = "red" | "green" | "blue";
type StampType = "DEPLOYED" | "APPROVED" | "REDACTED" | "CLASSIFIED" | "PRODUCTION READY" | "TOP SECRET" | "AUTHORIZED" | "ACTIVE" | "LEGACY" | "EXPERIMENTAL";

interface StampProps {
  type: StampType;
  variant?: StampVariant;
  className?: string;
  animated?: boolean;
}

const variantClasses: Record<StampVariant, string> = {
  red: "stamp-red",
  green: "stamp-green", 
  blue: "stamp-blue",
};

const defaultVariants: Record<StampType, StampVariant> = {
  "DEPLOYED": "green",
  "APPROVED": "green",
  "PRODUCTION READY": "green",
  "ACTIVE": "green",
  "AUTHORIZED": "blue",
  "REDACTED": "red",
  "CLASSIFIED": "red",
  "TOP SECRET": "red",
  "LEGACY": "blue",
  "EXPERIMENTAL": "blue",
};

export function Stamp({ type, variant, className, animated = false }: StampProps) {
  const finalVariant = variant || defaultVariants[type];
  
  return (
    <span 
      className={cn(
        variantClasses[finalVariant],
        animated && "animate-stamp",
        className
      )}
    >
      {type}
    </span>
  );
}
