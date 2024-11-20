import { ButtonProps } from "./button.interface";
import { StyledButton } from "./button.style";

export const Button:React.FC<ButtonProps> = ({ onClick, children, bgColor, disabled }) => (
  <StyledButton bgColor={bgColor} onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
);
