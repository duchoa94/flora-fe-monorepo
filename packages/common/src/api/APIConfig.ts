import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const PROD_API_URL = 'https://e-wholesale-api-5hl63at73a-as.a.run.app/v1/api';

export const axiosInstance = axios.create({
  baseURL: PROD_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setBaseUrl(baseUrl: string) {
  axiosInstance.defaults.baseURL = baseUrl;
}

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Meca ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
