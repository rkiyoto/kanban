import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Board from "../Board";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import useAuth from "../../service/auth/useAuth";
import useKanban from "../../service/kanban/useKanban";
import * as S from "./Kanban.styled";
import "react-toastify/dist/ReactToastify.css";

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

const Kanban = () => {
  const { login, logout, isLogged } = useAuth();
  const { loadCards, createCard, updateCard, deleteCard, lists } = useKanban();

  useEffect(() => {
    if (isLogged) {
      loadCards();
    }
  }, [isLogged]);

  const onCreateCard = ({ titulo, conteudo, lista }: CreateCardProps) => {
    createCard({ titulo, conteudo, lista });
  };

  const onUpdateCard = ({ id, titulo, conteudo, lista }: UpdateCardProps) => {
    updateCard({ id, titulo, conteudo, lista });
  };

  const onDeleteCard = ({ id, titulo }: DeleteCardProps) => {
    deleteCard({ id, titulo });
  };

  const renderHeaderButton = () => {
    if (isLogged) {
      return <S.HeaderButton onClick={() => logout()}>Logout</S.HeaderButton>;
    }
    return (
      <S.HeaderButton
        onClick={() =>
          login({
            username: "letscode",
            password: "lets@123",
          })
        }
      >
        Login
      </S.HeaderButton>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <S.Container>
        <S.Header>
          <S.Title>Kanban</S.Title>
          {renderHeaderButton()}
        </S.Header>
        {isLogged && (
          <Board
            lists={lists}
            onCreateCard={onCreateCard}
            onUpdateCard={onUpdateCard}
            onDeleteCard={onDeleteCard}
          />
        )}
      </S.Container>
      <ToastContainer style={{ width: 400 }} />
    </DndProvider>
  );
};

export default Kanban;
