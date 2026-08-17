export default function Project({ img, title, link, description }) {
  return (
    <div className="project">
      <img src={img} alt={title} loading="lazy" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
      
    </div>
  );
}
