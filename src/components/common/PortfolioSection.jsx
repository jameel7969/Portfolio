import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PortfolioSection = ({ title, subtitle, projects = [] }) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header" data-aos="fade-up">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>

      <div className="portfolio-grid" data-aos="fade-up" onMouseLeave={() => setActiveCard(null)}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`portfolio-card ${index % 2 === 1 ? 'tall' : 'short'} ${activeCard === index ? 'expanded' : ''} ${activeCard !== null && activeCard !== index ? 'shrunk' : ''}`}
            onMouseEnter={() => setActiveCard(index)}
          >
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-overlay">
              <span className="portfolio-category">{project.category}</span>
              <h3 className="portfolio-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-cta" data-aos="fade-up">
        <Link to="/projects" className="view-all-btn">
          View All Projects
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
};

PortfolioSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

export default PortfolioSection;
