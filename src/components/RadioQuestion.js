import React from "react";

function RadioQuestion(props) {
  return (
    <div className="radio-question">

      // <p className="headline">Will you be bringing a Plus One?</p>
      // <p className="tagline">(Third option is for poly friends)</p>
      <p className="headline">{props.question}</p>
      {props.tagline===true?null:<p className="tagline">{props.tagline}</p>}

      <div className="radio-container">

        {// <div className="single-radio">
        //   <input type="radio" name="plus-one" id="no-plus" value="No Plus One"/>
        //   <label for="no-plus">No Plus One</label>
        // </div>
        //
        // <div className="single-radio">
        //   <input type="radio" name="plus-one" id="plus-one" value="Plus One"/>
        //   <label for="plus-one">Plus One</label>
        // </div>
        //
        // <div className="single-radio">
        //   <input type="radio" name="plus-one" id="plus-more" value="Plus More than One"/>
        //   <label for="plus-more">Plus More than One</label>
        // </div>
      }

      </div> {//End of radio-container
      }

    </div> //end of radio-question
  );
}

export default = RadioQuestion;
