import React, {useState} from "react";
import RadioQuestion from "./RadioQuestion";
import "./css/InterestForm.css";

function InterestForm() {

  const [name, setName] = useState("");
  const [radioAnswers, setRadioAnswers] = useState(
    [{
      name:"arrival",
      value:"not-answered"
    },
    {
      name:"plus-one",
      value:"not-answered"
    }]
  );

  function textInput(event) {
    const { value } = event.target;
    setName(value);
  }

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
      else if (name === "plus-one") {
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
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(name);
    console.log(radioAnswers);
  }

  const arrivalOptions = [
    {id: "friday",
    value:"Friday"},
    {id: "saturday",
    value:"Saturday"}
  ];

  const plusOneOptions = [
    {id: "no-plus",
    value:"No Plus One"},
    {id: "plus-one",
    value:"Plus One"},
    {id:"plus-more",
    value:"Plus More than One"}
  ];

  return (
    <div className="tab-container">
      <article className="interest-form">
        <form onSubmit={onSubmit}>

          <h4 className="headline">I'll be there!</h4>
          <p className="tagline">(Not an RSVP)</p>
          <input type="text" name="name" placeholder="Guest Name" className="textfield" onInput={textInput}/>

          <RadioQuestion
          question="Do you think you'll arrive Friday or Saturday?"
          name="arrival"
          options={arrivalOptions}
          inputFunction={radioInput}
          />

          <RadioQuestion
            question="Will you be bringing a Plus One"
            tagline="(Third option is for poly friends)"
            name="plus-one"
            options={plusOneOptions}
            inputFunction={radioInput}
          />

          <input type="submit" />

        </form>
      </article>
    </div>
  )
}

export default InterestForm;
