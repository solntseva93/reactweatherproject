import React from "react";
import Mainicon from "./Mainicon.js";
import WeatherDescr from "./WeatherDescr.js";

export default function Maincontent(props) {
  let apiData = {
    temperature: Math.round(props.data.main.temp),
    iconID: props.data.weather[0].icon,
    description: props.data.weather[0].description,
    humidity: props.data.main.humidity,
    wind: props.data.wind.speed,
    city: props.data.name,
    lat: props.data.coord.lat,
    lat: props.data.coord.lon,
  };

  return (
    <div className="row mb-3">
      <Mainicon
        temperature={apiData.temperature}
        iconID={apiData.iconID}
        iconAlt={apiData.description}
      />
      <WeatherDescr
        description={apiData.description}
        humidity={apiData.humidity}
        wind={apiData.wind}
        city={apiData.city}
      />
    </div>
  );
}
