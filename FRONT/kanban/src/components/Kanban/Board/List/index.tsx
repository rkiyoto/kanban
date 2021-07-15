/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useDrop } from "react-dnd";
import { iCard, iList } from "../../../../types";
import { DRAG_TYPES } from "../../../../utils/constants";
import Card from "../Card";

import * as S from "./List.styled";

interface ListProps {
  list: iList;
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

const List = ({
  list: { name, key, cards },
  onUpdateCard,
  onDeleteCard,
}: ListProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DRAG_TYPES.CARD,
    drop: () => ({ key }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <S.Container ref={drop}>
      <S.Title>{name}</S.Title>
      <S.List isOver={isOver}>
        {cards.map((card: iCard) => (
          <Card
            key={card.id}
            card={card}
            onUpdateCard={onUpdateCard}
            onDeleteCard={onDeleteCard}
          />
        ))}
      </S.List>
    </S.Container>
  );
};

export default List;
