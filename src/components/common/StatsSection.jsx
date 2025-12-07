import PropTypes from 'prop-types';

const StatsSection = ({ stats = [] }) => {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <span className="stat-number">{stat.number}</span>
            <div className="stat-text">
              <span className="stat-label-line1">{stat.label1}</span>
              <span className="stat-label-line2">{stat.label2}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

StatsSection.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      label1: PropTypes.string.isRequired,
      label2: PropTypes.string.isRequired
    })
  )
};

export default StatsSection;
