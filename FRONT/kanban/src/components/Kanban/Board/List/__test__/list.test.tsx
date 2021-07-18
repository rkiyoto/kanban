import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../../../utils/tests/helper";

import List from "..";

const props = {
  key: "Doing",
  list: {
    name: "Doing",
    key: "Doing",
    cards: [
      {
        id: "98519f23-3484-40cf-a085-b1f740c6a198",
        titulo: "Card 1",
        conteudo: "Card 1 description",
        lista: "Doing",
      },
      {
        id: "da5a0879-d596-4be4-a7aa-7cac80f85900",
        titulo: "Card 2",
        conteudo: "Card 2 description",
        lista: "Doing",
      },
      {
        id: "ab1e8ab6-e8eb-4c15-a804-d4e1e7c36c13",
        titulo: "Card 3",
        conteudo: "Card 3 description",
        lista: "Doing",
      },
    ],
  },
  onUpdateCard: jest.fn(),
  onDeleteCard: jest.fn(),
  onDropCard: jest.fn(),
};

describe("<List />", () => {
  it("should display list container", () => {
    renderWithProviders(<List {...props} />);

    expect(
      screen.getByRole("heading", {
        name: /doing/i,
      })
    ).toBeInTheDocument();
  });

  it("should all cards", () => {
    renderWithProviders(<List {...props} />);

    expect(
      screen.getByRole("heading", {
        name: /doing/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByTestId("card-container")).toHaveLength(3);
  });
});
