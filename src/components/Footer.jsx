import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li>
          <a
            href="https://github.com/AOF-O5-1" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ade-fajemisin-798015347/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/29260486/ade-fajemisin" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-stack-overflow"></i> Stack Overflow
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;