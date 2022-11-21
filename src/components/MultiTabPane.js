import React, {useState} from "react";
import Information from "./Information"
import TabBar from "./TabBar"
import "./css/MultiTabPane.css";


function MultiTabPane() {

  const [activeTab, setActiveTab] = useState("information");

  return (
    <div className="multi-tab-pane">
      <TabBar
      setActiveTab={setActiveTab}
      activeTab={activeTab}/>
      <Information />
    </div>
  )
}

export default MultiTabPane;
