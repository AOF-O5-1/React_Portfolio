import React from 'react';

const PortfolioSection = () => {
    const projects = [
      {
        title: "JourneySync",
        imagePath: () => import('..\assets\images\JourneySync.jpg').then(m => m.default),
        deployedUrl: "https://project1.com",
        githubUrl: "https://github.com/MadamLoki/tech-titan-travel-app",
      },
      {
        title: "ReadMe Generator",
        imagePath: () => import('../assets/images/readMe.jpg').then(m => m.default),
        deployedUrl: "https://project2.com",
        githubUrl: "https://github.com/AOF-O5-1/AppOverviewTemplate",
      },
      {
        title: "Employee Database SQL",
        imagePath: () => import('..\assets\images\Employee Database.jpg').then(m => m.default),
        deployedUrl: "https://project3.com",
        githubUrl: "https://github.com/AOF-O5-1/Employee-Database",
      },
      {
        title: "Aspire: Career Aptitude Explorer",
        image: "..\assets\images\career.jpg", 
        deployedUrl: "https://career-aptitude-explorer-api.onrender.com/",
        githubUrl: "https://github.com/MadamLoki/career-aptitude-explorer",
      }
    ];
  
    useEffect(() => {
      const loadImages = async () => {
        const imagePromises = projects.map(async (project) => {
          try {
            const imageSrc = await project.imagePath();
            return { title: project.title, src: imageSrc };
          } catch (error) {
            console.error(`Failed to load image for ${project.title}:`, error);
            return { title: project.title, src: null };
          }
        });
  
        const loadedResults = await Promise.all(imagePromises);
        const imageMap = {};
        loadedResults.forEach(({ title, src }) => {
          imageMap[title] = src;
        });
        setLoadedImages(imageMap);
      };
  
      loadImages();
    }, []);
  
    return (
      <section id="portfolio" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                {loadedImages[project.title] ? (
                  <img
                    src={loadedImages[project.title]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
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
                    View App
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    GitHub Repo
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