import React from "react";
import floral from "../images/floral-vector-cream.svg";

function Banner() {
  return (
    <div className="text-card">
      <img src={floral} alt=""/>
      <h1>Natalie and William</h1>
      <div className="save-date">
        <div className="date">
          <p className="subscript">Save the Date:</p>
          <p>September 16, 2023</p>
        </div>
        <a className="rsvp" href="#information">
          <h3>Info ↓</h3>
        </a>

      </div>
    </div>
  );
}

export default Banner;
