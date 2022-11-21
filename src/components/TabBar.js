import React, {useState} from "react";
import "./css/TabBar.css";

function Transition(props) {

const [informationClasses, setInformationClasses] = useState("tab active");
const [itineraryClasses, setItineraryClasses] = useState("tab");

  function tabClick(tabName) {
    resetTabClasses();
    props.setActiveTab(tabName);
    switch(tabName) {
      case "intinerary":
        setItineraryClasses("tab active");
      break;
      case "information":
      default:
        setInformationClasses("tab active");
      break;
    }
    return false;
  }

  function resetTabClasses() {
    setInformationClasses("tab");
    setItineraryClasses("tab");
  }

  return (

    <div className="tab-bar">
    <button href="#" className={informationClasses} onClick={() => tabClick("information")}>

        <h2>Info</h2>

    </button>
    <button href="#" className={itineraryClasses} onClick={() => tabClick("intinerary")}>

        <h2>Itinerary</h2>

    </button>


    </div>
  )
}

export default Transition;
