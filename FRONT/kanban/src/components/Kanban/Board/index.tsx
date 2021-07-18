/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import { iList } from "../../../model/Kanban";
import { BoardProps } from "../types";

import NewCardModal from "./NewCardModal";
import Button from "../../Button";
import List from "./List";

import * as S from "./Board.styled";

const Board = ({
  lists = [],
  onCreateCard,
  onUpdateCard,
  onDeleteCard,
  onDropCard,
}: BoardProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <S.Container data-testid="board-component">
        {lists.map((list: iList) => {
          return (
            <List
              key={list.key}
              list={list}
              onUpdateCard={onUpdateCard}
              onDeleteCard={onDeleteCard}
              onDropCard={onDropCard}
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
