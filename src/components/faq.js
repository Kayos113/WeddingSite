import React from "react";

function faq(props) {
  return (<div>
    <div className="faq-entry">
    <p className="question"><strong>Q:</strong> {props.question}</p>
    <p classNAme="answer"><strong>A:</strong> {props.answer}</p>
    </div>
  </div>)
}

export default faq;
