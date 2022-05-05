import axios, { AxiosResponse } from "axios";

const rootAxios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

rootAxios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error) => {
    if (!axios.isCancel(error)) {
      return Promise.reject(error?.response?.status);
    }

    return Promise.reject(error);
  }
);

export const serverAxios = rootAxios;

export const pbAxios = axios.create({
  baseURL: process.env.REACT_APP_PANDORA_BOT_URL,
});
