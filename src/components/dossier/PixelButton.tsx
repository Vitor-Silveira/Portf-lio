import { cn } from "@/lib/utils";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

const variantClasses = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  danger: "bg-destructive text-destructive-foreground",
};

export function PixelButton({ children, variant = "primary", className, ...props }: PixelButtonProps) {
  return (
    <button 
      className={cn(
        "pixel-btn",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
