import axios from 'axios';
import { ROUTES } from '../constants/routes.constants';

const axiosInstance = axios.create({
  baseURL: ROUTES.BASE_URL, 
});

console.log(process.env.NODE_ENV)
// You can also add request interceptors if needed
axiosInstance.interceptors.request.use(config => {
  // You can modify or log requests here
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
