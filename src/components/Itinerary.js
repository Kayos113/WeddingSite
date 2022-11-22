import React from "react";
import ItineraryEntry from "./ItineraryEntry";
import "./css/Itinerary.css";

function Itinerary() {

  return(
    <div className="tab-container">

      <article>
        <h1>Friday</h1>
        <ItineraryEntry
          leftCol="Check-in"
          rightCol="1pm"
          caption="Join us Friday starting at 1pm as we check in to our venue."
        />
      </article>

      {//<div className="parralax par_two"/>
      }

    </div>
  )
}

export default Itinerary;
