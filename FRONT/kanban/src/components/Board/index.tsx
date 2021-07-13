/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

import { iCard, iList } from "../../types";
import Button from "../Button";

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
      <Button
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
      <S.Container>
        {lists.map((list: iList) => {
          return (
            <List
              key={list.key}
              list={list}
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
