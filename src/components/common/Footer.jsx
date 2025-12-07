import PropTypes from 'prop-types';

const Footer = ({ logo, navLinks = [], copyright }) => {
  return (
    <footer className="footer">
      <div className="footer-container" data-aos="fade-up">
        <div className="footer-logo">
          {logo.type === 'text' ? (
            <span className="logo-text">
              <span style={{ color: '#5777FF' }}>J</span>H<span style={{ color: '#5777FF' }}>.</span>
            </span>
          ) : (
            <img src={logo.src} alt={logo.alt} />
          )}
        </div>

        <nav className="footer-nav">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-copyright">
          <p>{copyright}</p>
        </div>
      </div>

      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </footer>
  );
};

Footer.propTypes = {
  logo: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
  }).isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ),
  copyright: PropTypes.string.isRequired
};

export default Footer;
