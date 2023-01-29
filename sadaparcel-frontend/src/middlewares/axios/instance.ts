import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});
