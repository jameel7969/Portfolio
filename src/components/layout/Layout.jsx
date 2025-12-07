import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../common/Footer';

const Layout = () => {
  const navLinks = [
    { label: 'Home', path: '#hero' },
    { label: 'About', path: '#experience' },
    { label: 'Services', path: '#services' },
    { label: 'Portfolio', path: '#portfolio' },
    { label: 'Contact', path: '#contact' }
  ];

  const footerLogo = {
    type: 'text',
    text: 'HS'
  };

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        logoText="HS."
        links={navLinks}
        ctaText="Let's Talk"
        ctaVariant="primary"
        bgColor="#1a1f2e"
        navLinkColor="#fff"
      />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer
        logo={footerLogo}
        navLinks={footerLinks}
        copyright="© 2025 Jameel Hameed. All Rights Reserved."
      />
    </div>
  );
};

export default Layout;
