import {
  iCard,
  iList,
  CreateCardParams,
  UpdateCardParams,
  DeleteCardParams,
} from "../../model/Kanban";

export interface onDropCardParams {
  id: string;
  origin: string;
  destination: string;
}

export interface BoardProps {
  lists: iList[];
  onCreateCard: ({ titulo, lista, conteudo }: CreateCardParams) => void;
  onUpdateCard: ({ id, titulo, conteudo, lista }: UpdateCardParams) => void;
  onDeleteCard: ({ id, titulo }: DeleteCardParams) => void;
  onDropCard: ({ id, origin, destination }: onDropCardParams) => void;
}

export interface ListProps {
  list: iList;
  onUpdateCard: ({ id, titulo, conteudo, lista }: UpdateCardParams) => void;
  onDeleteCard: ({ id, titulo }: DeleteCardParams) => void;
  onDropCard: ({ id, origin, destination }: onDropCardParams) => void;
}

export interface CardProps {
  card: iCard;
  onUpdateCard: ({ id, titulo, conteudo, lista }: UpdateCardParams) => void;
  onDeleteCard: ({ id, titulo }: DeleteCardParams) => void;
  onDropCard: ({ id, origin, destination }: onDropCardParams) => void;
}
