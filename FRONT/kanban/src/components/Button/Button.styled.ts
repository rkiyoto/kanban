import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonBaseProps = {
  loading?: boolean;
  size?: number;
};

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 4px;
  margin: 0 8px;
  border-width: 0;
  padding: 4px;
  color: #033736;
  background-color: transparent;
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  :hover {
    opacity: 0.5;
  }
  :disabled {
    opacity: 0.5;
  }
`;

export { Button };
