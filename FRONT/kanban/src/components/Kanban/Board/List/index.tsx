/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useDrop } from "react-dnd";
import { DRAG_TYPES } from "../../../../utils/constants";
import { iCard } from "../../../../model/Kanban";
import { ListProps } from "../../types";
import Card from "../Card";

import * as S from "./List.styled";

const List = ({
  list: { name, key, cards },
  onUpdateCard,
  onDeleteCard,
  onDropCard,
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
            onDropCard={onDropCard}
          />
        ))}
      </S.List>
    </S.Container>
  );
};

export default List;
