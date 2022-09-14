import "./css/Information.css"
import brophyAerial from "./images/brophy_aerial.jpg";
const brophyLink = "https://estatesbybrophy.com/";

function Information() {

  return (
    <div className="information" id="information">

    <article>
      <h1>Location</h1>
      <a href={brophyLink} rel="noreferrer" target="_blank" class="image">
        <img src={brophyAerial} alt="Estates by Brophy - Aerial View" />
      </a>
      <h4>Estates By Brophy</h4>
      <p>Fishs Eddy, New York 13774</p>
    </article>

    <article>
      <h1>Accomodations</h1>
      <p>Some Accomodations On-site<br/>
      Other Accomodation 15-20 min drive away</p>
    </article>
      </div>
  )
}

export default Information;
