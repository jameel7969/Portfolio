import { Card as BSCard } from 'react-bootstrap';

const Card = ({ title, text, image, children }) => {
  return (
    <BSCard className="h-100">
      {image && <BSCard.Img variant="top" src={image} />}
      <BSCard.Body>
        {title && <BSCard.Title>{title}</BSCard.Title>}
        {text && <BSCard.Text>{text}</BSCard.Text>}
        {children}
      </BSCard.Body>
    </BSCard>
  );
};

export default Card;
