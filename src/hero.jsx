import { useState, useEffect } from "react";

export default function Hero() {
  const words = [
    "Creative",
    "Elegant",
    "Dynamic",
    "Intuitive",
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      <div className="text">
        <h4 className="meta">Hello i'm</h4>

        <h1 className="name">Mymona</h1>
        <h1 className="name">muhisen</h1>

        <p className="meta">
          I build digital experiences that are
        </p>

        <div className="word-wrapper">
          <div key={currentWord} className="word-animation">
            <h1 className="h1">{words[currentWord]}</h1>
          </div>

          <span
            className="material-symbols-outlined line-curve"
            aria-hidden="true"
          >
            line_curve
          </span>
        </div>

        <span className="hero-divider" aria-hidden="true"></span>

        <p className="meta">
          SOFTWARE ENGINEERING STUDENT{" "}
          <span
            className="material-symbols-outlined"
            aria-hidden="true"
          >
            circle
          </span>{" "}
          FRONT-END DEVELOPER
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="cta-btn">
            View My Work <span className="arrow">→</span>
          </a>

          <a href="/Mymona_Muhisen_CV.pdf" download>
            <button className="cv">Download CV</button>
          </a>
        </div>
      </div>

      <div className="hero-visual">

        <img
          className="laptop"
          src="/laptop.png"
          alt="Laptop"
        />

        <img
          className="hero-star star-1"
          src="/pink-star.svg"
          alt=""
        />

        <img
          className="hero-star star-2"
          src="/purple-star.svg"
          alt=""
        />

        <img
          className="hero-star star-3"
          src="/pink-star.svg"
          alt=""
        />

        <img
          className="hero-star star-4"
          src="/purple-star.svg"
          alt=""
        />

      </div>

    </section>
  );
}