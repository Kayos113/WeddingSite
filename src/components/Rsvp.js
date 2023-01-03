import React, {useEffect, useState} from "react";
import RadioQuestion from "./RadioQuestion";
import "./css/rsvp.css";
import "./css/forms.css";
import floral from "./images/floral-vector-cream.svg";

import {radioInitState, attendanceOptions, arrivalOptions, accomodationsOptions} from "./data/rsvpRadioQuestions.js";
import {radioLogic, numberChange, textfieldLogic} from "./js/rsvpController.js";

function Rsvp() {

  const [guestCount, setGuestCount] = useState(0);
  const [radioAnswers, setRadioAnswers] = useState(radioInitState);
  const [guestNames, setGuestNames] = useState([]);

  useEffect( () => {
    let guestArr=[];
    for(let i=0; i<guestCount; i++) {
      let identifier = "guest"+i;
      guestArr.push({id: identifier, name:""});
    }
    setGuestNames(guestArr);
  }, [guestCount]); // this must be done in a useEffect as changing state causes a re-render so lumping it in with the getTextfields was causing an infinite loop as re-rendering would trigger the getTextfields which would change the guestNames state whih would trigger a re-render. UseEffect will only run once everytime guestCount changes

  function radioInput(event) {
    const { value, name } = event.target;
    setRadioAnswers( (prevValue) => radioLogic(prevValue, value, name) );
    console.log(radioAnswers);
  };


  function getTextfields() {
    let textfields = [];
    if(guestCount>0){
        for(let i=0; i<guestCount; i++) {
        let identifier="guest"+i;
        textfields.push(<input type="text" id={identifier} key={identifier} className="textfield" name="guestName" placeholder={"Name of Guest "+(i+1)} onChange={onTextInput}/>);
      }
    }
    return textfields;
  }
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
          <h4>How many Guests in your party?</h4>
          <input type="number" id="guest-count" name="guestCount" className="numberfield" onChange={ (event) => setGuestCount(numberChange(event))}/>
          <div className="textfields">
            {getTextfields()}
          </div>

          <RadioQuestion
          question="I will..."
          name="attendance"
          options={attendanceOptions}
          inputFunction={radioInput}
          />
          <RadioQuestion
          question="I plan to arrive on..."
          name="arrival"
          options={arrivalOptions}
          inputFunction={radioInput}
          />
          <RadioQuestion
          question="Where would you prefer to stay?"
          tagline="On-site accomodations are limited"
          name="accomodations"
          options={accomodationsOptions}
          inputFunction={radioInput}
          />

          <input type="submit" />

        </form>

        <img src={floral} className="floral flip" alt=""/>
      </article>
    </div>
  );
}

export default Rsvp;
