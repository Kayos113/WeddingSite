import React from "react";

function ItineraryEntry(props) {
  return (
    <div className="entry-container">
      <div className="time-container">
        <div/>
        <p>{props.leftCol}</p>
        <p>{props.rightCol}</p>
        <div/>
      </div>
      {props.caption===true?null:<p className="caption">{props.caption}</p>}
    </div>

  )
}

export default ItineraryEntry;
