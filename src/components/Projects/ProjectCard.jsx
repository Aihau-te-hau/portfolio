function ProjectCard({ title, technologies, image, alt }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={alt} className="project-image" />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{technologies}</p>
      </div>
    </article>
  );
}

export default ProjectCard;