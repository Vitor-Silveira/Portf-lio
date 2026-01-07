import { DossierLayout } from "@/components/layout/DossierLayout";
import { PaperPage } from "@/components/dossier/PaperPage";
import { ClassifiedHeader } from "@/components/dossier/ClassifiedHeader";
import { DocumentField } from "@/components/dossier/DocumentField";
import { Stamp } from "@/components/dossier/Stamp";
import { TechBadge } from "@/components/dossier/TechBadge";
import { RedactedText } from "@/components/dossier/RedactedText";

const Summary = () => {
  return (
    <DossierLayout>
      <PaperPage>
        <ClassifiedHeader text="TECHNICAL SUMMARY" />
        
        <div className="mt-6 space-y-6">
          {/* Asset overview */}
          <div className="border-2 border-border p-4 bg-paper-aged">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <div className="text-muted-foreground text-sm">ASSET DESIGNATION</div>
                <div className="text-3xl font-bold">AGENT NAME</div>
                <div className="text-lg text-muted-foreground font-typewriter">
                  Full Stack Developer / Software Engineer
                </div>
              </div>
              <Stamp type="ACTIVE" variant="green" />
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border-2 border-border p-3 text-center bg-paper">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">YEARS ACTIVE</div>
            </div>
            <div className="border-2 border-border p-3 text-center bg-paper">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">OPERATIONS</div>
            </div>
            <div className="border-2 border-border p-3 text-center bg-paper">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">TECH STACKS</div>
            </div>
            <div className="border-2 border-border p-3 text-center bg-paper">
              <div className="text-3xl font-bold text-primary">L4</div>
              <div className="text-sm text-muted-foreground">CLEARANCE</div>
            </div>
          </div>

          {/* Technical profile */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold border-b-2 border-border pb-2 mb-4">
                PRIMARY CAPABILITIES
              </h3>
              <div className="space-y-2">
                <DocumentField 
                  label="Backend Systems" 
                  value="Node.js, Python, Java, Go" 
                />
                <DocumentField 
                  label="Frontend Development" 
                  value="React, TypeScript, Vue.js" 
                />
                <DocumentField 
                  label="Database Operations" 
                  value="PostgreSQL, MongoDB, Redis" 
                />
                <DocumentField 
                  label="Cloud Infrastructure" 
                  value="AWS, GCP, Docker, Kubernetes" 
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold border-b-2 border-border pb-2 mb-4">
                OPERATIONAL DOMAINS
              </h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="Web Applications" />
                <TechBadge name="REST APIs" />
                <TechBadge name="Microservices" />
                <TechBadge name="DevOps" />
                <TechBadge name="System Design" />
                <TechBadge name="CI/CD" />
                <TechBadge name="Cloud Native" />
                <TechBadge name="Agile/Scrum" />
              </div>
            </div>
          </div>

          {/* Brief */}
          <div className="border-2 border-dashed border-border p-4">
            <h3 className="text-lg font-bold mb-3">OPERATIONAL BRIEF</h3>
            <p className="font-typewriter text-foreground leading-relaxed">
              Highly skilled software engineer with extensive experience in designing and 
              implementing scalable distributed systems. Specializes in full-stack development 
              with a focus on <RedactedText>mission-critical</RedactedText> applications. 
              Proven track record of delivering complex technical solutions under 
              <RedactedText>high-pressure</RedactedText> conditions. Currently available for 
              new assignments.
            </p>
          </div>

          {/* Status */}
          <div className="flex justify-between items-center border-t-2 border-border pt-4">
            <div className="text-sm text-muted-foreground">
              LAST UPDATED: 2024-01 | STATUS: AVAILABLE
            </div>
            <Stamp type="APPROVED" variant="green" />
          </div>
        </div>
      </PaperPage>
    </DossierLayout>
  );
};

export default Summary;
