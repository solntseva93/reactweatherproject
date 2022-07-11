import React from "react";
import "./index.css";
import Weatherapp from "./Weatherapp";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container">
      <div className="w-50 mx-auto">
        <div className="tested"></div>
        <div className="border rounded-3 p-3">
          <Weatherapp />
        </div>
        <p>
          <a
            href="https://github.com/solntseva93/reactweatherproject"
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
