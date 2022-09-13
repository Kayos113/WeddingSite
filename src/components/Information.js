import "./css/Information.css"
import brophyAerial from "./images/brophy_aerial.jpg";

function Information() {

  return (
    <div className="information" id="information">

    <article>
      <a href="https://estatesbybrophy.com/" rel="noreferrer" target="_blank" class="image">
        <img src={brophyAerial} alt="Estates by Brophy - Aerial View" />
      </a>
    </article>

    </div>
  )
}

export default Information;
