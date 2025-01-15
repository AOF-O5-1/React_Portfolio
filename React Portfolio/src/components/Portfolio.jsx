import React from 'react';

const PortfolioSection = () => {
    const projects = [
      {
        title: "Project 1",
        image: "path_to_image_1.jpg", 
        deployedUrl: "https://project1.com",
        githubUrl: "https://github.com/yourusername/project1",
      },
      {
        title: "Project 2",
        image: "path_to_image_2.jpg", 
        deployedUrl: "https://project2.com",
        githubUrl: "https://github.com/yourusername/project2",
      },
      {
        title: "Project 3",
        image: "path_to_image_3.jpg", 
        deployedUrl: "https://project3.com",
        githubUrl: "https://github.com/yourusername/project3",
      },
      {
        title: "Project 4",
        image: "path_to_image_4.jpg", 
        deployedUrl: "https://project4.com",
        githubUrl: "https://github.com/yourusername/project4",
      },
      {
        title: "Project 5",
        image: "path_to_image_5.jpg", 
        deployedUrl: "https://project5.com",
        githubUrl: "https://github.com/yourusername/project5",
      },
      {
        title: "Project 6",
        image: "path_to_image_6.jpg", 
        deployedUrl: "https://project6.com",
        githubUrl: "https://github.com/yourusername/project6",
      },
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
                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View App</a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PortfolioSection;
