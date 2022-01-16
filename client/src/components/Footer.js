import { NavLink } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="left-side-logo">
        <NavLink exact to="/">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/afrofete_white.png"}
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="right-side-options">
        <NavLink exact to="/about-us">
          <p>About Us</p>
        </NavLink>
        <NavLink to="/how-it-works">
          <p>How It Works</p>
        </NavLink>
        <NavLink to="/contact-us">
          <p>Contact Us</p>
        </NavLink>
        <NavLink to="/site-map">
          <p>Site Map</p>
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
