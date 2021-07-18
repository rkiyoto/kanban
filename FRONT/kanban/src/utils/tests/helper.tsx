import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme";

export const renderWithTheme = (component: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);

export const renderWithProviders = (component: React.ReactNode): RenderResult =>
  renderWithTheme(
    <DndProvider backend={HTML5Backend}>{component}</DndProvider>
  );
