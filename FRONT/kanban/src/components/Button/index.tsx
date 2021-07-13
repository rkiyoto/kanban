import React, { ButtonHTMLAttributes } from "react";

import Loader from "./loader";
import * as S from "./Button.styled";

type ButtonBaseProps = {
  loading?: boolean;
};

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ loading, children, ...props }: ButtonProps) => {
  const content = loading ? <Loader /> : children;
  return (
    <S.Button {...props} disabled={loading}>
      {content}
    </S.Button>
  );
};

export default Button;
