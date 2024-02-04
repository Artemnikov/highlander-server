// src/api/axiosInstance.ts
import axios from 'axios';

// can add JWT tokens and etc...
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
