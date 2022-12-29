import React, {useState} from "react";
import RadioQuestion from "./RadioQuestion";
import "./css/rsvp.css";
import "./css/forms.css";
import floral from "./images/floral-vector-cream.svg";

import {arrivalOptions, accomodationsOptions} from "./data/rsvpRadioQuestions.js";

function Rsvp() {

  const [guestCount, setGuestCount] = useState(0);
  const [radioAnswers, setRadioAnswers] = useState(
    [{
      name:"arrival",
      value:"not-answered"
    },
    {
      name:"accomodations",
      value:"not-answered"
    }
  ]
  );
  function radioInput(event) {
    const { value, name } = event.target;
    setRadioAnswers( (prevValue) => {
      if(name === "arrival") {
        return [{
          name:prevValue[0].name,
          value:value
        },
        {
          name:prevValue[1].name,
          value:prevValue[1].value
        }]
      }
      else if (name === "accomodations") {
        return [{
          name:prevValue[0].name,
          value:prevValue[0].value
        },
        {
          name:prevValue[1].name,
          value:value
        }]
      }
    });
    console.log(radioAnswers);
  }

  function numberChange(event) {
    const { value } = event.target;
    if(value<0) {
      setGuestCount(0);
    } else if(value>4) {
      setGuestCount(4);
    } else {
      setGuestCount(value);
    }
  }
  const getTextfields = () => {
    let textfields = [];
    for(let i=0; i<guestCount; i++) {
      textfields.push(<input type="text" key={"guest"+i} className="textfield" name="guestName" placeholder={"Name of Guest "+(i+1)}/>)
    }
    return textfields;
  }

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="tab-container">
      <article className="rsvp-form">
        <img src={floral} className="floral" alt=""/>

        <h1>RSVP</h1>

        <form onSubmit={onSubmit}>
          <h4>How many Guests in your party?</h4>
          <input type="number" id="guest-count" name="guestCount" className="numberfield" onChange={numberChange}/>
          <div className="textfields">
            {getTextfields()}
          </div>

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

        </form>

        <img src={floral} className="floral flip" alt=""/>
      </article>
    </div>
  );
}

export default Rsvp;
