import { DossierLayout } from "@/components/layout/DossierLayout";
import { PaperPage } from "@/components/dossier/PaperPage";
import { ClassifiedHeader } from "@/components/dossier/ClassifiedHeader";
import { Stamp } from "@/components/dossier/Stamp";
import { TechBadge } from "@/components/dossier/TechBadge";

interface Project {
  codename: string;
  description: string;
  status: "DEPLOYED" | "EXPERIMENTAL";
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    codename: "SHADOW PROTOCOL",
    description: "Open-source CLI tool for automating development workflows and deployment pipelines.",
    status: "DEPLOYED",
    technologies: ["Go", "Docker", "GitHub Actions"],
    link: "https://github.com",
  },
  {
    codename: "NEURAL FORGE",
    description: "Machine learning framework for natural language processing tasks with focus on performance.",
    status: "EXPERIMENTAL",
    technologies: ["Python", "PyTorch", "FastAPI"],
    link: "https://github.com",
  },
  {
    codename: "CIPHER VAULT",
    description: "End-to-end encrypted note-taking application with offline-first architecture.",
    status: "DEPLOYED",
    technologies: ["React", "TypeScript", "IndexedDB", "WebCrypto"],
    link: "https://github.com",
  },
  {
    codename: "QUANTUM BRIDGE",
    description: "Real-time collaboration platform for distributed development teams.",
    status: "EXPERIMENTAL",
    technologies: ["Node.js", "WebSocket", "Redis", "React"],
  },
];

const Projects = () => {
  return (
    <DossierLayout>
      <PaperPage>
        <ClassifiedHeader text="EXPERIMENTAL PROJECTS" />
        
        <div className="mt-6 space-y-6">
          {/* Header */}
          <div className="border-2 border-dashed border-border p-4 bg-paper-aged">
            <p className="text-sm text-muted-foreground font-typewriter">
              The following projects are conducted outside official operations.
              These experimental initiatives demonstrate additional capabilities and areas of interest.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.codename}
                className="border-2 border-border p-4 bg-paper hover:bg-paper-aged transition-none"
              >
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="text-lg font-bold text-primary">
                    {project.codename}
                  </h3>
                  <Stamp 
                    type={project.status} 
                    className="text-xs px-2 py-0.5 border-2"
                  />
                </div>
                
                <p className="text-sm font-typewriter mb-4 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stamp-blue hover:text-stamp-red font-bold"
                  >
                    [ VIEW SOURCE → ]
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center border-t-2 border-border pt-4">
            <div className="text-sm text-muted-foreground">
              PROJECTS ARE MAINTAINED INDEPENDENTLY | CONTRIBUTIONS WELCOME
            </div>
          </div>
        </div>
      </PaperPage>
    </DossierLayout>
  );
};

export default Projects;
