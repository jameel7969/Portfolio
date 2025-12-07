import { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({
  logo = 'flixta',
  logoText = '',
  logoColor = '#fff',
  links = [],
  ctaText = "Let's Talk",
  ctaVariant = 'primary',
  bgColor = 'transparent',
  navLinkColor = '#fff',
  className = ''
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at top of page
      setIsAtTop(currentScrollY < 50);

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e, path) => {
    e.preventDefault();

    // If not on home page, navigate to home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <BSNavbar
      expand="lg"
      className={`py-4 ${className} ${!isAtTop ? 'navbar-scrolled' : ''}`}
      style={{
        backgroundColor: 'rgba(30, 35, 45, 0.85)',
        backdropFilter: 'blur(60px)',
        WebkitBackdropFilter: 'blur(60px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease'
      }}
    >
      <Container>
        <BSNavbar.Brand href="#hero" onClick={(e) => handleNavClick(e, '#hero')} style={{ fontSize: '1.8rem', fontWeight: 'bold', textDecoration: 'none' }}>
          {logoText ? (
            <span style={{ color: logoColor }}>
              <span style={{ color: '#5777FF' }}>J</span>H<span style={{ color: '#5777FF' }}>.</span>
            </span>
          ) : (
            <img src={logo} alt="" style={{width:'100%', height:'25px'}} />
          )}
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{fontSize:'1.2rem', fontWeight:'bold', letterSpacing:'1.2px'}}>
            {links.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                style={{ color: navLinkColor }}
                className="mx-2"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
  logoText: PropTypes.string,
  logoColor: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })),
  ctaText: PropTypes.string,
  ctaVariant: PropTypes.string,
  bgColor: PropTypes.string,
  navLinkColor: PropTypes.string,
  className: PropTypes.string
};

export default Navbar;
