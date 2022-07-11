import Icon from "./Icon.js";
import ForecastDays from "./ForecastDays.js";

export default function Forecast(props) {
  let responseMas = props.data;

  function round(value) {
    return Math.round(value);
  }

  return (
    <div className="row">
      {responseMas.map(function (daily, index) {
        if (index < 6 && index > 0) {
          return (
            <div className="col card me-1 py-3" key={index}>
              <ForecastDays data={daily.dt * 1000} />
              <Icon
                iconID={daily.weather[0].icon}
                iconAlt={daily.weather[0].description}
              />
              <p className="card-text small-temperature">
                Max: {round(daily.temp.max)}°C <br />
                <span className="text-muted">
                  Min: {round(daily.temp.min)}°C
                </span>
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
