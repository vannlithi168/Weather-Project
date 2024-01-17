/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import dayFormat from "../utils/dayFormat";

export default function WeeklyCard({ weatherData }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    setCurrentWeather(weatherData);
  }, [weatherData]);

  const renderDayData = (dayIndex) => {
    if (!weatherData || !weatherData.daily || !weatherData.daily[dayIndex]) {
      return null;
    }

    const dayData = weatherData.daily[dayIndex];

    return (
      <Box
        key={dayIndex}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "white",
          gap: "50px",
        }}
      >
        <Typography>{dayFormat(dayData.dt)}</Typography>
        <img
          src={`/icons/${dayData.weather[0].icon}.png`}
          alt={dayData.weather[0].description}
          style={{ width: "40px" }}
        />

        <Typography>{`${(dayData.temp.day - 273).toFixed(2)}°C`}</Typography>
      </Box>
    );
  };

  return (
    <Card
      sx={{
        display: "flex",
        marginTop: "30px",
        marginRight: "20px",
        marginLeft: "20px",
        borderRadius: "10px",
        bgcolor: "rgba(0, 0, 0, 0.25)",
        border: "none",
        boxShadow: "none",
        padding: "20px ",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => renderDayData(dayIndex))}
    </Card>
  );
}
