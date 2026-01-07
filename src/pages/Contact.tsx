import { DossierLayout } from "@/components/layout/DossierLayout";
import { PaperPage } from "@/components/dossier/PaperPage";
import { ClassifiedHeader } from "@/components/dossier/ClassifiedHeader";
import { Stamp } from "@/components/dossier/Stamp";
import { PixelButton } from "@/components/dossier/PixelButton";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const handleExport = () => {
    // In a real implementation, this would trigger PDF download
    alert("PDF export functionality would be implemented here");
  };

  return (
    <DossierLayout>
      <PaperPage>
        <ClassifiedHeader text="SECURE CONTACT" />
        
        <div className="mt-6 space-y-6">
          {/* Warning */}
          <div className="border-4 border-classified p-4 bg-paper-aged">
            <div className="flex items-center gap-2 text-classified mb-2">
              <span className="text-2xl">⚠</span>
              <span className="font-bold tracking-wider">AUTHORIZED COMMUNICATION CHANNELS</span>
            </div>
            <p className="text-sm font-typewriter text-muted-foreground">
              All communications are logged and monitored. 
              Use approved channels only. Response time: 24-48 hours.
            </p>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Email */}
            <a 
              href="mailto:agent@example.com"
              className="border-2 border-border p-4 bg-paper hover:bg-paper-aged transition-none flex items-center gap-4 group"
            >
              <div className="w-12 h-12 border-2 border-border flex items-center justify-center bg-muted">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">SECURE EMAIL</div>
                <div className="font-bold text-primary group-hover:text-stamp-red transition-none">
                  agent@example.com
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border p-4 bg-paper hover:bg-paper-aged transition-none flex items-center gap-4 group"
            >
              <div className="w-12 h-12 border-2 border-border flex items-center justify-center bg-muted">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">PROFESSIONAL NETWORK</div>
                <div className="font-bold text-primary group-hover:text-stamp-red transition-none">
                  linkedin.com/in/agent
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border p-4 bg-paper hover:bg-paper-aged transition-none flex items-center gap-4 group"
            >
              <div className="w-12 h-12 border-2 border-border flex items-center justify-center bg-muted">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">CODE REPOSITORY</div>
                <div className="font-bold text-primary group-hover:text-stamp-red transition-none">
                  github.com/agent
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="border-2 border-border p-4 bg-paper flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-border flex items-center justify-center bg-muted">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">BASE OF OPERATIONS</div>
                <div className="font-bold text-primary">
                  Remote / São Paulo, BR
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="border-2 border-border p-4 bg-paper-aged">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">CURRENT STATUS</div>
                <div className="text-xl font-bold text-stamp-green">
                  AVAILABLE FOR NEW OPERATIONS
                </div>
              </div>
              <Stamp type="ACTIVE" variant="green" />
            </div>
          </div>

          {/* Export section */}
          <div className="border-2 border-dashed border-border p-6 text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-bold mb-2">EXPORT CLASSIFIED REPORT</h3>
            <p className="text-sm text-muted-foreground mb-4 font-typewriter">
              Download complete technical dossier in portable format.
            </p>
            <PixelButton onClick={handleExport}>
              [ EXPORT PDF ]
            </PixelButton>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center border-t-2 border-border pt-4">
            <div className="text-sm text-muted-foreground">
              COMMUNICATION PROTOCOLS: ACTIVE | ENCRYPTION: ENABLED
            </div>
            <Stamp type="AUTHORIZED" variant="blue" />
          </div>
        </div>
      </PaperPage>
    </DossierLayout>
  );
};

export default Contact;
