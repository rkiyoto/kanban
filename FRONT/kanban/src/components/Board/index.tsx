/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

import { iList } from "../../types";

import List from "../List";

import * as S from "./Board.styled";

interface CreateCardProps {
  titulo: string;
  conteudo: string;
  lista: string;
}

interface UpdateCardProps {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

interface BoardProps {
  lists: iList[];
  onCreateCard: ({ titulo, lista, conteudo }: CreateCardProps) => void;
  onUpdateCard: ({ id, titulo, conteudo, lista }: UpdateCardProps) => void;
  onDeleteCard: (id: string) => void;
}

const Board = ({
  lists = [],
  onCreateCard,
  onUpdateCard,
  onDeleteCard,
}: BoardProps) => {
  return (
    <>
      <S.Container>
        {lists.map((list: iList) => {
          return (
            <List
              key={list.key}
              list={list}
              onCreateCard={onCreateCard}
              onUpdateCard={onUpdateCard}
              onDeleteCard={onDeleteCard}
            />
          );
        })}
      </S.Container>
    </>
  );
};

export default Board;
