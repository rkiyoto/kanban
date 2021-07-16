import React, { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CreateCardParams,
  DeleteCardParams,
  UpdateCardParams,
} from "../../model/Kanban";

import { onDropCardParams } from "./types";
import useAuth from "../../service/auth/useAuth";
import useKanban from "../../service/kanban/useKanban";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Board";

import * as S from "./Kanban.styled";

const Kanban = () => {
  const { login, logout, isLogged } = useAuth();
  const { loadCards, createCard, updateCard, deleteCard, lists } = useKanban();

  useEffect(() => {
    if (isLogged) {
      loadCards();
    }
  }, [isLogged]);

  const onCreateCard = ({ titulo, conteudo, lista }: CreateCardParams) => {
    createCard({ titulo, conteudo, lista });
  };

  const onUpdateCard = ({ id, titulo, conteudo, lista }: UpdateCardParams) => {
    console.log(
      "🚀 ~ file: index.tsx ~ line 37 ~ onUpdateCard ~ id, titulo, conteudo, lista",
      id,
      titulo,
      conteudo,
      lista
    );
    updateCard({ id, titulo, conteudo, lista });
  };

  const onDropCard = ({ id, origin, destination }: onDropCardParams) => {
    console.log("🚀 ~ file:", lists[0]?.cards[0]?.titulo);
    const originList = lists.find((list) => list.key === origin);
    console.log(
      "🚀 ~ file: index.tsx ~ line 55 ~ onDropCard ~ originList",
      originList?.cards[0].titulo
    );
    if (originList) {
      const droppedCard = originList.cards.find((card) => card.id === id);
      console.log(
        "🚀 ~ file: index.tsx ~ line 58 ~ onDropCard ~ droppedCard",
        droppedCard
      );
      if (droppedCard) {
        updateCard({
          ...droppedCard,
          lista: destination,
        });
      }
    }
  };

  const onDeleteCard = ({ id, titulo }: DeleteCardParams) => {
    deleteCard({ id, titulo });
  };

  const handleLogout = () => {
    if (window.confirm("Deseja encerrar a sessão?")) {
      logout();
    }
  };

  const renderHeaderButton = () => {
    if (isLogged) {
      return <S.HeaderButton onClick={handleLogout}>Logout</S.HeaderButton>;
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
        Log in
      </S.HeaderButton>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <S.Header>
        <S.Title>Kanban</S.Title>
        {renderHeaderButton()}
      </S.Header>
      <S.Container>
        {isLogged ? (
          <Board
            lists={lists}
            onCreateCard={onCreateCard}
            onUpdateCard={onUpdateCard}
            onDeleteCard={onDeleteCard}
            onDropCard={onDropCard}
          />
        ) : (
          <S.LoginWarning>
            <i className="fi-rr-lock" style={{ fontSize: 64 }}></i>
            <h1>Você não está autenticado(a)</h1>
            <h2>Autentique-se clicando no botão Log in na barra superior</h2>
          </S.LoginWarning>
        )}
      </S.Container>
      <ToastContainer style={{ width: 400 }} />
    </DndProvider>
  );
};

export default Kanban;
