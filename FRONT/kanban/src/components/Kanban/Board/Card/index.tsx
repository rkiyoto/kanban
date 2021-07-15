/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { iCard } from "../../../../types";
import { DRAG_TYPES } from "../../../../utils/constants";
import { useDrag } from "react-dnd";

import Button from "../../../Button";

import * as S from "./Card.styled";
interface CardProps {
  card: iCard;
  onUpdateCard: ({ id, titulo, conteudo, lista }: UpdateCardProps) => void;
  onDeleteCard: ({ id, titulo }: DeleteCardProps) => void;
}

interface UpdateCardProps {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

interface DeleteCardProps {
  id: string;
  titulo: string;
}

interface DropResult {
  key: string;
}

type EditionFormInputs = {
  title: string;
  content: string;
};

const Card = ({
  card: { id, titulo, conteudo, lista },
  onUpdateCard,
  onDeleteCard,
}: CardProps) => {
  console.log("🚀 ~ file: index.tsx ~ line 43 ~ titulo", titulo);
  const { register, handleSubmit, reset } = useForm<EditionFormInputs>({
    defaultValues: {
      title: titulo,
      content: conteudo,
    },
  });
  const [isEditing, setIsEditing] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DRAG_TYPES.CARD,
    item: { id, titulo, conteudo },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        onUpdateCard({ id, titulo, conteudo, lista: dropResult.key });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const moveCardByButton = (direction: "forward" | "backward") => {
    switch (lista) {
      case "ToDo":
        if (direction === "forward") {
          onUpdateCard({ id, titulo, conteudo, lista: "Doing" });
        }
        break;
      case "Doing":
        onUpdateCard({
          id,
          titulo,
          conteudo,
          lista: direction === "forward" ? "Done" : "ToDo",
        });
        break;
      case "Done":
        if (direction === "backward") {
          onUpdateCard({ id, titulo, conteudo, lista: "Doing" });
        }
        break;
      default:
        return;
    }
  };

  const handleDeleteButton = () => {
    if (
      window.confirm(
        `Você tem certeza que deseja excluir o cartão "${titulo}"?`
      )
    ) {
      onDeleteCard({ id, titulo });
    }
  };

  const handleEditionConfirm: SubmitHandler<EditionFormInputs> = (data) => {
    onUpdateCard({
      id,
      lista,
      titulo: data.title,
      conteudo: data.content,
    });
    setIsEditing(false);
  };

  const handleEditionCancel = () => {
    reset();
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form
        onSubmit={handleSubmit(handleEditionConfirm)}
        onReset={handleEditionCancel}
      >
        <S.Container>
          <S.Header>
            <S.Title>
              <input {...register("title")} />
            </S.Title>
          </S.Header>
          <S.Body>
            <S.Description>
              <textarea {...register("content")} />
            </S.Description>
          </S.Body>
          <S.Footer isEditing>
            <Button type="reset" onClick={() => setIsEditing(false)}>
              <i className="fi-rr-cross"></i>
            </Button>
            <Button type="submit">
              <i className="fi-rr-check"></i>
            </Button>
          </S.Footer>
        </S.Container>
      </form>
    );
  }

  return (
    <S.Container ref={drag} isDragging={isDragging}>
      <S.Header>
        <S.Title>{titulo}</S.Title>
        <div>
          <Button onClick={() => setIsEditing(true)}>
            <i className="fi-rr-pencil"></i>
          </Button>
          <Button onClick={handleDeleteButton}>
            <i className="fi-rr-cross"></i>
          </Button>
        </div>
      </S.Header>
      <S.Body>
        <S.Description>{conteudo}</S.Description>
      </S.Body>
      <S.Footer>
        {lista !== "ToDo" ? (
          <Button onClick={() => moveCardByButton("backward")}>
            <i className="fi-rr-angle-double-small-left"></i>
          </Button>
        ) : (
          <div />
        )}
        {lista !== "Done" ? (
          <Button onClick={() => moveCardByButton("forward")}>
            <i className="fi-rr-angle-double-small-right"></i>
          </Button>
        ) : (
          <div />
        )}
      </S.Footer>
    </S.Container>
  );
};

export default Card;
