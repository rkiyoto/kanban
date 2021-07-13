import React, { ButtonHTMLAttributes } from "react";

import Loader from "./loader";
import * as S from "./Button.styled";

type ButtonBaseProps = {
  loading?: boolean;
  size?: number;
};

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ loading, children, size, ...props }: ButtonProps) => {
  const content = loading ? <Loader /> : children;
  return (
    <S.Button {...props} disabled={loading} size={size}>
      {content}
    </S.Button>
  );
};

export default Button;
