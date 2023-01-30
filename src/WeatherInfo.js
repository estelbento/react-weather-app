import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <img src={props.data.iconUrl} alt={props.data.icon} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>feels like: {Math.round(props.data.feelsLike)}°C</li>
            <li>humidity: {props.data.humidity}%</li>
            <li>wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
