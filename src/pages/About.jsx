import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/common/Card';

const About = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={12}>
          <h1 className="mb-4">About Us</h1>
          <p className="lead">
            Learn more about our mission and what we do.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <Card
            title="Our Mission"
            text="Building amazing web experiences with modern technologies."
          />
        </Col>
        <Col md={4} className="mb-4">
          <Card
            title="Our Vision"
            text="Creating innovative solutions for tomorrow's challenges."
          />
        </Col>
        <Col md={4} className="mb-4">
          <Card
            title="Our Values"
            text="Quality, integrity, and excellence in everything we do."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
