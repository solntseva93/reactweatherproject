//import { AnimatedWeatherIcon } from "animated-weather-icon";
import { useState } from "react";

export default function Mainicon(props) {
  let temperature = Math.round(props.responseDate.main.temp);

  const [tempr, setTempr] = useState(temperature);

  function farengToCelcium(e) {
    e.preventDefault();
    setTempr(Math.round((temperature * 9) / 5 + 32));
  }

  function celciumToFareng(e) {
    e.preventDefault();
    setTempr(temperature);
  }

  //const icon = new AnimatedWeatherIcon(
  //  <div className="my-render-target"></div>
  //);
  return (
    <div className="col-md-6 col-xs-12 mainIcon">
      <p className="big-temperature">
        <span id="degree">{tempr}</span>
        <sup>
          <button className="celcium" onClick={celciumToFareng}>
            °C
          </button>
          |
          <button className="farengeit" onClick={farengToCelcium}>
            F
          </button>
        </sup>
      </p>
    </div>
  );
}
