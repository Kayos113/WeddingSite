import React, {useState} from "react";
import RadioQuestion from "./RadioQuestion";
import "./css/InterestForm.css";

function InterestForm() {

  const [name, setName] = useState("");

  function textInput(event) {
    const { value } = event.target;
    setName(value);
  }

  function onSubmit(event) {
    event.preventDefault();
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
          />

          <RadioQuestion
            question="Will you be bringing a Plus One"
            tagline="(Third option is for poly friends)"
            name="plus-one"
            options={plusOneOptions}
          />

          <input type="submit" />

        </form>
      </article>
    </div>
  )
}

export default InterestForm;
