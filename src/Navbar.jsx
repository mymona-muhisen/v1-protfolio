export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <img
          src="/src/assets/M M.svg"
          alt="Mymona Muhisen"
          className="logo"
        />

        <div className="nav-links">
          <a href="#home" className="link">
            Home
          </a>

          <a href="#projects" className="link">
            Projects
          </a>

          <a href="#contact" className="link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}