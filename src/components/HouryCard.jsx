/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function HourlyCard({ weatherData }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    setCurrentWeather(weatherData);
  }, [weatherData]);

  const renderHourlyData = () => {
    if (
      !weatherData ||
      !weatherData.hourly ||
      weatherData.hourly.length === 0
    ) {
      return null;
    }

    const currentHour = new Date().getHours();

    // Filter hourly data for the next 12 hours
    const filteredHourlyData = weatherData.hourly.filter((hourData) => {
      const hour = new Date(hourData.dt * 1000).getHours();
      return hour >= currentHour && hour < currentHour + 12;
    });

    return filteredHourlyData.map((hourData, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "auto",
          marginTop: "auto",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "14px" }}>
          {index === 0
            ? "Now"
            : new Date(hourData.dt * 1000).toLocaleTimeString([], {
                hour: "numeric",
              })}
        </Typography>
        <img
          style={{ width: "50px" }}
          src={`/icons/${hourData.weather[0].icon}.png`}
          alt={hourData.weather[0].description}
        />
        <Typography sx={{ color: "white", fontSize: "18px" }}>
          {`${(hourData.temp - 273).toFixed(0)}°C`}
        </Typography>
      </Box>
    ));
  };

  return (
    <Card
      sx={{
        display: "flex",
        marginTop: "-40px",
        bgcolor: "rgba(0, 0, 0, 0.25)",
        border: "none",
        boxShadow: "none",
        alignItems: "end",
        marginRight: "20px",
        marginLeft: "20px",
        gap: "15px",
        height: "142px",
        borderRadius: "10px",
        flexDirection: "column",
        width: "auto",
        padding: "20px",
        overflowX: "auto",
        overflowY: "hidden",
        WebkitOverflowScrolling: "touch",

        "&::-webkit-scrollbar": {
          width: "12px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(255, 255, 255, 0.3)",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(255, 255, 255, 0.3) transparent",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "auto",
          marginTop: "auto",
          alignItems: "center",
          gap: "30px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        {renderHourlyData()}
      </Box>
    </Card>
  );
}
