import React, { useState } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./index.css";
import Form from "./Form";
import Mainicon from "./Mainicon";
import WeatherDescr from "./WeatherDescr";

export default function App() {
  const apiKey = "4c31ee4572cfbf571e614a37da82c29c";

  const properties = {
    display: "block",
    margin: "50px auto",
  };

  const [stage, setStage] = useState(false);

  function getWeatherData(resp) {
    console.log(resp.data);
    setStage(true);
  }

  if (stage) {
    return (
      <div className="container">
        <div className="w-50 mx-auto">
          <div className="border rounded-3 p-3">
            <Form />
            <div className="item p-4 pb-5">
              <div className="row mb-3">
                <Mainicon />
                <WeatherDescr />
              </div>
              <div className="row" id="forecast"></div>
            </div>
          </div>
          <p>
            <a
              href="https://github.com/solntseva93/reactweatherproject"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourse code
            </a>
            &nbsp;by Olena Solntseva
          </p>
        </div>
      </div>
    );
  } else {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(getWeatherData);
    return (
      <PacmanLoader
        color="#36d7b7"
        loading={true}
        cssOverride={properties}
        size={50}
      />
    );
  }
}
