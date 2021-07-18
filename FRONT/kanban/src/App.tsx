import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import useAuth from "./service/auth/useAuth";

import Kanban from "./components/Kanban";
import "./App.css";

function App() {
  const { isLogged, login, logout } = useAuth();
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Kanban isLogged={isLogged} login={login} logout={logout} />
      </div>
    </ThemeProvider>
  );
}

export default App;
