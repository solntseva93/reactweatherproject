import { useState } from "react";

export default function Mainicon(temperature, iconID, iconAlt) {
  let temperature2 = Math.round(temperature);
  let imgID = iconID;

  const [tempr, setTempr] = useState(0);

  function farengToCelcium(e) {
    e.preventDefault();
    setTempr(Math.round((temperature2 * 9) / 5 + 32));
  }

  function celciumToFareng(e) {
    e.preventDefault();
    setTempr(temperature2);
  }

  //const icon = new AnimatedWeatherIcon(document.querySelector(".tested"));
  return (
    <div className="col-md-6 col-xs-12 mainIcon">
      <p className="big-temperature">
        <img
          src={`http://openweathermap.org/img/wn/${imgID}@2x.png`}
          alt={iconAlt}
        />
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
