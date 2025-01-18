import React from 'react';

const PortfolioSection = () => {
    const projects = [
      {
        title: "JourneySync",
        image: "C:\Users\marcu\OneDrive\Pictures\Saved Pictures\JourneySync.jpg", 
        deployedUrl: "https://project1.com",
        githubUrl: "https://github.com/MadamLoki/tech-titan-travel-app",
      },
      {
        title: "ReadMe Generator",
        image: "https://www.istockphoto.com/photo/man-reading-the-bible-gm1456438531-491472344?searchscope=image%2Cfilm", 
        deployedUrl: "https://project2.com",
        githubUrl: "https://github.com/AOF-O5-1/AppOverviewTemplate",
      },
      {
        title: "Employee Database SQL",
        image: "React Portfolio\src\images\database.jpg", 
        deployedUrl: "https://project3.com",
        githubUrl: "https://github.com/AOF-O5-1/Employee-Database",
      },
      {
        title: "Aspire: Career Aptitude Explorer",
        image: "React Portfolio\src\images\aspire.jpg", 
        deployedUrl: "https://career-aptitude-explorer-api.onrender.com/",
        githubUrl: "https://github.com/MadamLoki/career-aptitude-explorer",
      }
    ];
  
    return (
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-items">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <h3>{project.title}</h3>
              <div className="portfolio-links">
                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View App </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">   GitHub Repo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PortfolioSection;
