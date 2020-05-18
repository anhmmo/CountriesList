import React, { useState, useEffect } from "react";

import axios from "axios";
function Weather({ capital }) {
  const [weather, setWeather] = useState([]);

  const weatherBox = () => {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=6e4b2f2e2f94cec1ad996f2441e312f1&query=" +
          capital
      )
      .then((response) => {
        setWeather([response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(weatherBox, []);
  if (weather.length > 0) {
    //console.log(weather[0]);
    return (
      <div>
        <h2>Weather in {weather[0].location.name}</h2>
        <p>Temperature : {weather[0].current.temperature} celcius</p>
        <img src={weather[0].current.weather_icons} alt="" />
        <p>wind: {weather[0].current.wind_speed} mph direction SSW</p>
      </div>
    );
  } else return <div></div>;
}

export default Weather;
