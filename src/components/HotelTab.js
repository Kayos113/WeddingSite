import React from "react";
import HotelEntry from "./hotel";
import { hotelData } from "./data/hotelData.js";
import "./css/hotel.css";

function HotelTab() {

  function hotelElems(arr) {
    let entries=[];
    arr.forEach( (entry, index) => {
      entries.push(
        <HotelEntry
          hotelName={entry.hotelName}
          link={entry.link}
          address={entry.address}
          phone={entry.phone}
          email={entry.email}
          block={entry.block}
        />
      )
    });
    return entries;
  }

  /*
  hotelData array [
  hotelName,
  link,
  address,
  phone,
  email,
  blocks
  ]
  */

  return (
    <div className="tab-container">
      <article>
        <h1>Accomodation Recommendation</h1>
        {hotelElems(hotelData)}
      </article>
    </div>
  )

}

export default HotelTab;
