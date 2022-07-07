import { useEffect, useState } from "react";

export default function Mainicon({ temperature, iconID, iconAlt }) {
  const [tempr, setTempr] = useState(temperature);

  const iconsMas = {
    "01d": "clear-day",
    "02d": "overcast-day",
    "03d": "cloudy",
    "04d": "overcast",
    "09d": "partly-cloudy-day-drizzle",
    "10d": "rain",
    "11d": "thunderstorms-day",
    "13d": "snow",
    "50d": "mist",
    "01n": "clear-night",
    "02n": "overcast-night",
    "03n": "cloudy",
    "04n": "overcast",
    "09n": "partly-cloudy-night-drizzle",
    "10n": "rain",
    "11n": "thunderstorms-night",
    "13n": "snow",
    "50n": "mist",
  };

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
        <img
          src={require(`@bybas/weather-icons/production/fill/all/${iconsMas[iconID]}.svg`)}
          alt={iconAlt}
          width={"100px"}
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
