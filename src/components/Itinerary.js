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
          rightCol="12pm"
          caption="Join us Friday starting at noon as we arrive and check in for the weekend."
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
          rightCol="7:30pm"
          caption="Any guest who would like to take the stage is welcome to as we cut loose and perform for one another in a low pressure environment. Sign-up sheet to come"
        />
      </article>

      <div className="parralax par_four"/>

      <article>
        <h1>Saturday</h1>
        <ItineraryEntry
          leftCol="First Look"
          rightCol="3pm"
          caption="The Bride and Groom will be having a private first look before the ceremony."
        />
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
          leftCol="Party"
          rightCol="8pm"
          caption="Music, Bonfires and a heated pool are all available for you to enjoy yourself and celebrate with us!"
        />
      </article>

      <div className="parralax par_five"/>

      <article>
        <h1>Sunday</h1>
        <ItineraryEntry
          leftCol="Sunday Brunch"
          rightCol="9am"
          caption="Join us for brunch, or make your own. Alternatively, just sleep. It's your life."
        />
        <ItineraryEntry
          leftCol="Check Out"
          rightCol="1pm"
          caption="Sleep off the wedding sized hangovers. Then leave."
        />
      </article>

      <div className="parralax par_six"/>

    </div>
  )
}

export default Itinerary;
