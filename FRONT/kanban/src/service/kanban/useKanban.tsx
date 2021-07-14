import { useState, useCallback } from "react";
import { iCard, iList } from "../../types";

import Kanban from ".";

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
}

export default function useKanban() {
  const [lists, setLists] = useState<iList[]>([
    { name: "To do", key: "ToDo", cards: [] },
    { name: "Doing", key: "Doing", cards: [] },
    { name: "Done", key: "Done", cards: [] },
  ]);

  const updateLists = useCallback((cards: iCard[]) => {
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
  }, []);

  const loadCards = useCallback(async () => {
    try {
      const data = await Kanban.getCards();
      updateLists(data);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const clearLists = () => {
    setLists([
      { name: "To do", key: "ToDo", cards: [] },
      { name: "Doing", key: "Doing", cards: [] },
      { name: "Done", key: "Done", cards: [] },
    ]);
  };

  const createCard = useCallback(
    async ({ titulo, lista, conteudo }: CreateCardProps): Promise<void> => {
      try {
        await Kanban.createCard({ titulo, lista, conteudo });
        loadCards();
      } catch (error) {
        throw new Error(error);
      }
    },
    []
  );

  const updateCard = useCallback(
    async ({ id, titulo, conteudo, lista }: UpdateCardProps): Promise<void> => {
      try {
        await Kanban.updateCard({
          id,
          titulo,
          conteudo,
          lista,
        });
        loadCards();
      } catch (error) {
        throw new Error(error);
      }
    },
    []
  );

  const deleteCard = useCallback(
    async ({ id }: DeleteCardProps): Promise<void> => {
      try {
        const data = await Kanban.deleteCard({
          id,
        });
        updateLists(data);
      } catch (error) {
        throw new Error(error);
      }
    },
    []
  );
  return { loadCards, createCard, updateCard, deleteCard, lists, clearLists };
}
