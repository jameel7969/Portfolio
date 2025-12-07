import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const openDrawer = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Function to render paragraph with highlighted headings
  const renderParagraph = (paragraph, index) => {
    const lines = paragraph.split('\n');
    return (
      <p key={index} className="drawer-paragraph">
        {lines.map((line, lineIndex) => {
          // Check if line ends with colon (section heading)
          if (line.trim().endsWith(':')) {
            return (
              <span key={lineIndex}>
                <span className="drawer-section-heading">{line}</span>
                {lineIndex < lines.length - 1 && '\n'}
              </span>
            );
          }
          return (
            <span key={lineIndex}>
              {line}
              {lineIndex < lines.length - 1 && '\n'}
            </span>
          );
        })}
      </p>
    );
  };

  return (
    <section className="projects-page">
      <div className="projects-page-header" data-aos="fade-up">
        <span className="projects-subtitle">
          <span className="chevrons">&gt;&gt;</span> MY WORK
        </span>
        <h1 className="projects-page-title">All Projects</h1>
        <p className="projects-page-description">
          A comprehensive showcase of my work - each project crafted with attention to detail,
          modern technologies, and best practices.
        </p>
      </div>

      <div className="projects-grid" data-aos="fade-up">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.shortDescription || project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    View Project
                  </a>
                )}
                <button className="project-btn secondary" onClick={() => openDrawer(project)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Drawer */}
      <div className={`project-drawer-overlay ${selectedProject ? 'active' : ''}`} onClick={closeDrawer}></div>
      <div className={`project-drawer ${selectedProject ? 'active' : ''}`}>
        {selectedProject && (
          <>
            <div className="drawer-header">
              <h2 className="drawer-title">{selectedProject.title}</h2>
              <button className="drawer-close" onClick={closeDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="drawer-content">
              <div className="drawer-category">
                <span className="chevrons">&gt;&gt;</span> {selectedProject.category}
              </div>
              <div className="drawer-section">
                <h3>About Project</h3>
                {selectedProject.description.split('\n\n').map((paragraph, index) =>
                  renderParagraph(paragraph, index)
                )}
              </div>
              <div className="drawer-section">
                <h3>Technologies Used</h3>
                <div className="drawer-technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                <div className="drawer-actions">
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    View Live Project
                  </a>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
