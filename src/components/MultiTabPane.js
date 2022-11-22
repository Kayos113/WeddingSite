import React, {useState} from "react";
import Information from "./Information";
import Itinerary from "./Itinerary";
import TabBar from "./TabBar";
import "./css/MultiTabPane.css";


function MultiTabPane() {

  const [activeTab, setActiveTab] = useState("information");
  const renderedTab = () => {
    switch(activeTab) {
      case "itinerary":   return <Itinerary />;
      case "information": return <Information />;
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
