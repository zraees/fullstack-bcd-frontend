// src/api/axios.js
import axios from 'axios';
// const backendUrl = import.meta.env.VITE_BCD_BACKEND_URL + "";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  response => response, // Pass through successful responses
  error => {
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    
    // Display the error message using `alert`
    alert(message);
    
    // Log the error to the console
    console.error('Axios Error:', error);

    return Promise.reject(error); // Propagate the error for specific handling if needed
  }
);

export default axiosInstance;
