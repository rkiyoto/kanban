import React, { useEffect } from "react";
import Board from "../Board";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import useAuth from "../../service/auth/useAuth";
import useKanban from "../../service/kanban/useKanban";
import * as S from "./Kanban.styled";

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

const Kanban = () => {
  const { login } = useAuth();
  const { loadCards, createCard, updateCard, deleteCard, lists } = useKanban();

  useEffect(() => {
    login({
      username: "letscode",
      password: "lets@123",
    });
  }, []);

  useEffect(() => {
    loadCards();
  }, []);

  const onCreateCard = ({ titulo, conteudo, lista }: CreateCardProps) => {
    createCard({ titulo, conteudo, lista });
  };

  const onUpdateCard = ({ id, titulo, conteudo, lista }: UpdateCardProps) => {
    updateCard({ id, titulo, conteudo, lista });
  };

  const onDeleteCard = (id: string) => {
    deleteCard({ id });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <S.Container>
        <Board
          lists={lists}
          onCreateCard={onCreateCard}
          onUpdateCard={onUpdateCard}
          onDeleteCard={onDeleteCard}
        />
      </S.Container>
    </DndProvider>
  );
};

export default Kanban;
