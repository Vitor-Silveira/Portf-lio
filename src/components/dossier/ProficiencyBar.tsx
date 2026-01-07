import { cn } from "@/lib/utils";

interface ProficiencyBarProps {
  level: number; // 1-5
  className?: string;
}

export function ProficiencyBar({ level, className }: ProficiencyBarProps) {
  const percentage = (level / 5) * 100;
  
  return (
    <div className={cn("proficiency-bar w-32", className)}>
      <div 
        className="proficiency-fill" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
