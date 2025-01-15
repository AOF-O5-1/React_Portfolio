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
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/youruserid" 
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