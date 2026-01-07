import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "INDEX", path: "/" },
  { label: "SUMMARY", path: "/summary" },
  { label: "SKILLS", path: "/skills" },
  { label: "OPERATIONS", path: "/operations" },
  { label: "PROJECTS", path: "/projects" },
  { label: "CONTACT", path: "/contact" },
];

export function FolderNavigation() {
  const location = useLocation();
  
  return (
    <nav className="flex flex-wrap gap-1 mb-0 border-b-4 border-border bg-paper-aged p-2">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "nav-tab text-sm md:text-base",
            location.pathname === item.path && "active"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
