import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../../../utils/tests/helper";

import NewCardModal from "..";

const props = {
  open: true,
  close: jest.fn(),
  onCreateCard: jest.fn(),
};

describe("<NewCardModal />", () => {
  it("should display new card create modal", () => {
    renderWithProviders(<NewCardModal {...props} />);

    expect(screen.getByTestId("title-input")).toBeInTheDocument();
    expect(screen.getByTestId("content-textarea")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  it("should call create function on confirm", async () => {
    renderWithProviders(<NewCardModal {...props} />);

    userEvent.type(screen.getByTestId("title-input"), "New card title");
    userEvent.type(screen.getByTestId("content-textarea"), "New card content");
    userEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(props.onCreateCard).toHaveBeenCalledWith({
        lista: "ToDo",
        titulo: "New card title",
        conteudo: "New card content",
      });
    });
  });

  describe("should display error message on confirm if any input is not set", () => {
    it("title is missing", async () => {
      renderWithProviders(<NewCardModal {...props} />);

      userEvent.type(screen.getByTestId("title-input"), "New card title");
      userEvent.click(screen.getByTestId("submit-button"));

      await waitFor(() => {
        expect(screen.getByText(/campo obrigatório/i)).toBeInTheDocument();
      });
    });

    it("content is missing", async () => {
      renderWithProviders(<NewCardModal {...props} />);

      userEvent.type(
        screen.getByTestId("content-textarea"),
        "New card content"
      );
      userEvent.click(screen.getByTestId("submit-button"));

      await waitFor(() => {
        expect(screen.getByText(/campo obrigatório/i)).toBeInTheDocument();
      });
    });
  });
});
