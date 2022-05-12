import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/footer.scss";
import { showEvents } from "../features/events/eventsSlice";
import { resetSingleTag } from "../features/hashtags/hashtagsSlice";

function Footer() {
  const dispatch = useDispatch();
  return (
    <footer className="footer-container">
      <div
        onClick={() => {
          dispatch(showEvents(true));
          dispatch(resetSingleTag());
        }}
        className="footer-container__logo"
      >
        <NavLink exact to="/">
          <img
            src={process.env.PUBLIC_URL + "/afrofete_white.png"}
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="footer-container__right-side-options">
        <NavLink className="mobile-display-none" exact to="/about-us">
          <p>About Us</p>
        </NavLink>
        <NavLink className="mobile-display-none" to="/how-it-works">
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
