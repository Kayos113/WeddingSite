import React, {useEffect, useState} from "react";
import axios from "axios";
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
  const [alertClasses, setAlertClasses] = useState("alert hidden");
  const [buttonClasses, setButtonClasses] = useState("");
  const [responseClasses, setResponseClasses] = useState("hidden");

  useEffect( () => {
    setGuestNames(numberLogic(guestCount));
  }, [guestCount]); // this must be done in a useEffect as changing state causes a re-render so lumping it in with the getTextfields was causing an infinite loop as re-rendering would trigger the getTextfields which would change the guestNames state whih would trigger a re-render. UseEffect will only run once everytime guestCount changes

  function onRadioInput(event) {
    const { value, name } = event.target;
    setRadioAnswers( (prevValue) => radioLogic(prevValue, value, name) );
  };
  function onTextInput(event) {
    const { id, value } = event.target;
    setGuestNames( (prevValue) => textfieldLogic(prevValue, value, id));
  }
  function onSubmit(event) {
    event.preventDefault();

    /*
    // TODO:
      - Check that all the states currently possess all the neccessary info
        If not: do not send response and prompt user to enter info
        If so : send response to the db and thank the user for their response
          Bonus points if it is dynamically "Looking forward to seeing you," or "Sorry you cannot make it, you will be missed," messages.

        rsvpSchema:
          numOfGuests: Number,
          names: [String],
          radioAnswers: Map of Strings,
          responseDate: Date
    */

    const radioBool = validateRadioAnswers();
    const nameBool = validateTextfields();
    if(!radioBool || !nameBool) { // There is information missing...
      setAlertClasses("alert");
    } else { // we have all the information needed. Build the object to send, then send via axios
      const responseData = {
        numOfGuests: guestCount,
        names: guestNames,
        radioAnswers: radioAnswers,
        responseDate: Date.now()
      }
      axios({
        method: "post",
        url: "https://hunterknappwedding.herokuapp.com/rsvp", // <-- PUT THE URL HERE AND IT WILL BE DONE
        data: responseData
      })
      .then( res => {
        console.log("Response successfully sent");
        setButtonClasses("hidden");
        setResponseClasses("");
      })
      .catch( err => {
        console.log( err );
      });
    }
  }
  function validateRadioAnswers() {
    let bool = true;
    radioAnswers.forEach( answer => {
      if(answer.value==="unanswered") {
        bool = false;
      }
    });
    return bool;
  }
  function validateTextfields() {
    let bool = true;
    guestNames.forEach( name => {
      if(name==="") {
        bool = false;
      }
    });
    return bool;
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
          tagline="On-site accomodations will be assigned by us taking this into consideration."
          name="accomodations"
          options={accomodationsOptions}
          inputFunction={onRadioInput}
          />
          <p className={alertClasses}>Please answer all questions.</p>
          <input type="submit" className={buttonClasses}/>
          <p className={responseClasses}>Thank You for Responding!</p>
        </form>

        <img src={floral} className="floral flip" alt=""/>
      </article>
    </div>
  );
}

export default Rsvp;
