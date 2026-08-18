import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <a href="#home" className="brand" onClick={closeMenu}>
        <img
          src="/src/assets/M M.svg"
          alt="Mymona Muhisen"
          className="logo"
        />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </button>

      <div className={menuOpen ? "nav-links open" : "nav-links"}>

        <a href="#home" className="link" onClick={closeMenu}>
          Home
        </a>

        <a href="#projects" className="link" onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" className="link" onClick={closeMenu}>
          Contact
        </a>

      </div>

    </nav>
  );
}