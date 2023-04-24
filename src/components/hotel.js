import React from "react";

function hotel(props) {
  /* Props:
  hotelName,
  link,
  address,
  phone,
  email,
  block
  */
  return (
    <div>
      <div className="hotel-entry">
        <a href={props.link} rel="noreferrer" target="_blank" className="link hotel-name">{props.hotelName}</a>

        <p className="info address">{props.address}</p>
        <p className="info phone">{props.phone}</p>
        <p className="info email">{props.email}</p>
      {  // <p className="info block">{props.block}</p>
      }

      </div>
    </div>
  )
}

export default hotel;
