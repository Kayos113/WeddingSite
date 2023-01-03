import React, {useEffect, useState} from "react";
import RadioQuestion from "./RadioQuestion";
import "./css/rsvp.css";
import "./css/forms.css";
import floral from "./images/floral-vector-cream.svg";

import {radioInitState, attendanceOptions, arrivalOptions, accomodationsOptions} from "./data/rsvpRadioQuestions.js";
import {radioLogic, numberChange, getTextfields, numberLogic, textfieldLogic} from "./js/rsvpController.js";

function Rsvp() {

  const [guestCount, setGuestCount] = useState(0);
  const [radioAnswers, setRadioAnswers] = useState(radioInitState);
  const [guestNames, setGuestNames] = useState([]);

  useEffect( () => {
    setGuestNames(numberLogic(guestCount));
  }, [guestCount]); // this must be done in a useEffect as changing state causes a re-render so lumping it in with the getTextfields was causing an infinite loop as re-rendering would trigger the getTextfields which would change the guestNames state whih would trigger a re-render. UseEffect will only run once everytime guestCount changes

  function onRadioInput(event) {
    const { value, name } = event.target;
    setRadioAnswers( (prevValue) => radioLogic(prevValue, value, name) );
    console.log(radioAnswers);
  };
  function onTextInput(event) {
    const { id, value } = event.target;
    setGuestNames( (prevValue) => textfieldLogic(prevValue, value, id));
  }
  function onSubmit(event) {
    event.preventDefault();
    console.log(radioAnswers + "\n" +guestNames)
  }

  return (
    <div className="tab-container">
      <article className="rsvp-form">
        <img src={floral} className="floral" alt=""/>

        <h1>RSVP</h1>

        <form onSubmit={onSubmit}>
          <h4>How many Guests are in your party?</h4>
          <input type="number" id="guest-count" name="guestCount" className="numberfield" onChange={ (event) => setGuestCount(numberChange(event))}/>
          <div className="textfields">
            {getTextfields(guestCount, onTextInput)}
          </div>

          <RadioQuestion
          question="I will..."
          name="attendance"
          options={attendanceOptions}
          inputFunction={onRadioInput}
          />
          <RadioQuestion
          question="I plan to arrive on..."
          name="arrival"
          options={arrivalOptions}
          inputFunction={onRadioInput}
          />
          <RadioQuestion
          question="Where would you prefer to stay?"
          tagline="On-site accomodations are limited"
          name="accomodations"
          options={accomodationsOptions}
          inputFunction={onRadioInput}
          />

          <input type="submit" />

        </form>

        <img src={floral} className="floral flip" alt=""/>
      </article>
    </div>
  );
}

export default Rsvp;
