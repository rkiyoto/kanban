import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { HTTP_CONFIG } from "./config";

type Headers = Record<string, string>;

class APIClient {
  private axios: AxiosInstance;

  private baseURL = "http://localhost:5000";

  constructor() {
    this.axios = axios.create(this.axiosConfig);

    this.axios.interceptors.request.use((config) => {
      const token = sessionStorage.getItem("token");
      return Object.assign(config, {
        headers: {
          ...(config.headers as Headers),
          ...HTTP_CONFIG.DEFAULT_HEADERS,
          Authorization: `Bearer ${token}`,
        },
      });
    });
  }

  get axiosConfig(): AxiosRequestConfig {
    return {
      baseURL: this.baseURL,
      timeout: HTTP_CONFIG.DEFAULT_TIMEOUT,
      headers: { ...HTTP_CONFIG.DEFAULT_HEADERS },
    };
  }

  get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.get(url, config);
  }

  post<T, D, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.post(url, data, config);
  }

  put<T, D, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.put(url, data, config);
  }

  delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.delete(url, config);
  }
}

const client = new APIClient();

export default client;
