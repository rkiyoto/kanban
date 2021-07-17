import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

import Kanban from "./components/Kanban";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Kanban />
      </div>
    </ThemeProvider>
  );
}

export default App;
