import React, { useState } from "react";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "JourneySync",
      image: "/images/JourneySync.jpg",
      deployedUrl: "https://project1.com",
      githubUrl: "https://github.com/MadamLoki/tech-titan-travel-app",
    },
    {
      id: 2,
      title: "ReadMe Generator",
      image: "/images/readMe.jpg",
      deployedUrl: "https://project2.com",
      githubUrl: "https://github.com/AOF-O5-1/AppOverviewTemplate",
    },
    {
      id: 3,
      title: "Employee Database SQL",
      image: "/images/EmployeeDatabase.jpg",
      deployedUrl: "https://project3.com",
      githubUrl: "https://github.com/AOF-O5-1/Employee-Database",
    },
    {
      id: 4,
      title: "Aspire: Career Aptitude Explorer",
      image: "/images/career.jpg",
      deployedUrl: "https://career-aptitude-explorer-api.onrender.com/",
      githubUrl: "https://github.com/MadamLoki/career-aptitude-explorer",
    },
  ];

  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (title) => {
    setLoadedImages((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <section id="portfolio" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48 bg-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(project.title)}
                onError={(e) => (e.target.src = "/images/fallback.jpg")}
                loading="lazy"
              />
              {!loadedImages[project.title] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse bg-gray-300 w-full h-full"></div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex justify-between gap-4">
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  |View App|  |
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  GitHub Repo|
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
