export default function Mainicon() {
  return (
    <div className="col-md-6 col-xs-12 mainIcon">
      <img src="./img/icon.png" alt="Icon1" />
      <p className="big-temperature">
        <span id="degree">18</span>
        <sup>
          <button className="celcium">°C</button>|
          <button className="farengeit">F</button>
        </sup>
      </p>
    </div>
  );
}
