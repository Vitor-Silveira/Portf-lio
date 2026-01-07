import { Link } from "react-router-dom";
import { DossierLayout } from "@/components/layout/DossierLayout";
import { PaperPage } from "@/components/dossier/PaperPage";
import { ClassifiedHeader } from "@/components/dossier/ClassifiedHeader";
import { Stamp } from "@/components/dossier/Stamp";
import { TechBadge } from "@/components/dossier/TechBadge";

interface Operation {
  id: string;
  codename: string;
  company: string;
  role: string;
  period: string;
  status: "DEPLOYED" | "APPROVED";
  technologies: string[];
}

const operations: Operation[] = [
  {
    id: "op-001",
    codename: "PHOENIX RISING",
    company: "TechCorp International",
    role: "Senior Software Engineer",
    period: "2022 - PRESENT",
    status: "DEPLOYED",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "op-002",
    codename: "IRON BRIDGE",
    company: "StartupX Inc.",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    status: "APPROVED",
    technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "Docker"],
  },
  {
    id: "op-003",
    codename: "SILENT THUNDER",
    company: "Enterprise Solutions Ltd.",
    role: "Backend Developer",
    period: "2018 - 2020",
    status: "APPROVED",
    technologies: ["Java", "Spring Boot", "MySQL", "Kubernetes", "Jenkins"],
  },
];

const Operations = () => {
  return (
    <DossierLayout>
      <PaperPage>
        <ClassifiedHeader text="OPERATIONS INDEX" />
        
        <div className="mt-6 space-y-6">
          {/* Instructions */}
          <div className="border-2 border-dashed border-border p-4 bg-paper-aged">
            <p className="text-sm text-muted-foreground font-typewriter">
              The following is a chronological index of completed and ongoing operations.
              Select an operation file for detailed technical briefing.
            </p>
          </div>

          {/* Operations list */}
          <div className="space-y-4">
            {operations.map((op, index) => (
              <Link
                key={op.id}
                to={`/operations/${op.id}`}
                className="block border-2 border-border p-4 bg-paper hover:bg-paper-aged transition-none group"
              >
                <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                  <div>
                    <div className="text-xs text-muted-foreground">
                      FILE #{String(index + 1).padStart(3, '0')}
                    </div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-stamp-red transition-none">
                      OP: {op.codename}
                    </h3>
                  </div>
                  <Stamp type={op.status} />
                </div>
                
                <div className="grid md:grid-cols-3 gap-2 text-sm mb-3">
                  <div>
                    <span className="text-muted-foreground">COMPANY:</span>{" "}
                    <span className="font-bold">{op.company}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">ROLE:</span>{" "}
                    <span className="font-bold">{op.role}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">PERIOD:</span>{" "}
                    <span className="font-bold">{op.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {op.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                <div className="mt-3 text-sm text-stamp-blue font-bold group-hover:text-stamp-red transition-none">
                  [ ACCESS FILE → ]
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center border-t-2 border-border pt-4">
            <div className="text-sm text-muted-foreground">
              TOTAL OPERATIONS: {operations.length} | CLASSIFIED LEVEL: RESTRICTED
            </div>
          </div>
        </div>
      </PaperPage>
    </DossierLayout>
  );
};

export default Operations;
