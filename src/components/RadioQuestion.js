import React from "react";
import RadioAnswer from "./RadioAnswer";

function RadioQuestion(props) {

  return (
    <div className="radio-question">

      <p className="headline">{props.question}</p>
      {props.tagline===true?null:<p className="tagline">{props.tagline}</p>}

      <div className="radio-container">

        {props.options.map( (answer, index) => {
          // map through array of radio options and render a RadioAnswer component for each one
            return <RadioAnswer key={index} name={props.name} id={answer.id} value={answer.value} inputFunction={props.inputFunction}/>
        })}

      </div> {//End of radio-container
      }

    </div> //end of radio-question
  );
}

export default RadioQuestion;
