import React, { useState } from "react";

const weatherData = () => {
  let myKey = "bedb84988e285845f051920f8c8cbe9b";
  let city = "Taipei";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [weatherData, setWeatherData] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isWeatherData, setIsWeatherData] = useState(false);
  const searchWeather = async () => {
    if (isWeatherData === false) {
      fetch(url)
        .then(async (res) => {
          let parsedData = await res.json();
          if (parsedData) {
            setWeatherData(parsedData);
            setIsWeatherData(true);
            console.log(parsedData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsWeatherData(false);
      setWeatherData("");
    }
  };

  return (
    <div className="weatherbg">
      <p
        className="weather-title"
        style={{ cursor: "pointer" }}
        onClick={searchWeather}
      >
        Today Weather
      </p>
      {weatherData && (
        <div className="weatherData">
          <h1>{weatherData.name}</h1>
          <p>
            <span>溫度</span>
            <span> : </span>
            <span>{Math.floor(weatherData.main.temp - 273.15)}度</span>
          </p>
          <p>
            <span>濕度</span>
            <span> : </span>
            <span>{weatherData.main.humidity}%</span>
          </p>

          <p>
            <span>主要狀況</span>
            <span> : </span>
            <span>{weatherData.weather[0].main}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default weatherData;
