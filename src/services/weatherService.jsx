import api from "./api";

const API_KEY = "4e4ba020b1a674a660e6e3655981b850";

const weatherService = {
  getCurrentWeather: async (lat, lon, part) => {
    try {
      const response = await api.get(
        `/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching weather:", error);
      throw error;
    }
  },
};

export default weatherService;
