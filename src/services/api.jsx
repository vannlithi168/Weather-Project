import axios from "axios";

// Create an instance of axios with a specified base URL
const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

// Export the axios instance for use in other parts of the application
export default api;
