import { cn } from "@/lib/utils";
import { ProficiencyBar } from "./ProficiencyBar";
import { Stamp } from "./Stamp";

type SkillStatus = "ACTIVE" | "LEGACY" | "EXPERIMENTAL";

interface SkillRowProps {
  name: string;
  level: number;
  status: SkillStatus;
  clearance?: string;
  className?: string;
}

export function SkillRow({ name, level, status, clearance = "L3", className }: SkillRowProps) {
  return (
    <div className={cn(
      "grid grid-cols-12 gap-2 items-center py-2 border-b border-dashed border-border",
      className
    )}>
      <div className="col-span-4 md:col-span-3 font-bold text-lg">{name}</div>
      <div className="col-span-2 md:col-span-2 text-muted-foreground text-sm">{clearance}</div>
      <div className="col-span-3 md:col-span-4">
        <ProficiencyBar level={level} />
      </div>
      <div className="col-span-3 md:col-span-3 text-right">
        <Stamp type={status} className="text-xs px-2 py-0.5 border-2" />
      </div>
    </div>
  );
}
