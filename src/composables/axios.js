import Axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const useAxios = () => {
  const axios = Axios.create({
    baseURL,
    headers: { Accept: "application/json" },
    withCredentials: true,
  });

  return { axios };
};
