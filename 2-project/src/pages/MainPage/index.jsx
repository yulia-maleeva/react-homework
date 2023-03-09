import React from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Blog from "../../components/Blog";
import News from "../../components/News";

import "./index.scss";

const MainPage = () => {
  return (
    <div className="main-container">
      <Header />
      <Banner />
      <div className="entertaiment-container">
        <Blog />
        <News />
      </div>
    </div>
  );
};

export default MainPage;
