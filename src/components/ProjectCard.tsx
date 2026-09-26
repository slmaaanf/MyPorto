import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      className="project-card"
      to={`/projects/${project.slug}`}
      aria-label={`View case study: ${project.title}`}
    >
      <div className={`project-visual project-${project.number}`}>
        <div className="project-visual-top">
          <span>{project.number}</span>
          <span>{project.category.split(" · ")[0]}</span>
        </div>

        <div className="visual-system" aria-hidden="true">
          <span className="system-circle circle-one" />
          <span className="system-circle circle-two" />
          <span className="system-circle circle-three" />

          <span className="system-line line-one" />
          <span className="system-line line-two" />
          <span className="system-line line-three" />

          <span className="system-node node-one" />
          <span className="system-node node-two" />
          <span className="system-node node-three" />
        </div>

        <div className="project-arrow">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="project-content">
        <div>
          <p className="eyebrow">{project.category}</p>

          <h3>{project.title}</h3>

          <p className="muted project-description">
            {project.description}
          </p>
        </div>

        <div className="project-bottom">
          <div className="project-result">
            <strong>{project.result}</strong>
            <span>{project.resultLabel}</span>
          </div>

          <div className="tags">
            {project.stack.slice(0, 3).map((item) => (
              <span key={item}>{item}</span>
            ))}

            {project.stack.length > 3 && (
              <span>+{project.stack.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}