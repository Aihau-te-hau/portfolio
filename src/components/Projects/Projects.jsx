import ProjectCard from "./ProjectCard.jsx";
import SectionDivider from "../SectionDivider/SectionDivider.jsx";
import "./Projects.scss";

const projects = [
  {
    title: "Dashboard Admin",
    technologies: "REACT · TYPESCRIPT · TAILWIND CSS",
    image: "/images/dashboard.jpg",
    alt: "Dashboard administrateur",
  },
  {
    title: "E-commerce Store",
    technologies: "REACT · RESPONSIVE · ACCESSIBILITY",
    image: "/images/ecommerce.jpg",
    alt: "Site e-commerce",
  },
  {
    title: "Portfolio V2",
    technologies: "REACT · VITE · DESIGN SYSTEM",
    image: "/images/portfolio.jpg",
    alt: "Portfolio développeur",
  },
];

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