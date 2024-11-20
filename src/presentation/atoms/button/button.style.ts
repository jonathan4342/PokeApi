import styled from 'styled-components';
import { ButtonProps } from './button.interface';

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => props.bgColor || 'blue'};
  color: black;
  border-radius: 5px;
  font-family: "Edu AU VIC WA NT Pre";
  font-weight: bold;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  &:hover {
    background-color: ${(props) => (props.bgColor ? 'grey' : '#00509e')};
  }
`;
