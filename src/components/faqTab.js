import React from "react";
import FAQEntry from "./faq";
import { faqBasics, faqAccomodations, faqETC } from "./data/faqData.js";
import "./css/faq.css";

function faqTab() {

  function faqElems(arr) {
    let entries = [];
    arr.forEach( (entry, index) => {
      entries.push(<FAQEntry question={entry.question} answer={entry.answer} key={"entry"+index} />)
    });
    return entries;
  }

  return (<div className="tab-container">
      <article>
        <h1>FAQ</h1>

        <h1 className="faq-section-title">General Questions</h1>

        {faqElems(faqBasics)}

        <h1 className="faq-section-title">Accomodations</h1>

        {faqElems(faqAccomodations)}

        <h1 className="faq-section-title">Oddly Specific</h1>

        {faqElems(faqETC)}
        {
        //   <FAQEntry
        //   question="Should we book our own rooms at your venue?"
        //   answer="No. Our venue does have limited space for accomodations which is going to be coordinated by us and the venue to fit as many quests as possible with a preference given to family, and the wedding party. There are also be nearby hotels with blocks of rooms to reserve coordinated by the wedding, or numerous nice AirBnB, Vrbo and other lodgings if you are inclined to find your own."
        // />
        //
        // <FAQEntry
        //   question="Congratulations!"
        //   answer="Thank you! That's not really a question, but good hustle."
        // />
      }

      </article>
    </div>);
}

export default faqTab;
