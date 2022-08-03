import "./css/Header.css";
import floral from "../images/floral-vector-cream.svg";

function Header() {
  return (
    <div className="Header-Component">
      <div className="header">
        <div className="text-card">
          <img src={floral} alt=""/>
          <h1>Natalie and William</h1>
          <div className="save-date">
            <div className="date">
              <p className="subscript">Save the Date:</p>
              <p>September 16, 2023</p>
            </div>
            <div className="rsvp">
              <h3>RSVP ↓</h3>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default Header;
