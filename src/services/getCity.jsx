// apiUtils.js

const getCityCoordinates = async (cityName) => {
  try {
    const apiKey = "4e4ba020b1a674a660e6e3655981b850";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${apiKey}`
    );

    if (!response.ok) {
      console.error("Error response from OpenWeatherMap API:", response);
      throw new Error("Error fetching city coordinates");
    }

    const data = await response.json();

    if (data.coord) {
      const { lat, lon } = data.coord;
      return { lat, lon };
    } else {
      console.error("City coordinates not found in API response:", data);
      throw new Error("City coordinates not found");
    }
  } catch (error) {
    console.error("Error getting city coordinates:", error);
    throw error;
  }
};

export default getCityCoordinates;
