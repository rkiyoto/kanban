import { useState } from "react";

import Auth from ".";

interface LoginProps {
  username: string;
  password: string;
}

export default function useAuth() {
  const [isLogged, setIsLogged] = useState(false);
  const login = async ({ username, password }: LoginProps): Promise<void> => {
    try {
      const successToken = await Auth.login({ username, password });
      sessionStorage.setItem("token", successToken);
      setIsLogged(true);
    } catch (error) {
      throw new Error(error);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    setIsLogged(false);
  };

  return { login, logout, isLogged };
}
