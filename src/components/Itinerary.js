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
          rightCol="1pm the Earliest"
          caption="Join us Friday starting at 1pm as we arrive and check in for the weekend."
        />
        <ItineraryEntry
          leftCol="Scavenger Hunt"
          rightCol="All Day"
          caption="A Themed Scavenger Hunt will be taking place across the entire property. Prize: 1 drink from the open bar Saturday night."
        />
        <ItineraryEntry
          leftCol="Rehearasl Dinner"
          rightCol="5pm"
          caption="The wedding party is invited to join us in the banquet hall for our rehearsal dinner while all other guests have free roam of the property."
        />
        <ItineraryEntry
          leftCol="Cabaret"
          rightCol="8pm"
          caption="Any guest who would like to take the stage is welcome to as we cut loose and perform for one another in a low pressure environment. Sign-up sheet to come."
        />
      </article>

      <div className="parralax par_four"/>

      <article>
        <h1>Saturday</h1>
        <ItineraryEntry
          leftCol="Ceremony"
          rightCol="5pm"
        />
        <ItineraryEntry
          leftCol="Cocktail Party"
          rightCol="6pm"
        />
        <ItineraryEntry
          leftCol="Dinner"
          rightCol="7pm"
        />
        <ItineraryEntry
          leftCol="Dance Time!"
          rightCol="8pm"
        />
        <ItineraryEntry
          leftCol="Campfire and S'mores"
          rightCol="10pm"
          caption="Starting at 10pm there will be bonfires and a heated pool are available for you to keep the party going if you want to step away from the music."
        />
        <ItineraryEntry
          leftCol="Banquet Hall closed"
          rightCol="11pm"
          caption="The DJ will finish performing and begin packing up allowing us all to move to the fires, pools and hot tubs!"
        />
      </article>

      <div className="parralax par_five"/>

      <article>
        <h1>Sunday</h1>
        <ItineraryEntry
          leftCol="Sunday Brunch"
          rightCol="10am"
          caption="Join us for brunch, or make your own. Alternatively, just sleep. It's your life."
        />
        <ItineraryEntry
          leftCol="Check Out"
          rightCol="12pm"
          caption="Sleep off the wedding sized hangovers. Then leave. By noon."
        />
      </article>

      <div className="parralax par_six"/>

    </div>
  )
}

export default Itinerary;
