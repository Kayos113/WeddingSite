import React from "react";
import Banner from "./Banner.js";
import Countdown from "./Countdown.js";
import "./css/Header.css";
// import background from "./images/court_gaze_close_4898x3265.jpg";
import background from "./images/engagement/b_w_grass.jpg"

function Header() {

  return (
    <div className="Header-Component">
      <div className="header">

        <img src={background} className="background-image" alt="" />

        <Banner />

        <Countdown />

      </div>
    </div>);
}

export default Header;
