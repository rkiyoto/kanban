/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import NewCardModal from "./NewCardModal";
import Button from "../../Button";

import { iList } from "../../../types";

import List from "./List";

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

interface DeleteCardProps {
  id: string;
  titulo: string;
}

interface BoardProps {
  lists: iList[];
  onCreateCard: ({ titulo, lista, conteudo }: CreateCardProps) => void;
  onUpdateCard: ({ id, titulo, conteudo, lista }: UpdateCardProps) => void;
  onDeleteCard: ({ id, titulo }: DeleteCardProps) => void;
}

const Board = ({
  lists = [],
  onCreateCard,
  onUpdateCard,
  onDeleteCard,
}: BoardProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
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
        <S.FloatingButtonContainer>
          <Button
            title="Criar uma tarefa"
            size={32}
            onClick={() => setOpenModal(true)}
          >
            <i className="fi-rr-add"></i>
          </Button>
        </S.FloatingButtonContainer>
      </S.Container>
      <NewCardModal
        open={openModal}
        close={() => setOpenModal(false)}
        onCreateCard={onCreateCard}
      />
    </>
  );
};

export default Board;
