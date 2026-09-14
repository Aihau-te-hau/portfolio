import projects from "../../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionDivider from "../SectionDivider/SectionDivider.jsx";
import "./Projects.scss";

function Projects() {
  return (
    <section className="projects" id="projects">
        <div className="projects-header">
            <div className="header-line label-line"></div>

            <span className="section-label label">
            PROJETS SÉLECTIONNÉS
            </span>

            <div className="header-line label-line"></div>
        </div>

        <h2>Mes récentes réalisations</h2>

        <div className="projects-grid">
            {projects.map((project) => (
            <ProjectCard
                key={project.title}
                {...project}
            />
            ))}
        </div>

        <SectionDivider />
    </section>
  );
}

export default Projects;