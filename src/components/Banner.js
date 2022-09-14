import React from "react";
import floral from "./images/floral-vector-cream.svg";

function Banner() {
  return (
    <div className="text-card">
      <img src={floral} alt=""/>
      <h1>Natalie and William</h1>
      <div className="save-date">
        <div className="date">
          <h6 className="subscript">Save the Date:</h6>
          <h6>September 16, 2023</h6>
        </div>
        <a className="rsvp" href="#information">
          <h6>Info ↓</h6>
        </a>

      </div>
    </div>
  );
}

export default Banner;
