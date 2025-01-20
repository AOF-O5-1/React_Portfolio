import React from 'react';


const Resume = () => {
  const proficiencies = [
    'HTML5, CSS3, JavaScript (ES6+), TypeScript',
    'React.js, React.ts',
    'Node.js, Express.js',
    'MongoDB, MySQL',
    'RESTful APIs,',
    'Git, GitHub',
    'Responsive Design, Accessibility',
  ];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <a
          href="/Resume.docx" 
          download="/Resume.docx"
          className="resume-download"
        >
          Download My Resume
        </a>
        <h3>Proficiencies</h3>
        <ul className="proficiencies-list">
          {proficiencies.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;