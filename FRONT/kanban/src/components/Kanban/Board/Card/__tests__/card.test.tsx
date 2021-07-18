import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../../../utils/tests/helper";

import Card from "..";

const props = {
  card: {
    id: "17b89579-9a4d-41aa-9707-354672d85cf3",
    titulo: "Alimentar tartaruga",
    conteudo: "Ela gosta de miojo de tomate",
    lista: "ToDo",
  },
  onUpdateCard: jest.fn(),
  onDeleteCard: jest.fn(),
  onDropCard: jest.fn(),
};

describe("<Card />", () => {
  describe("should display card", () => {
    describe("visualization mode", () => {
      it("display card title, content and edit/close buttons", () => {
        renderWithProviders(<Card {...props} />);

        expect(
          screen.getByRole("heading", {
            name: /alimentar tartaruga/i,
          })
        ).toBeInTheDocument();
        expect(screen.getByText(/ela gosta de miojo de tomate/i));
        expect(screen.getByTestId("edit-button")).toBeInTheDocument();
        expect(screen.getByTestId("delete-button")).toBeInTheDocument();
      });

      it("should call update function on card move", async () => {
        renderWithProviders(<Card {...props} />);

        userEvent.click(screen.getByTestId("forward-button"));
        await waitFor(() => {
          expect(props.onUpdateCard).toHaveBeenCalledWith({
            id: props.card.id,
            lista: "Doing",
            titulo: props.card.titulo,
            conteudo: props.card.conteudo,
          });
        });
      });

      it("should call delete function on delete button pressed and confirmed it", () => {
        renderWithProviders(<Card {...props} />);

        // Confirm on window.confirm
        global.confirm = jest.fn(() => true);

        userEvent.click(screen.getByTestId("delete-button"));
        expect(props.onDeleteCard).toHaveBeenCalledWith({
          id: props.card.id,
          titulo: props.card.titulo,
        });
      });
    });

    describe("edition mode", () => {
      it("display card title/content inputs and cancel/submit buttons", () => {
        renderWithProviders(<Card {...props} />);

        userEvent.click(screen.getByTestId("edit-button"));

        expect(screen.getByTestId("title-input")).toBeInTheDocument();
        expect(screen.getByTestId("content-textarea")).toBeInTheDocument();
        expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
        expect(screen.getByTestId("submit-button")).toBeInTheDocument();
      });

      it("should call update function on edit confirmation", async () => {
        renderWithProviders(<Card {...props} />);

        userEvent.click(screen.getByTestId("edit-button"));
        userEvent.clear(screen.getByTestId("title-input"));
        userEvent.type(screen.getByTestId("title-input"), "Alimentar cachorro");
        userEvent.clear(screen.getByTestId("content-textarea"));
        userEvent.type(
          screen.getByTestId("content-textarea"),
          "Ele come melancia"
        );
        userEvent.click(screen.getByTestId("submit-button"));

        await waitFor(() => {
          expect(props.onUpdateCard).toHaveBeenCalledWith({
            id: props.card.id,
            lista: props.card.lista,
            titulo: "Alimentar cachorro",
            conteudo: "Ele come melancia",
          });
        });
      });
    });
  });
});
