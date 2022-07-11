import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";
import Maincontent from "./Maincontent";
import Forecast from "./Forecast";

const apiKey = "68fcf8ca6de6cd66d21c17e2ca9537bc";
const properties = {
  display: "block",
  margin: "50px auto",
};

export default function Weatherapp() {
  const [stage, setStage] = useState(false);
  const [city, setCity] = useState("Paris");
  const [response, setResponse] = useState();
  const [responseForecast, setResponseForecast] = useState();

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function searchInput(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  function searchFunc(e) {
    e.preventDefault();
    renderUrl();
  }

  function renderUrl() {
    axios.get(apiURL).then(function (resp) {
      setResponse(resp);
    });
  }

  useEffect(() => {
    if (response != null) {
      let apiURLForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=${apiKey}&units=metric`;
      axios.get(apiURLForecast).then(function (resp) {
        setResponseForecast(resp);
      });
    }
  }, [response]);

  function getCurrentLocation(e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
      renderUrl();
    });
  }

  if (!stage) {
    renderUrl();
    setStage(true);
    return (
      <PacmanLoader
        color="#d9d9ee"
        loading={true}
        cssOverride={properties}
        size={50}
      />
    );
  }

  if (response != null) {
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
          <Maincontent data={response.data} />
          <Forecast data={responseForecast.data.daily} />
        </div>
      </div>
    );
  }
}
