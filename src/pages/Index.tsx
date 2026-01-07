import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stamp } from "@/components/dossier/Stamp";
import { PixelButton } from "@/components/dossier/PixelButton";

const Index = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [showStamp, setShowStamp] = useState(false);
  const navigate = useNavigate();

  const handleOpenDossier = () => {
    setIsOpening(true);
    setShowStamp(true);
    
    // Navigate after animation
    setTimeout(() => {
      navigate("/summary");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 scanlines">
      <div 
        className={`folder-cover max-w-lg w-full transition-none ${isOpening ? 'animate-folder-open' : ''}`}
      >
        {/* Classification markings */}
        <div className="border-4 border-classified p-1 mb-6">
          <div className="classified-header text-base md:text-xl">
            ★ CLASSIFIED TECH DOSSIER ★
          </div>
        </div>

        {/* Main content */}
        <div className="text-center space-y-6">
          {/* Subject name */}
          <div className="space-y-2">
            <div className="text-muted-foreground text-sm tracking-widest">SUBJECT</div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-wide">
              AGENT NAME
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground font-typewriter">
              Software Engineer
            </div>
          </div>

          {/* Security level */}
          <div className="border-2 border-dashed border-border p-4 bg-paper">
            <div className="text-sm text-muted-foreground mb-2">SECURITY LEVEL</div>
            <div className="text-2xl font-bold text-stamp-red tracking-widest">
              RESTRICTED
            </div>
          </div>

          {/* Warning text */}
          <p className="text-muted-foreground text-sm font-typewriter">
            AUTHORIZED ACCESS ONLY<br />
            UNAUTHORIZED ACCESS WILL BE LOGGED
          </p>

          {/* Stamps */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Stamp type="TOP SECRET" variant="red" />
            {showStamp && (
              <Stamp type="AUTHORIZED" variant="green" animated />
            )}
          </div>

          {/* Access button */}
          <div className="pt-4">
            <PixelButton onClick={handleOpenDossier}>
              [ OPEN DOSSIER ]
            </PixelButton>
          </div>
        </div>

        {/* Folder tab */}
        <div className="absolute -top-8 left-8 folder-tab text-sm">
          PERSONNEL FILE
        </div>

        {/* Document ID */}
        <div className="absolute bottom-2 right-4 text-xs text-muted-foreground">
          DOC-ID: SE-2024-001
        </div>
      </div>
    </div>
  );
};

export default Index;
