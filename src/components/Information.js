import "./css/Information.css"
import brophyAerial from "./images/brophy_aerial.jpg";
const brophyLink = "https://estatesbybrophy.com/";

function Information() {

  return (
    <div className="tab-container">

    <article>
      <h1>Dates</h1>
      <p>The event will be held over the entire weekend<br/> 9/15/23 - 9/17/23 with the ceremony occuring Saturday.</p>
      <p>Guests can arrive as early as Friday to enjoy<br/>beautiful upstate New York with us.</p>
      <p>Help us make our memory, and make some of your own!</p>
      {// <p>S'mores may be included.</p>
    }</article>

    <div className="parralax par_one"></div>

    <article>
      <h1>Location</h1>
      <a href={brophyLink} rel="noreferrer" target="_blank" className="image">
        <img src={brophyAerial} alt="Estates by Brophy - Aerial View" />
      </a>
      <h4>Estates By Brophy</h4>
      <p>Fishs Eddy, New York 13774</p>
      <br/>
      <h4>Accomodations</h4>
      <p>On-site Accomodations are now full, Other Accomodations 15-20 min drive away</p>
      <p>We are looking forward to seeing everyone, and staying with those of you who are on-site.</p>
      <p>For those not on-site, we have communicated with local hotels to set up blocks of rooms for you too book.</p>
      <p>If you have any questions or concerns feel free to reach out.</p>
    </article>

    <div className="parralax par_two"></div>

    <article>
      <h1>Catering, RSVP, Registry & more</h1>
      <p>The evening of the wedding will be catered as we host the reception. We will also be hosting a brunch the morning after as a farewell. All other meals may not be provided.</p>
      <br/>
      <p>RSVP, and Registry incoming...</p>
    </article>

    <div className="parralax par_three"></div>


  </div>
  )
}

export default Information;
