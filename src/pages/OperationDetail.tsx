import { useParams, Link } from "react-router-dom";
import { DossierLayout } from "@/components/layout/DossierLayout";
import { PaperPage } from "@/components/dossier/PaperPage";
import { ClassifiedHeader } from "@/components/dossier/ClassifiedHeader";
import { DocumentField } from "@/components/dossier/DocumentField";
import { Stamp } from "@/components/dossier/Stamp";
import { TechBadge } from "@/components/dossier/TechBadge";
import { RedactedText } from "@/components/dossier/RedactedText";

// This would normally come from an API/database
const operationsData: Record<string, {
  codename: string;
  company: string;
  role: string;
  clearance: string;
  period: string;
  status: "DEPLOYED" | "APPROVED";
  techStack: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    infrastructure: string[];
  };
  responsibilities: string[];
  achievements: string[];
  impact: string;
}> = {
  "op-001": {
    codename: "PHOENIX RISING",
    company: "TechCorp International",
    role: "Senior Software Engineer",
    clearance: "L4",
    period: "Jan 2022 - Present",
    status: "DEPLOYED",
    techStack: {
      languages: ["TypeScript", "Python", "SQL"],
      frameworks: ["React", "Node.js", "Express", "FastAPI"],
      databases: ["PostgreSQL", "Redis", "Elasticsearch"],
      infrastructure: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
    responsibilities: [
      "Led development of microservices architecture serving 1M+ daily users",
      "Designed and implemented real-time data processing pipelines",
      "Mentored team of 5 junior developers",
      "Established coding standards and review processes",
    ],
    achievements: [
      "Reduced API response time by 60% through caching optimization",
      "Implemented CI/CD pipeline reducing deployment time from hours to minutes",
      "Architected system handling 10,000+ concurrent connections",
    ],
    impact: "System serves critical business operations with 99.9% uptime. Revenue impact estimated at $2M+ annually.",
  },
  "op-002": {
    codename: "IRON BRIDGE",
    company: "StartupX Inc.",
    role: "Full Stack Developer",
    clearance: "L3",
    period: "Mar 2020 - Dec 2021",
    status: "APPROVED",
    techStack: {
      languages: ["JavaScript", "Python", "Go"],
      frameworks: ["Vue.js", "FastAPI", "Django"],
      databases: ["MongoDB", "PostgreSQL"],
      infrastructure: ["Docker", "AWS", "GitHub Actions"],
    },
    responsibilities: [
      "Developed full-stack features for B2B SaaS platform",
      "Built RESTful APIs consumed by web and mobile clients",
      "Implemented authentication and authorization systems",
      "Collaborated with product team on feature specifications",
    ],
    achievements: [
      "Launched MVP within 3 months of joining",
      "Built integration with 5+ third-party payment providers",
      "Reduced bug count by 40% through automated testing",
    ],
    impact: "Platform acquired 500+ enterprise clients during tenure.",
  },
  "op-003": {
    codename: "SILENT THUNDER",
    company: "Enterprise Solutions Ltd.",
    role: "Backend Developer",
    clearance: "L2",
    period: "Jun 2018 - Feb 2020",
    status: "APPROVED",
    techStack: {
      languages: ["Java", "SQL", "Bash"],
      frameworks: ["Spring Boot", "Hibernate"],
      databases: ["MySQL", "Oracle"],
      infrastructure: ["Kubernetes", "Jenkins", "Nginx"],
    },
    responsibilities: [
      "Maintained and enhanced legacy enterprise applications",
      "Developed microservices for order processing system",
      "Wrote technical documentation and runbooks",
      "Participated in on-call rotation for production support",
    ],
    achievements: [
      "Migrated monolithic application to microservices architecture",
      "Improved database query performance by 300%",
      "Automated manual deployment processes",
    ],
    impact: "System processes $50M+ in transactions annually with improved reliability.",
  },
};

const OperationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const operation = id ? operationsData[id] : null;

  if (!operation) {
    return (
      <DossierLayout>
        <PaperPage>
          <ClassifiedHeader text="FILE NOT FOUND" />
          <div className="mt-6 text-center">
            <p className="text-xl mb-4">Requested operation file does not exist or has been expunged.</p>
            <Link to="/operations" className="text-stamp-blue hover:text-stamp-red">
              ← Return to Operations Index
            </Link>
          </div>
        </PaperPage>
      </DossierLayout>
    );
  }

  return (
    <DossierLayout>
      <PaperPage withClip>
        <ClassifiedHeader text="OPERATION BRIEFING" />
        
        <div className="mt-6 space-y-6">
          {/* Header info */}
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <div className="text-sm text-muted-foreground">OPERATION CODENAME</div>
              <h2 className="text-3xl font-bold text-primary">{operation.codename}</h2>
            </div>
            <Stamp type={operation.status} />
          </div>

          {/* Basic info */}
          <div className="grid md:grid-cols-2 gap-4 border-2 border-border p-4 bg-paper-aged">
            <DocumentField label="Company / Environment" value={operation.company} />
            <DocumentField label="Role / Designation" value={operation.role} />
            <DocumentField label="Clearance Level" value={operation.clearance} />
            <DocumentField label="Period" value={operation.period} />
          </div>

          {/* Tech stack */}
          <div className="border-2 border-border p-4">
            <h3 className="text-lg font-bold mb-4 text-primary">TECH STACK</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-2">LANGUAGES</div>
                <div className="flex flex-wrap gap-1">
                  {operation.techStack.languages.map((t) => <TechBadge key={t} name={t} />)}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">FRAMEWORKS</div>
                <div className="flex flex-wrap gap-1">
                  {operation.techStack.frameworks.map((t) => <TechBadge key={t} name={t} />)}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">DATABASES</div>
                <div className="flex flex-wrap gap-1">
                  {operation.techStack.databases.map((t) => <TechBadge key={t} name={t} />)}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">INFRASTRUCTURE</div>
                <div className="flex flex-wrap gap-1">
                  {operation.techStack.infrastructure.map((t) => <TechBadge key={t} name={t} />)}
                </div>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-primary">RESPONSIBILITIES</h3>
            <ul className="space-y-2">
              {operation.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-stamp-red font-bold">▸</span>
                  <span className="font-typewriter">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-primary">KEY ACHIEVEMENTS</h3>
            <ul className="space-y-2">
              {operation.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-stamp-green font-bold">✓</span>
                  <span className="font-typewriter">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="border-2 border-dashed border-border p-4 bg-paper-aged">
            <h3 className="text-lg font-bold mb-2 text-primary">SYSTEM IMPACT</h3>
            <p className="font-typewriter">
              {operation.impact.split(" ").map((word, i) => 
                word.includes("$") || word.includes("%") ? (
                  <RedactedText key={i}>{word}</RedactedText>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center border-t-2 border-border pt-4">
            <Link to="/operations" className="text-stamp-blue hover:text-stamp-red font-bold">
              ← BACK TO INDEX
            </Link>
            <Stamp type="APPROVED" variant="green" />
          </div>
        </div>
      </PaperPage>
    </DossierLayout>
  );
};

export default OperationDetail;
