/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
function CurrentWeather({ weatherData, cityName }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    setCurrentWeather(weatherData);
  }, [weatherData]);
  return (
    <div style={{ marginLeft: "30px", marginRight: "auto" }}>
      {currentWeather && (
        <>
          <h1 style={{ color: "white", fontSize: "48px", fontWeight: 80 }}>
            {cityName}
          </h1>

          <img
            src={`icons/${weatherData.daily[0].weather[0].icon}.png`}
            style={{ width: "200px", marginLeft: "60px" }}
          />

          <div style={{ marginTop: "-70px", display: "flex", gap: "30px" }}>
            {" "}
            <p style={{ color: "white", fontSize: "80px" }}>
              {(weatherData.daily[0].temp.day - 273.15).toFixed(0)}°C
            </p>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "10",
                marginTop: "126px",
              }}
            >
              {weatherData.daily[0].weather[0].description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default CurrentWeather;
