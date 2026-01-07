import { FolderNavigation } from "@/components/dossier/FolderNavigation";

interface DossierLayoutProps {
  children: React.ReactNode;
}

export function DossierLayout({ children }: DossierLayoutProps) {
  return (
    <div className="min-h-screen bg-background scanlines">
      <div className="container max-w-4xl mx-auto py-4 px-4">
        <FolderNavigation />
        <main className="bg-paper border-4 border-border border-t-0">
          {children}
        </main>
        <footer className="text-center py-4 text-muted-foreground text-sm">
          <span className="opacity-50">DOCUMENT ID: PTF-2024-001 | ACCESS LOG MAINTAINED</span>
        </footer>
      </div>
    </div>
  );
}
