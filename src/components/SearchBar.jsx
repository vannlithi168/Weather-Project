/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";
import weatherService from "../services/weatherService";
import getCityCoordinates from "../services/getCity";

const SearchBar = ({ onFetchWeather, onCityNameChange }) => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      try {
        const defaultCityName = "Phnom Penh";
        const coordinates = await getCityCoordinates(defaultCityName);
        const data = coordinates
          ? await weatherService.getCurrentWeather(
              coordinates.lat,
              coordinates.lon,
              "current"
            )
          : null;

        // Pass the weather data and city name to the parent component
        onFetchWeather(data, defaultCityName);
        onCityNameChange(defaultCityName);

        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching default weather data:", error);
      }
    };

    fetchDefaultWeather();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const coordinates = await getCityCoordinates(cityName);
      const data = coordinates
        ? await weatherService.getCurrentWeather(
            coordinates.lat,
            coordinates.lon,
            "current"
          )
        : null;

      // Pass the weather data and city name to the parent component
      onFetchWeather(data, cityName);
      onCityNameChange(cityName);

      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = () => {
    onCityNameChange(cityName);
    fetchWeatherData();
  };

  const getWeatherByCoordinates = async (latitude, longitude) => {
    try {
      const data = await weatherService.getCurrentWeather(
        latitude,
        longitude,
        "current"
      );

      // Pass the weather data and location name to the parent component
      onFetchWeather(data, cityName);
      onCityNameChange(cityName);

      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          await getWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchWeatherData();
    }
  };

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          margin: "20px 20px",
          marginTop: "0px",
          padding: "0",
          borderRadius: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      >
        <IconButton
          type="button"
          sx={{ p: "10px", color: "white" }}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white" }}
          placeholder="Enter city name"
          inputProps={{ "aria-label": "search google maps" }}
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="get location"
          onClick={handleGetLocation}
        >
          <RoomIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
