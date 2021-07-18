import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../utils/tests/helper";

import Kanban from "..";
import userEvent from "@testing-library/user-event";

const props = {
  isLogged: false,
  login: jest.fn(),
  logout: jest.fn(),
};

describe("<Kanban />", () => {
  describe("should verify user session", () => {
    it("should show no-session warning screen", () => {
      renderWithTheme(<Kanban {...props} />);
      expect(
        screen.getByRole("heading", {
          name: /kanban/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", {
          name: /log in/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /você não está autenticado\(a\)/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /autentique-se clicando no botão log in na barra superior/i,
        })
      ).toBeInTheDocument();
    });

    it("should display login button when not logged in", () => {
      renderWithTheme(<Kanban {...props} />);

      expect(
        screen.getByRole("button", {
          name: /log in/i,
        })
      ).toBeInTheDocument();
    });

    it("should log user in when button clicked", () => {
      renderWithTheme(<Kanban {...props} />);

      userEvent.click(
        screen.getByRole("button", {
          name: /log in/i,
        })
      );

      expect(props.login).toHaveBeenCalledWith({
        username: "letscode",
        password: "lets@123",
      });
    });

    it("should display logout button and board when logged in", () => {
      renderWithTheme(<Kanban {...props} isLogged={true} />);
      expect(
        screen.getByRole("button", {
          name: /logout/i,
        })
      ).toBeInTheDocument();

      expect(screen.getByTestId("board-component")).toBeInTheDocument();
    });

    it("should log user out when button clicked and confirmed it", () => {
      renderWithTheme(<Kanban {...props} isLogged={true} />);

      global.confirm = jest.fn(() => true);

      userEvent.click(
        screen.getByRole("button", {
          name: /logout/i,
        })
      );

      expect(props.logout).toHaveBeenCalled();
    });
  });
});
