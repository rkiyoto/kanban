/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useDrop } from "react-dnd";
import { iCard, iList } from "../../types";
import { DRAG_TYPES } from "../../utils/constants";
import Button from "../Button";
import Card from "../Card";

import * as S from "./List.styled";

interface CreateCardProps {
  titulo: string;
  conteudo: string;
  lista: string;
}

interface ListProps {
  list: iList;
  onCreateCard: ({ titulo, lista, conteudo }: CreateCardProps) => void;
  onUpdateCard: ({ id, titulo, conteudo, lista }: UpdateCardProps) => void;
  onDeleteCard: (id: string) => void;
}

interface UpdateCardProps {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

const List = ({
  list: { name, key, cards },
  onCreateCard,
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
        {key === "ToDo" && (
          <S.Footer>
            <Button
              title="Criar uma tarefa"
              size={32}
              onClick={() =>
                onCreateCard({
                  titulo: "Titulo",
                  conteudo: "conteudo do card conteudo do card ",
                  lista: "ToDo",
                })
              }
            >
              <i className="fi-rr-add"></i>
            </Button>
          </S.Footer>
        )}
      </S.List>
    </S.Container>
  );
};

export default List;
