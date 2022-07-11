export default function WeatherDescr({ description, humidity, wind, city }) {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="col-md-6 col-xs-12">
      <p className="big-city text-end">{city}</p>
      <p className="description text-muted text-end">
        <span id="today">
          {days[date.getDay()]}, {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
        <br />
        <span id="weather" className="text-capitalize">
          {description}
        </span>
        <br />
        Humidity: <span id="humidity">{humidity}</span>
        <br />
        Wind: <span id="wind">{wind}km/h</span>
      </p>
    </div>
  );
}
