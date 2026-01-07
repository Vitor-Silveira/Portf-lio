import { DossierLayout } from "@/components/layout/DossierLayout";
import { PaperPage } from "@/components/dossier/PaperPage";
import { ClassifiedHeader } from "@/components/dossier/ClassifiedHeader";
import { SkillRow } from "@/components/dossier/SkillRow";
import { Stamp } from "@/components/dossier/Stamp";

const skillsData = {
  languages: [
    { name: "TypeScript", level: 5, status: "ACTIVE" as const, clearance: "L5" },
    { name: "Python", level: 5, status: "ACTIVE" as const, clearance: "L5" },
    { name: "JavaScript", level: 5, status: "ACTIVE" as const, clearance: "L5" },
    { name: "Java", level: 4, status: "ACTIVE" as const, clearance: "L4" },
    { name: "Go", level: 3, status: "EXPERIMENTAL" as const, clearance: "L3" },
    { name: "PHP", level: 3, status: "LEGACY" as const, clearance: "L2" },
  ],
  frameworks: [
    { name: "React", level: 5, status: "ACTIVE" as const, clearance: "L5" },
    { name: "Node.js", level: 5, status: "ACTIVE" as const, clearance: "L5" },
    { name: "Next.js", level: 4, status: "ACTIVE" as const, clearance: "L4" },
    { name: "Express", level: 5, status: "ACTIVE" as const, clearance: "L5" },
    { name: "FastAPI", level: 4, status: "ACTIVE" as const, clearance: "L4" },
    { name: "Vue.js", level: 3, status: "LEGACY" as const, clearance: "L3" },
  ],
  infrastructure: [
    { name: "AWS", level: 4, status: "ACTIVE" as const, clearance: "L4" },
    { name: "Docker", level: 5, status: "ACTIVE" as const, clearance: "L5" },
    { name: "Kubernetes", level: 4, status: "ACTIVE" as const, clearance: "L4" },
    { name: "Terraform", level: 3, status: "EXPERIMENTAL" as const, clearance: "L3" },
    { name: "GitHub Actions", level: 5, status: "ACTIVE" as const, clearance: "L5" },
    { name: "Linux", level: 4, status: "ACTIVE" as const, clearance: "L4" },
  ],
  databases: [
    { name: "PostgreSQL", level: 5, status: "ACTIVE" as const, clearance: "L5" },
    { name: "MongoDB", level: 4, status: "ACTIVE" as const, clearance: "L4" },
    { name: "Redis", level: 4, status: "ACTIVE" as const, clearance: "L4" },
    { name: "MySQL", level: 4, status: "LEGACY" as const, clearance: "L3" },
  ],
};

const Skills = () => {
  return (
    <DossierLayout>
      <PaperPage>
        <ClassifiedHeader text="SKILLS MATRIX" />
        
        <div className="mt-6 space-y-8">
          {/* Legend */}
          <div className="border-2 border-border p-4 bg-paper-aged">
            <div className="text-sm font-bold mb-2">CLASSIFICATION LEGEND:</div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Stamp type="ACTIVE" className="text-xs px-2 py-0.5 border-2" />
                <span>Currently in use</span>
              </div>
              <div className="flex items-center gap-2">
                <Stamp type="LEGACY" className="text-xs px-2 py-0.5 border-2" />
                <span>Previous experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Stamp type="EXPERIMENTAL" className="text-xs px-2 py-0.5 border-2" />
                <span>Under development</span>
              </div>
            </div>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-12 gap-2 items-center text-sm text-muted-foreground border-b-2 border-border pb-2">
            <div className="col-span-4 md:col-span-3">SKILL</div>
            <div className="col-span-2 md:col-span-2">CLEARANCE</div>
            <div className="col-span-3 md:col-span-4">PROFICIENCY</div>
            <div className="col-span-3 md:col-span-3 text-right">STATUS</div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <span className="text-stamp-red">▸</span> PROGRAMMING LANGUAGES
            </h3>
            {skillsData.languages.map((skill) => (
              <SkillRow key={skill.name} {...skill} />
            ))}
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <span className="text-stamp-red">▸</span> FRAMEWORKS & LIBRARIES
            </h3>
            {skillsData.frameworks.map((skill) => (
              <SkillRow key={skill.name} {...skill} />
            ))}
          </div>

          {/* Infrastructure */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <span className="text-stamp-red">▸</span> INFRASTRUCTURE & DEVOPS
            </h3>
            {skillsData.infrastructure.map((skill) => (
              <SkillRow key={skill.name} {...skill} />
            ))}
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <span className="text-stamp-red">▸</span> DATABASES
            </h3>
            {skillsData.databases.map((skill) => (
              <SkillRow key={skill.name} {...skill} />
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center border-t-2 border-border pt-4">
            <div className="text-sm text-muted-foreground">
              MATRIX VERSION: 2.4.1 | LAST AUDIT: 2024-01
            </div>
            <Stamp type="APPROVED" variant="green" />
          </div>
        </div>
      </PaperPage>
    </DossierLayout>
  );
};

export default Skills;
