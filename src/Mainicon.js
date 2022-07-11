import { useEffect, useState } from "react";
import Icon from "./Icon.js";

export default function Mainicon({ temperature, iconID, iconAlt }) {
  const [tempr, setTempr] = useState(temperature);

  useEffect(() => {
    setTempr(temperature);
  }, [temperature]);

  function farengToCelcium(e) {
    e.preventDefault();
    setTempr(Math.round((temperature * 9) / 5 + 32));
  }

  function celciumToFareng(e) {
    e.preventDefault();
    setTempr(temperature);
  }

  return (
    <div className="col-md-6 col-xs-12 mainIcon">
      <p className="big-temperature">
        <Icon iconID={iconID} iconAlt={iconAlt} />
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
