import axios from 'axios';
import { ROUTES } from '../constants/routes.constants';

// Define the base URL.  It's good to have this in a central place.
const BASE_URL = process.env.REACT_APP_API_URL; 

// List of endpoints where retry is allowed.  Use exact paths.
const RETRIABLE_ENDPOINTS = [
  ROUTES.FEEDBACK.FETCH_FEEDBACKS,
];

// Determine maximum retries and delay.  These should come from
// environment variables, but we provide defaults.  It's CRITICAL
// to parse them as numbers.
const MAX_RETRIES = parseInt(process.env.REACT_APP_MAX_RETRIES, 10) || 3;
const RETRY_DELAY_MS = parseInt(process.env.REACT_APP_RETRY_DELAY, 10) || 1000;

/**
 * Creates an Axios instance with a custom retry mechanism.
 *
 * @returns {axios.AxiosInstance} The configured Axios instance.
 */
const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    // You can set other default Axios options here, like headers, timeouts, etc.
    // Example:
    // timeout: 10000, // 10 seconds
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${localStorage.getItem('token')}`, // Example
    },
  });

  // Request interceptor:  Add a retry counter to the request config.
  instance.interceptors.request.use(
    (config) => {
      // Initialize the retry count.  Important to do it here, in the request interceptor.
      config.headers['x-retry-count'] = config.headers['x-retry-count'] || 0;
      return config;
    },
    (error) => {
      // Handle request errors here.  No retry logic in this interceptor.
      return Promise.reject(error);
    },
  );

  // Response interceptor: Implement the retry logic.
  instance.interceptors.response.use(
    (response) => {
      // If the response is successful, just return it.  No retry needed.
      return response;
    },
    async (error) => {
      // Check if we should retry.  Important checks here.
      const { config, response } = error;

      // 1.  Check if there's no config or response.  If not, just reject.
      if (!config || !response) {
        return Promise.reject(error);
      }

      // 2. Check if the request URL is in our list of retriable endpoints.
      const urlPathName = new URL(config.url, BASE_URL).pathname; // Get the pathname from the URL
      const shouldRetry = RETRIABLE_ENDPOINTS.includes(urlPathName); // Use URL constructor

      if (!shouldRetry) {
        return Promise.reject(error); // Don't retry if it's not a retriable endpoint.
      }

      // 3. Check the retry count.  Important to prevent infinite loops.
      const retryCount = config.headers['x-retry-count'];
      if (retryCount >= MAX_RETRIES) {
        // After max retries, reject with the error.
        return Promise.reject(error);
      }

      // 4.  Check the response status code.  Only retry on specific server errors.
      if (response.status >= 500 || response.status === 429) { // Retry on 5xx errors and 429 (Too Many Requests)
        // Increment the retry count
        config.headers['x-retry-count'] = retryCount + 1;

        // Delay before retrying.  Use await.
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));

        // Make the retry request.  Use the original config.
        return instance.request(config);
      }

      // If we get here, it's not a retriable error.  Reject.
      return Promise.reject(error);
    },
  );

  return instance;
};

// Export the Axios instance.  Use a singleton pattern (one instance for the whole app).
const axiosInstance = createAxiosInstance();
export default axiosInstance;
