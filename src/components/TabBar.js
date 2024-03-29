import React, {useState} from "react";
import "./css/TabBar.css";

function TabBar(props) {

const [informationClasses, setInformationClasses] = useState("tab active");
const [itineraryClasses, setItineraryClasses] = useState("tab");
// const [interestFormClasses, setInterestFormClasses] = useState("tab");
const [accomodationsClasses, setAccomodationsClasses] = useState("tab");
const [rsvpClasses, setRsvpClasses] = useState("tab");
const [faqClasses, setFaqClasses] = useState("tab");
const stationaryClasses = "tab";

// const registryURL = "https://www.amazon.com/wedding/natalie-hunter-will-knapp--september-2023/registry/3DUZUADVLKGWR";
const honeymoonURL = "https://www.zola.com/registry/collection-item/64998432ca9c8c0316e785ca";
/*
  This could all be done with one useState for efficiency. The useState would be an array of strings with an idex refering to a specific tab,
  0 - informationClasses
  1 - itineraryClasses
  2 - interestFormClasses
  3 - rsvpClasses
  etc.

  I will not impliment this at this exact moment as it would distract me from finalizing the backend for the rsvp
*/

  function tabClick(tabName) {
    resetTabClasses();
    props.setActiveTab(tabName);
    switch(tabName) {
      case "itinerary":
        setItineraryClasses("tab active");
      break;
      // case "interest":
      //   setInterestFormClasses("tab active");
      //   break;
      case "accomodations":
        setAccomodationsClasses("tab active");
        break;
      case "rsvp":
        setRsvpClasses("tab active");
        break;
      case "faq":
        setFaqClasses("tab active");
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
    // setInterestFormClasses("tab");
    setFaqClasses("tab");
    setAccomodationsClasses("tab");
    setRsvpClasses("tab");
  }

  return (

    <div className="tab-bar">
    <button href="#" className={informationClasses} onClick={() => tabClick("information")}>

        <h2>Info</h2>

    </button>
    <button href="#" className={itineraryClasses} onClick={() => tabClick("itinerary")}>

        <h2>Itinerary</h2>

    </button>
{
     // <button href="#" className={interestFormClasses} onClick={() => tabClick("interest")}>
     //
     //     <h2>I'm Interested</h2>
     //
     // </button>
}
    <button href="#" className={rsvpClasses} onClick={() => tabClick("rsvp")}>

        <h2>RSVP</h2>

    </button>

{
    // <a href={registryURL} className={stationaryClasses} rel="noreferrer" target="_blank" >
    //
    //   <h2>Registry</h2>
    //
    // </a>
}

    <a href={honeymoonURL} className={stationaryClasses + " wide-tab"} rel="noreferrer" target="_blank" >

      <h2>Honeymoon Fund</h2>

    </a>

    <button href="#" className={accomodationsClasses} onClick={() => tabClick("accomodations")}>

      <h2>Hotels</h2>

    </button>

    <button href='#' className={faqClasses} onClick={() => tabClick("faq")}>

        <h2>FAQ</h2>

    </button>

    </div>
  )
}

export default TabBar;
