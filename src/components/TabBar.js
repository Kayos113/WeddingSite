import React, {useState} from "react";
import "./css/TabBar.css";

function Transition(props) {

const [informationClasses, setInformationClasses] = useState("tab active");
const [itineraryClasses, setItineraryClasses] = useState("tab");
const [interestFormClasses, setInterestFormClasses] = useState("tab");

  function tabClick(tabName) {
    resetTabClasses();
    props.setActiveTab(tabName);
    switch(tabName) {
      case "itinerary":
        setItineraryClasses("tab active");
      break;
      case "interest":
        setInterestFormClasses("tab active");
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
    setInterestFormClasses("tab");
  }

  return (

    <div className="tab-bar">
    <button href="#" className={informationClasses} onClick={() => tabClick("information")}>

        <h2>Info</h2>

    </button>
    <button href="#" className={itineraryClasses} onClick={() => tabClick("itinerary")}>

        <h2>Itinerary</h2>

    </button>
    <button href="#" className={interestFormClasses} onClick={() => tabClick("interest")}>

        <h2>I'm Interested</h2>

    </button>

    </div>
  )
}

export default Transition;
