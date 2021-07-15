import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "../../../Modal";
import Button from "../../../Button";

import * as S from "./NewCardModal.styled";

interface CreateCardProps {
  titulo: string;
  conteudo: string;
  lista: string;
}

interface NewCardModalProps {
  open: boolean;
  close: () => void;
  onCreateCard: ({ titulo, lista, conteudo }: CreateCardProps) => void;
}

interface NewCardInput {
  title: string;
  content: string;
}

const NewCardModal = ({ open, close, onCreateCard }: NewCardModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewCardInput>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const handleCreationConfirm: SubmitHandler<NewCardInput> = (data) => {
    onCreateCard({
      lista: "ToDo",
      titulo: data.title,
      conteudo: data.content,
    });
    reset();
    close();
  };

  const handleClose = () => {
    reset();
    close();
  };

  return (
    <Modal title="Novo card" open={open} close={handleClose}>
      <S.NewCardForm onSubmit={handleSubmit(handleCreationConfirm)}>
        <input
          placeholder="Título"
          {...register("title", {
            required: {
              value: true,
              message: "Campo obrigatório",
            },
          })}
        />
        {errors.title && (
          <S.MessageError>{errors.title.message}</S.MessageError>
        )}
        <textarea
          placeholder="Conteúdo"
          {...register("content", {
            required: {
              value: true,
              message: "Campo obrigatório",
            },
          })}
        />
        {errors.content && (
          <S.MessageError>{errors.content.message}</S.MessageError>
        )}
        <Button type="submit">
          <i className="fi-rr-check"></i>
        </Button>
      </S.NewCardForm>
    </Modal>
  );
};

export default NewCardModal;
