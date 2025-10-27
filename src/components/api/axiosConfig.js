import axios from 'axios';

const BASE_URL = 'https://remote-internship-api-production.up.railway.app';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
