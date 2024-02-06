import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URI;

const axiosInterceptorInstance = axios.create({
  baseURL: API_URL,
});

axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access_token");

    if (accessToken) {
      if (config.headers)
        config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.clear();
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
