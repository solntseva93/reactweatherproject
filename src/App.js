import "./index.css";
import Form from "./Form";
import Mainicon from "./Mainicon";
import WeatherDescr from "./WeatherDescr";

export default function App() {
  return (
    <div className="container">
      <div className="w-50 mx-auto">
        <div className="border rounded-3 p-3">
          <Form />
          <div className="item p-4 pb-5">
            <div className="row mb-3">
              <Mainicon />
              <WeatherDescr />
            </div>
            <div className="row" id="forecast"></div>
          </div>
        </div>
        <p>
          <a
            href="https://github.com/solntseva93/SheCodesPlusProject"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourse code
          </a>
          &nbsp;by Olena Solntseva
        </p>
      </div>
    </div>
  );
}
