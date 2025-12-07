import PropTypes from 'prop-types';

const ExperienceSection = ({ experienceTitle, educationTitle, experiences = [], education = [] }) => {
  return (
    <section id="experience" className="experience-section">
      {/* Titles Row */}
      <div className="experience-titles" data-aos="fade-up">
        <h2 className="section-title">{experienceTitle}</h2>
        <h2 className="section-title">{educationTitle}</h2>
      </div>

      {/* Content Container */}
      <div className="experience-container">
        {/* Work Experience Column */}
        <div className="experience-column" data-aos="fade-right">
          <div className="timeline">
            {experiences.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-left">
                  <h4 className="timeline-role">{item.role}</h4>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <div className="timeline-dot"></div>
                <div className="timeline-right">
                  <h4 className="timeline-company">{item.company}</h4>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>

        {/* Education Column */}
        <div className="experience-column" data-aos="fade-left">
          <div className="timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-left">
                  <h4 className="timeline-role">{item.course}</h4>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <div className="timeline-dot"></div>
                <div className="timeline-right">
                  <h4 className="timeline-company">{item.institution}</h4>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

ExperienceSection.propTypes = {
  experienceTitle: PropTypes.string.isRequired,
  educationTitle: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired
    })
  ),
  education: PropTypes.arrayOf(
    PropTypes.shape({
      course: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired
    })
  )
};

export default ExperienceSection;
