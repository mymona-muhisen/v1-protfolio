import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="meta">Let's Connect</h2>

      <div className="contact-links">

        <a
          href="https://github.com/mymona-muhisen"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        <a
          href="https://www.linkedin.com/in/mymona-muhisen-812384263"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

      </div>
    </section>
  );
}