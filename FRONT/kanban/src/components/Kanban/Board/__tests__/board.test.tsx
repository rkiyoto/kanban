import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../../utils/tests/helper";

import Board from "..";

const lists = [
  { name: "To do", key: "ToDo", cards: [] },
  { name: "Doing", key: "Doing", cards: [] },
  { name: "Done", key: "Done", cards: [] },
];

const props = {
  lists,
  onCreateCard: jest.fn(),
  onUpdateCard: jest.fn(),
  onDeleteCard: jest.fn(),
  onDropCard: jest.fn(),
};

describe("<Board />", () => {
  describe("should display board", () => {
    it("display 'to do', 'doing', 'done' lists", () => {
      renderWithProviders(<Board {...props} />);

      expect(screen.getByTestId("board-component")).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /to do/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /Doing/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /done/i,
        })
      ).toBeInTheDocument();
    });
  });
  describe("Create card button", () => {
    it("display button", () => {
      renderWithProviders(<Board {...props} />);

      expect(
        screen.getByRole("button", {
          name: /criar uma tarefa/i,
        })
      ).toBeInTheDocument();
    });

    it("display creation modal on click", () => {
      renderWithProviders(<Board {...props} />);

      userEvent.click(
        screen.getByRole("button", {
          name: /criar uma tarefa/i,
        })
      );

      expect(
        screen.getByRole("heading", {
          name: /novo card/i,
        })
      ).toBeInTheDocument();
      expect(screen.getByTestId("title-input")).toBeInTheDocument();
      expect(screen.getByTestId("content-textarea")).toBeInTheDocument();
    });
  });
});
