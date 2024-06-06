import axios from "axios";
import Cookies from "js-cookie";

const backendApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const requestInterceptor = (config) => {
  const token = Cookies.get('token');
  const { headers } = config;

  if (token !== null) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};


backendApi.interceptors.request.use(requestInterceptor);

export default backendApi;
