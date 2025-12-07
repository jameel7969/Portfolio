import PropTypes from 'prop-types';

const SkillsSection = ({ title, subtitle, skills = [] }) => {
  return (
    <section className="skills-section">
      <div className="skills-header" data-aos="fade-up">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default SkillsSection;
