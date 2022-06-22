export default function Mainicon() {
  return (
    <div className="col-md-6 col-xs-12 mainIcon">
      <img src="./img/icon.png" alt="Icon1" />
      <p className="big-temperature">
        <span id="degree">18</span>
        <sup>
          <a href="" className="celcium">
            °C
          </a>{" "}
          |{" "}
          <a href="" className="farengeit">
            F
          </a>
        </sup>
      </p>
    </div>
  );
}
