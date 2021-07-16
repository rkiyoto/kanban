import { AxiosResponse } from "axios";
import APICLient from "../APIClient";

import { iCard, CreateCardParams } from "../../model/Kanban";
interface DeleteCardParam {
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
  }: CreateCardParams): Promise<iCard> {
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

  static async deleteCard({ id }: DeleteCardParam): Promise<iCard[]> {
    try {
      const { data }: AxiosResponse = await APICLient.delete(`/cards/${id}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
