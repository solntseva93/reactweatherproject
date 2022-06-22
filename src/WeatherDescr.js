export default function WeatherDescr() {
  return (
    <div className="col-md-6 col-xs-12">
      <p className="big-city text-end">New York</p>
      <p className="description text-muted text-end">
        <span id="today">Monday, 16:36</span>
        <br />
        <span id="weather">Sunny</span>
        <br />
        Humidity: <span id="humidity">80%</span>
        <br />
        Wind: <span id="wind">18km/h</span>
      </p>
    </div>
  );
}
