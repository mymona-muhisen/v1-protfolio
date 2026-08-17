import logo from './assets/M M.svg';

export default function Navbar() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <a className="brand" href="/" onClick={scrollToTop}>
        <img className="logo" src={logo} alt="Mymona Muhisen logo" />
      </a>
      <div className="nav-links">
        <a className="link" href="/" onClick={scrollToTop}>home</a>
        <a className="link" href="#projects">projects</a>
      </div>
    </div>
  );
}
