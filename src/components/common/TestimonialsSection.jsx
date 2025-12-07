import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TestimonialsSection = ({ testimonials = [], floatingImages = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="testimonials-section">
      {/* Floating Images */}
      <div className="floating-images">
        {floatingImages.map((img, index) => (
          <div
            key={index}
            className={`floating-avatar floating-avatar-${index + 1}`}
            style={{ backgroundColor: img.bgColor }}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Quote Content */}
      <div className="testimonial-content" data-aos="fade-up">
      <div className="quote-icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7H7C5.89543 7 5 7.89543 5 9V13C5 14.1046 5.89543 15 7 15H9C9 16.6569 7.65685 18 6 18V20C8.76142 20 11 17.7614 11 15V7Z" fill="none" stroke="#6c7fee" strokeWidth="1"/>
            <path d="M19 7H15C13.8954 7 13 7.89543 13 9V13C13 14.1046 13.8954 15 15 15H17C17 16.6569 15.6569 18 14 18V20C16.7614 20 19 17.7614 19 15V7Z" fill="none" stroke="#6c7fee" strokeWidth="1"/>
          </svg>
        </div>

        {currentTestimonial && (
          <>
            <p className="testimonial-text">{currentTestimonial.text}</p>

            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={currentTestimonial.avatar} alt={currentTestimonial.name} />
              </div>
              <div className="author-info">
                <h4 className="author-name">{currentTestimonial.name}</h4>
                <span className="author-role">{currentTestimonial.role}</span>
              </div>
            </div>
          </>
        )}

        {/* Pagination Dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

TestimonialsSection.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired
    })
  ),
  floatingImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      bgColor: PropTypes.string
    })
  )
};

export default TestimonialsSection;
