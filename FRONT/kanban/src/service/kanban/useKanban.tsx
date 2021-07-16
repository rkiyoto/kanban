import { useState } from "react";
import {
  iCard,
  iList,
  CreateCardParams,
  UpdateCardParams,
  DeleteCardParams,
} from "../../model/Kanban";
import { ERROR_TOAST_PROPS, SUCCESS_TOAST_PROPS } from "../../utils/constants";
import { toast } from "react-toastify";

import Kanban from ".";

export default function useKanban() {
  const [lists, setLists] = useState<iList[]>([
    { name: "To do", key: "ToDo", cards: [] },
    { name: "Doing", key: "Doing", cards: [] },
    { name: "Done", key: "Done", cards: [] },
  ]);

  const updateLists = (cards: iCard[]) => {
    const todoTempList: iCard[] = [];
    const doingTempList: iCard[] = [];
    const doneTempList: iCard[] = [];

    cards.forEach((card: iCard) => {
      switch (card.lista) {
        case "ToDo":
          todoTempList.push(card);
          break;
        case "Doing":
          doingTempList.push(card);
          break;
        case "Done":
          doneTempList.push(card);
          break;
        default:
      }
    });

    setLists([
      { name: "To do", key: "ToDo", cards: todoTempList },
      { name: "Doing", key: "Doing", cards: doingTempList },
      { name: "Done", key: "Done", cards: doneTempList },
    ]);
  };

  const loadCards = async () => {
    try {
      const data = await Kanban.getCards();
      updateLists(data);
    } catch (error) {
      toast.error(
        `Oops! Não foi possível carregar seus cards. :(`,
        ERROR_TOAST_PROPS
      );
    }
  };

  const createCard = async ({
    titulo,
    lista,
    conteudo,
  }: CreateCardParams): Promise<void> => {
    try {
      await Kanban.createCard({ titulo, lista, conteudo });
      loadCards();
      toast.success(`${titulo} criado com sucesso! :D`, SUCCESS_TOAST_PROPS);
    } catch (error) {
      toast.error(
        `Oops! Não foi possível criar o card ${titulo}. :(`,
        ERROR_TOAST_PROPS
      );
    }
  };

  const updateCard = async ({
    id,
    titulo,
    conteudo,
    lista,
  }: UpdateCardParams): Promise<void> => {
    try {
      await Kanban.updateCard({
        id,
        titulo,
        conteudo,
        lista,
      });
      loadCards();
      toast.success(
        `${titulo} atualizado com sucesso! :D`,
        SUCCESS_TOAST_PROPS
      );
    } catch (error) {
      toast.error(
        `Oops! Não foi possível atualizar o card ${titulo}. :(`,
        ERROR_TOAST_PROPS
      );
    }
  };

  const deleteCard = async ({
    id,
    titulo,
  }: DeleteCardParams): Promise<void> => {
    try {
      const data = await Kanban.deleteCard({
        id,
      });
      updateLists(data);
      toast.success(`${titulo} excluído com sucesso! :D`, SUCCESS_TOAST_PROPS);
    } catch (error) {
      toast.error(
        `Oops! Não foi possível excluir o card ${titulo}. :(`,
        ERROR_TOAST_PROPS
      );
    }
  };
  return { loadCards, createCard, updateCard, deleteCard, lists };
}
