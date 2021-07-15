import React from "react";
import Button from "../Button";
import * as S from "./Modal.styled";

type ModalProps = {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
  title: string;
};

const Modal = ({
  open,
  children,
  close,
  title,
}: ModalProps): JSX.Element | null => {
  if (open) {
    return (
      <S.ModalBackground>
        <S.ModalContent data-testid="modal-content">
          <S.Header>
            <h2>{title}</h2>
            <Button onClick={close}>
              <i className="fi-rr-cross"></i>
            </Button>
          </S.Header>
          {children}
        </S.ModalContent>
      </S.ModalBackground>
    );
  }
  return null;
};

export default Modal;
