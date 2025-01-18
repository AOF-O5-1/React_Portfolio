import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Ade Fajemisin</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;