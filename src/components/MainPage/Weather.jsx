import { useEffect, useState } from "react";
import wind from "../../assets/Vector (3).png";
import humid from "../../assets/humid.png";
import pressure from "../../assets/pressure.png";

const Weather = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        "http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no"
      )
        .then(async (data) => await data.json())
        .then((data) => setWeather(data));
    };
    fetchWeather();
  }, []);
  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  });
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  });
  return (
    <div
      style={{
        width: "31vw",
        height: "18vh",
        background: "#101744",
        borderRadius: "12px",
        marginTop: "11px",
        marginLeft: "27px",
      }}
    >
      <div
        style={{
          height: "5vh",
          background: "#FF4ADE",
          borderRadiusTop: "12px",
          padding: "5px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontSize: "1.2rem",
          color: " #FFF",
          fontFamily: "Roboto",
          fontWeight: "600",
          letterSpacing: "0.66px",
        }}
      >
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div>
        {weather ? (
          <div
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {" "}
            <div>
              <img
                src={weather.current.condition.icon}
                style={{ width: "55px", height: "50px" }}
                alt=""
              />
              <p
                style={{
                  fontSize: "11px",
                  color: "#FFF",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                {weather.current.condition.text}
              </p>
            </div>
            <div style={{ fontSize: "40px", width: "4.4px", color: "FFF" }}>
              |
            </div>
            <div>
              <p
                style={{
                  marginBottom: "3px",
                  fontSize: "34px",
                  marginTop: "6px",
                  letterSpacing: "0.7px",
                }}
              >
                <span>{weather.current.temp_c}</span>°C
              </p>
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.5px",
                  display: "flex",
                  gap: "7px",
                  color: "#FFF",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                }}
              >
                <img
                  src={pressure}
                  style={{ width: "10px", height: "17px", marginTop: "4px" }}
                  alt=""
                />
                <p>
                  {weather.current.pressure_mb} mbar <br />
                  Pressure
                </p>
              </p>
            </div>
            <div style={{ fontSize: "40px", width: "4.4px", color: "#FFF" }}>
              |
            </div>
            <div>
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "9px",
                  fontSize: "11px",
                  display: "flex",
                  gap: "7px",
                  color: "#FFF",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                }}
              >
                {" "}
                <img
                  src={wind}
                  alt=""
                  style={{ width: "20px", height: "15px", marginTop: "6px" }}
                />
                <p>
                  {weather.current.wind_kph} km/h
                  <br />
                  Wind
                </p>
              </p>
              <p
                style={{
                  fontSize: "11px",
                  display: "flex",
                  gap: "10px",
                  marginLeft: "6px",
                  color: "#FFF",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                }}
              >
                <img
                  src={humid}
                  style={{ width: "13px", height: "16px", marginTop: "5px" }}
                  alt=""
                />
                <p>
                  {" "}
                  {weather.current.humidity}%<br /> Humidity
                </p>
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Weather;

// current.condition.icon, text
// current.temp_c
// current.pressure_mb
// current.wind_kph
// current.humidity
