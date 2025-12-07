import PropTypes from 'prop-types';

const HeroSection = ({ titleLines = [], subtitle, video }) => {
  const renderTitle = () => {
    if (!titleLines || titleLines.length === 0) return null;

    return (
      <h1 className="hero-title">
        {titleLines.map((line, lineIndex) => (
          <div key={lineIndex} className="hero-title-line">
            {line.map((item, itemIndex) => {
              if (item.type === 'text') {
                return (
                  <span
                    key={itemIndex}
                    className={item.highlight ? 'text-highlight' : 'text-normal'}
                  >
                    {item.content}{' '}
                  </span>
                );
              } else if (item.type === 'image') {
                return (
                  <img
                    key={itemIndex}
                    src={item.src}
                    alt={item.alt || ''}
                    className="inline-image"
                    style={{
                      width: item.width,
                      height: item.height,
                      borderRadius: item.borderRadius
                    }}
                  />
                );
              }
              return null;
            })}
          </div>
        ))}
      </h1>
    );
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-up">
        {renderTitle()}
        {/* {subtitle && <p className="hero-subtitle">{subtitle}</p>} */}
      </div>
      {video && (
        <div className="hero-video-container" data-aos="fade-up" data-aos-delay="200">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
        </div>
      )}
    </section>
  );
};

HeroSection.propTypes = {
  titleLines: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(['text', 'image']).isRequired,
        content: PropTypes.string,
        highlight: PropTypes.bool,
        src: PropTypes.string,
        alt: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
        borderRadius: PropTypes.string
      })
    )
  ),
  subtitle: PropTypes.string,
  video: PropTypes.string
};

export default HeroSection;
