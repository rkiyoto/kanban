import React, { ButtonHTMLAttributes } from "react";

import * as S from "./Button.styled";

export type ButtonBaseProps = {
  size?: number;
};

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, size, ...props }: ButtonProps) => {
  return (
    <S.Button {...props} size={size}>
      {children}
    </S.Button>
  );
};

export default Button;
