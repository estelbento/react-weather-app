import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let apiKey = "4c49ad1f04ba82365a5494866toe342e";
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>wednesday 07:00</li>
        <li>mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="mostly cloudy"
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>precipitation: 15%</li>
            <li>humidity: 72%</li>
            <li>wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
