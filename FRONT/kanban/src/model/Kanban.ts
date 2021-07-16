export type iCard = {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
};

export type iList = {
  name: string;
  key: string;
  cards: iCard[];
};

export interface CreateCardParams {
  titulo: string;
  conteudo: string;
  lista: string;
}

export interface UpdateCardParams {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

export interface DeleteCardParams {
  id: string;
  titulo: string;
}
