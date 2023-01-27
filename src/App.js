import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/estelbento/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced code
          </a>{" "}
          by Estela Bento
        </footer>
      </div>
    </div>
  );
}
