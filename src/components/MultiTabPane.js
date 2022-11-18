import React from "react";
import Information from "./Information"
import TabBar from "./TabBar"
import "./css/MultiTabPane.css";


function MultiTabPane() {

  return (
    <div className="multi-tab-pane">
      <TabBar />
      <Information />
    </div>
  )
}

export default MultiTabPane;
