/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function WeatherDetailCard({ weatherData }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    setCurrentWeather(weatherData);
  }, [weatherData]);
  return (
    <>
      <h4
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          color: "white",
          marginTop: "40px",
        }}
      >
        Weather Detail
      </h4>
      {weatherData && (
        <div
          style={{
            marginLeft: "20px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              minWidth: 150,
              marginTop: "10px",
              width: "calc(50% - 20px)",
              bgcolor: "rgba(0, 0, 0, 0.25)",
              border: "none",
              boxShadow: "none",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <CardContent>
              <img src="/img/feel_like.png" style={{ width: "30px" }} />
              <Typography sx={{ fontSize: 14 }}>Feel Like</Typography>
              <Typography sx={{ fontSize: 34 }}>
                {(weatherData.daily[0].feels_like.day - 273).toFixed(0)}°C
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 150,
              marginTop: "10px",
              width: "calc(50% - 20px)",
              bgcolor: "rgba(0, 0, 0, 0.25)",
              border: "none",
              boxShadow: "none",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <CardContent>
              <img src="/img/wind_speed.png" style={{ width: "30px" }} />
              <Typography sx={{ fontSize: 14 }}>Wind Speed</Typography>
              <Typography sx={{ fontSize: 34 }}>
                {weatherData.daily[0].wind_speed.toFixed(0)} mi/h
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 150,
              marginTop: "10px",
              width: "calc(50% - 20px)",
              bgcolor: "rgba(0, 0, 0, 0.25)",
              border: "none",
              boxShadow: "none",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <CardContent>
              <img src="/img/pressure.png" style={{ width: "30px" }} />
              <Typography sx={{ fontSize: 14 }}>Pressure</Typography>
              <Typography sx={{ fontSize: 34 }}>
                {weatherData.daily[0].pressure}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 150,
              marginTop: "10px",
              width: "calc(50% - 20px)",
              bgcolor: "rgba(0, 0, 0, 0.25)",
              border: "none",
              boxShadow: "none",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <CardContent>
              <img src="/img/uvindex.png" style={{ width: "30px" }} />
              <Typography sx={{ fontSize: 14 }}>UV Index</Typography>
              <Typography sx={{ fontSize: 34 }}>
                {" "}
                {weatherData.daily[0].uvi}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 150,
              marginTop: "10px",
              width: "calc(50% - 20px)",
              bgcolor: "rgba(0, 0, 0, 0.25)",
              border: "none",
              boxShadow: "none",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <CardContent>
              <img src="/img/humidity.png" style={{ width: "30px" }} />
              <Typography sx={{ fontSize: 14 }}>Humidity</Typography>
              <Typography sx={{ fontSize: 34 }}>
                {" "}
                {weatherData.daily[0].humidity}%
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 150,
              marginTop: "10px",
              width: "calc(50% - 20px)",
              bgcolor: "rgba(0, 0, 0, 0.25)",
              border: "none",
              boxShadow: "none",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <CardContent>
              <img src="/img/rain.png" style={{ width: "30px" }} />
              <Typography sx={{ fontSize: 14 }}>Rain Chance</Typography>
              <Typography sx={{ fontSize: 34 }}>
                {" "}
                {weatherData.daily[0].pop}%
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
