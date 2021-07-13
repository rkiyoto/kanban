import { useCallback } from "react";

import Auth from ".";

interface LoginProps {
  username: string;
  password: string;
}

export default function useAuth() {
  const login = useCallback(
    async ({ username, password }: LoginProps): Promise<void> => {
      try {
        const successToken = await Auth.login({ username, password });
        sessionStorage.setItem("token", successToken);
      } catch (error) {
        throw new Error(error);
      }
    },
    []
  );

  const logout = () => {
    sessionStorage.clear();
  };

  return { login, logout };
}
