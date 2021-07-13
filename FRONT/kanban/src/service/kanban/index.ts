import { AxiosResponse } from "axios";
import APICLient from "../APIClient";

import { iCard } from "../../types";

interface CreateCardProps {
  titulo: string;
  conteudo: string;
  lista: string;
}

interface DeleteCardProps {
  id: string;
}

export default class Kanban {
  static async getCards(): Promise<iCard[]> {
    try {
      const { data }: AxiosResponse = await APICLient.get("/cards");
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async createCard({
    titulo,
    conteudo,
    lista,
  }: CreateCardProps): Promise<iCard> {
    try {
      const { data }: AxiosResponse = await APICLient.post("/cards", {
        titulo,
        conteudo,
        lista,
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateCard({
    id,
    titulo,
    conteudo,
    lista,
  }: iCard): Promise<iCard> {
    try {
      const { data }: AxiosResponse = await APICLient.put(`/cards/${id}`, {
        id,
        titulo,
        conteudo,
        lista,
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteCard({ id }: DeleteCardProps): Promise<iCard[]> {
    try {
      const { data }: AxiosResponse = await APICLient.delete(`/cards/${id}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
