import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import HourlyCard from "./components/HouryCard";
import WeeklyCard from "./components/WeeklyCard";
import WeatherDetailCard from "./components/WeatherDetail";
import Sunset from "./components/Sunset";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");

  const handleFetchWeather = (data, cityName) => {
    // Check if the data is not null before updating the state
    if (data) {
      setWeatherData(data);
      setCityName(cityName);
    }
  };

  const onCityNameChange = (cityName) => {
    // Update the city name state
    setCityName(cityName);
  };

  return (
    <>
      <div>
        <SearchBar
          onFetchWeather={handleFetchWeather}
          onCityNameChange={onCityNameChange}
        />
        <CurrentWeather weatherData={weatherData} cityName={cityName} />
        <HourlyCard weatherData={weatherData} />
        <WeeklyCard weatherData={weatherData} />
        <WeatherDetailCard weatherData={weatherData} />
        <Sunset weatherData={weatherData} />
      </div>
    </>
  );
}

export default App;
