import React from "react";

import Title from "../../components/Title";
import Table from "../../components/Table";
import Greeting from "../../components/Greeting";

import "../WeatherForecast/index.scss";

const WeatherForecast = () => {
  return (
    <div className="main-container">
      <Title />
      <Table />
      <Greeting />
    </div>
  );
};

export default WeatherForecast;
