import HomeHttp from "./hooks/http/home.http";
import { useMemo } from "react";

const home = new HomeHttp();

type HttpHook = {
  home: HomeHttp;
};

const useHttp = (): HttpHook => {
  return useMemo(() => {
    return {
      home,
    };
  }, []);
};

export default useHttp;
