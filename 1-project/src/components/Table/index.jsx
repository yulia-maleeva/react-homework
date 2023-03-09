import React from "react";

import "./index.scss";

const Table = () => {
  return (
    <div className="table">
      <div className="block item1">
        <p>Lisbon</p>
        <p className="weather-value">21°C</p>
      </div>
      <div className="block item2">
        <p>Paris</p>
        <p className="weather-value">11°C</p>
      </div>
      <div className="block item3">
        <p>Belgrade</p>
        <p className="weather-value">15°C</p>
      </div>
      <div className="block item4">
        <p>Venice</p>
        <p className="weather-value">21°C</p>
      </div>
      <div className="block item5">
        <p>Tel-Avive</p>
        <p className="weather-value">32°C</p>
      </div>
      <div className="block item6">
        <p>Cair</p>
        <p className="weather-value">21°C</p>
      </div>
      <div className="block item7">
        <p>New-York</p>
        <p className="weather-value">17°C</p>
      </div>
      <div className="block item8">
        <p>New-Delhi</p>
        <p className="weather-value">17°C</p>
      </div>
      <div className="block item9">
        <p>San-Francisco</p>
        <p className="weather-value">15°C</p>
      </div>
      <div className="block item10">
        <p>Tokyo</p>
        <p className="weather-value">8°C</p>
      </div>
      <div className="block item11">
        <p>Sydney</p>
        <p className="weather-value">25°C</p>
      </div>
    </div>
  );
};

export default Table;
