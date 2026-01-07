import { cn } from "@/lib/utils";

interface PaperPageProps {
  children: React.ReactNode;
  className?: string;
  withClip?: boolean;
  clipImage?: string;
}

export function PaperPage({ children, className, withClip = false, clipImage }: PaperPageProps) {
  return (
    <div className={cn("aged-paper paper-texture p-6 md:p-8 relative min-h-[600px]", className)}>
      {withClip && (
        <div className="absolute -top-2 right-8 md:right-12">
          <div className="paper-clip" />
          {clipImage && (
            <img 
              src={clipImage} 
              alt="Attached document" 
              className="w-20 h-20 mt-4 ml-4 border-2 border-border object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
          )}
        </div>
      )}
      {children}
    </div>
  );
}
