import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { ButtonBaseProps } from ".";

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 4px;
  margin: 0 8px;
  border-width: 0;
  padding: 4px;
  color: ${({ theme }) => theme.button.color};
  background-color: transparent;
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  :hover {
    opacity: 0.5;
  }
`;

export { Button };
