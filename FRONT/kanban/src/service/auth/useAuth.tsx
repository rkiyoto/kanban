import { useState } from "react";
import { ERROR_TOAST_PROPS } from "../../utils/constants";
import { toast } from "react-toastify";

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
      toast.error(
        `Oops! Não foi possível iniciar a sessão. :( Verifique o status do servidor ou tente novamente mais tarde`,
        ERROR_TOAST_PROPS
      );
    }
  };

  const logout = () => {
    sessionStorage.clear();
    setIsLogged(false);
  };

  return { login, logout, isLogged };
}
