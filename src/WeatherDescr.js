export default function WeatherDescr(props) {
  let weatherDescr = {
    description: props.responseDate.weather[0].description,
    humidity: props.responseDate.main.humidity,
    wind: props.responseDate.wind.speed,
    city: props.responseDate.name,
  };
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
      <p className="big-city text-end">{weatherDescr.city}</p>
      <p className="description text-muted text-end">
        <span id="today">
          {days[date.getDay()]}, {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
        <br />
        <span id="weather" className="text-capitalize">
          {weatherDescr.description}
        </span>
        <br />
        Humidity: <span id="humidity">{weatherDescr.humidity}</span>
        <br />
        Wind: <span id="wind">{weatherDescr.wind}km/h</span>
      </p>
    </div>
  );
}
