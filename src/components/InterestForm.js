import React, {useState} from "react";
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

  return (
    <div className="tab-container">
      <article className="interest-form">
        <form onSubmit={onSubmit}>
          <h4>Are you Interested?</h4>
          <input type="text" name="name" placeholder="Guest Name" onInput={textInput}/>
          <div className="radio-container">
            <div className="single-radio">
              <input type="radio" name="arrival" id="friday" value="Friday-Sunday"/>
              <label for="friday">Friday Arrival</label>
            </div>
            <div className="single-radio">
              <input type="radio" name="arrival" id="saturday" value="Saturday-Sunday"/>
              <label for="saturday">Saturday Arrival</label>
            </div>
          </div>
          <div className="radio-container">
            <div className="single-radio">
              <input type="radio" name="plus-one" id="no-plus" value="No Plus One"/>
              <label for="no-plus">No Plus One</label>
            </div>
            <div className="single-radio">
              <input type="radio" name="plus-one" id="plus-one" value="Plus One"/>
              <label for="plus-one">Plus One</label>
            </div>
            <div className="single-radio">
              <input type="radio" name="plus-one" id="plus-more" value="Plus More than One"/>
              <label for="plus-more">Plus More than One</label>
            </div>
          </div>
        </form>
      </article>
    </div>
  )
}

export default InterestForm;
