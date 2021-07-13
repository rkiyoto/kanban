import { AxiosResponse } from "axios";
import APICLient from "../APIClient";

interface LoginProps {
  username: string;
  password: string;
}

export default class Auth {
  static async login({ username, password }: LoginProps): Promise<string> {
    try {
      const { data }: AxiosResponse = await APICLient.post("/login", {
        login: username,
        senha: password,
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
