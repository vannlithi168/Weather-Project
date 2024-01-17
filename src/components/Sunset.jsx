/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import sunsetBackground from "../assets/imgsun.png";
import timeFormat from "../utils/timeFormat";

export default function Sunset({ weatherData }) {
  return (
    <Card
      sx={{
        minWidth: 320,
        marginTop: "30px",
        width: "auto",
        bgcolor: "rgba(0, 0, 0, 0.25)",
        border: "none",
        boxShadow: "none",
        borderRadius: "10px",
        color: "white",
        marginLeft: "20px",
        marginRight: "20px",
        backgroundImage: `url(${sunsetBackground})`,
        backgroundSize: "cover",
      }}
    >
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        {weatherData && (
          <>
            <div>
              <CardContent>
                <img src="/img/sunrise.png" style={{ width: "30px" }} />
                <Typography sx={{ fontSize: 14 }}>Sunrise</Typography>
                <Typography sx={{ fontSize: 14 }}>
                  {timeFormat(weatherData.daily[0].sunrise)}
                </Typography>
              </CardContent>
            </div>
            <div>
              <CardContent>
                <img src="/img/sunset.png" style={{ width: "30px" }} />
                <Typography sx={{ fontSize: 14 }}>Sunset</Typography>
                <Typography sx={{ fontSize: 14 }}>
                  {" "}
                  {timeFormat(weatherData.daily[0].sunset)}
                </Typography>
              </CardContent>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
