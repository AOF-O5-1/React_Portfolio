import React from 'react';
import useScrollSpy from './ScrollEffects';


const Header = () => {
    const sectionIds = ['about', 'portfolio', 'contact', 'resume'];
    const activeSection = useScrollSpy(sectionIds);
    return (
        <header className="header">
      <h1>Your Name</h1>
      <nav>
        <ul className="nav-list">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;