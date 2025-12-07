import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;



