import React, { useState } from "react";
import axios from "axios";
import Mainicon from "./Mainicon";
import WeatherDescr from "./WeatherDescr";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Maincontent() {
  const apiKey = "4c31ee4572cfbf571e614a37da82c29c";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;

  const properties = {
    display: "block",
    margin: "50px auto",
  };

  const [stage, setStage] = useState(false);
  const [response, setResponse] = useState();
  const [value, setValue] = useState();

  function getWeatherData(resp) {
    setResponse(resp.data);
    setStage(true);
  }

  function searchFunc(e) {
    e.preventDefault();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(getWeatherData);
  }

  function searchInput(e) {
    setValue(e.target.value.toLowerCase().toUpperCase());
  }

  function getCurrentLocation(e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiURL).then(getWeatherData);
      console.log(apiURL);
    });
  }

  if (stage) {
    return (
      <div>
        <form className="mb-3" onSubmit={searchFunc}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter your city name..."
                className="form-control"
                onChange={searchInput}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
            <div className="col-2">
              <button
                type="submit"
                className="btn btn-success"
                onClick={getCurrentLocation}
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <div className="item p-4 pb-5">
          <div className="row mb-3">
            <Mainicon
              temperature={Math.round(response?.main?.temp)}
              iconID={response?.weather[0]?.icon}
              iconAlt={response?.weather[0]?.description}
            />
            <WeatherDescr responseDate={response} />
          </div>
          <div className="row" id="forecast"></div>
        </div>
      </div>
    );
  } else {
    axios.get(apiURL).then(getWeatherData);
    return (
      <PacmanLoader
        color="#d9d9ee"
        loading={true}
        cssOverride={properties}
        size={50}
      />
    );
  }
}
