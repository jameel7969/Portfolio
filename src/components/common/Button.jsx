import { Button as BSButton } from 'react-bootstrap';

const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <BSButton variant={variant} {...props}>
      {children}
    </BSButton>
  );
};

export default Button;
