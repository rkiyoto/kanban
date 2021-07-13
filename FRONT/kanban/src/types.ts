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
