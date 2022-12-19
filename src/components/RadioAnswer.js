import React from "react";

function RadioAnswer(props) {

  // <div className="single-radio">
  //   <input type="radio" name="plus-one" id="no-plus" value="No Plus One"/>
  //   <label htmlFor="no-plus">No Plus One</label>
  // </div>
  return (
    <div className="single-radio">
      <input type="radio" name={props.name} id={props.id} value={props.value}/>
      <label htmlFor={props.id}>{props.value}</label>
    </div>
  );
}

export default RadioAnswer;
