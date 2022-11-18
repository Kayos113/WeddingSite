import React from "react";
import "./css/TabBar.css";

function Transition() {

  function tabClick() {
    return false;
  }

  return (

    <div className="tab-bar">
    <button href="#" className="tab active" onClick={tabClick}>

        <h2>Info</h2>

    </button>
    <button href="#" className="tab" onClick={tabClick}>

        <h2>Itinerary</h2>

    </button>


    </div>
  )
}

export default Transition;
