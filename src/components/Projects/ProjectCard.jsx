function ProjectCard({ title, technologies, image, lien, alt }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={alt} className="project-image" />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{technologies}</p>
        <a href={lien} target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;