import React, {useState} from "react";
import Information from "./Information";
import InterestForm from "./InterestForm"
import Itinerary from "./Itinerary";
import Accomodations from "./HotelTab";
import Rsvp from "./Rsvp";
import Faq from "./faqTab";
import TabBar from "./TabBar";
import "./css/MultiTabPane.css";


function MultiTabPane() {

  const [activeTab, setActiveTab] = useState("information");
  const renderedTab = () => {
    switch(activeTab) {
      case "itinerary":   return <Itinerary />;
      case "information": return <Information />;
      case "interest":    return <InterestForm />;
      case "faq":         return <Faq />
      case "rsvp":        return <Rsvp />;
      case "accomodations": return <Accomodations/>;
      default:            return <h1>How did you get here?</h1>
    }
  }

  return (
    <div className="multi-tab-pane">
      <TabBar
      setActiveTab={setActiveTab}
      activeTab={activeTab}/>

      {renderedTab()}


    </div>
  )
}

export default MultiTabPane;
