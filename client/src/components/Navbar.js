import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/nav.scss";
import { useState } from "react";
import { userLogout } from "../features/users/usersSlice";
import { showEvents } from "../features/events/eventsSlice";
import { resetSingleTag } from "../features/hashtags/hashtagsSlice";

import { resetFavorite } from "../features/favorites/favoritesSlice";

function Navbar() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const dispatch = useDispatch();

  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        dispatch(userLogout());
        history.push("/");
      }
    });
  }

  function toggleNavBar() {
    setNavbarOpen(!navbarOpen);
  }

  let initials;

  if (user) {
    let nameArr = user.full_name.split(" ");

    initials = nameArr[0][0] + nameArr[1][0];
  }

  return (
    <nav className="navbar">
      <div
        onClick={() => {
          dispatch(showEvents(true));
          dispatch(resetSingleTag());
          dispatch(resetFavorite());
        }}
        className="navbar__left-side"
      >
        <NavLink exact to="/">
          <img
            className="navbar__logo"
            src={process.env.PUBLIC_URL + "/afrofete_logo.png"}
            alt="logo"
            onClick={() => setNavbarOpen(false)}
          />
        </NavLink>
      </div>
      <div
        className={
          !navbarOpen ? "navbar__right-side" : "navbar__mobile-right-side"
        }
        onClick={() => setNavbarOpen(false)}
      >
        <NavLink
          className="navbar__right-side__non-button-links"
          exact
          to="/about-us"
        >
          <p>About Us</p>
        </NavLink>
        <NavLink
          className="navbar__right-side__non-button-links"
          to="/how-it-works"
        >
          <p>How It Works</p>
        </NavLink>
        {!user && (
          <div
            className={
              !navbarOpen
                ? "navbar__right-side__auth-buttons"
                : "navbar__mobile-right-side__auth-buttons"
            }
          >
            <NavLink to="/auth/login">
              <button>Login</button>
            </NavLink>

            <NavLink to="/auth/signup">
              <button>Sign Up</button>
            </NavLink>
          </div>
        )}
        {user && (
          <NavLink
            to="/post-a-photo"
            className="navbar__right-side__non-button-links"
          >
            <p>Post A Photo</p>
          </NavLink>
        )}
        {user && (
          <NavLink
            to="/photo-gallery"
            className="navbar__right-side__non-button-links"
          >
            <p>Photo Gallery</p>
          </NavLink>
        )}
        {user && (
          <NavLink id={!navbarOpen ? "profile-init" : ""} to="/profile">
            <p id="mobile-profile-initial">{initials.toUpperCase()}</p>
          </NavLink>
        )}
        {user && (
          <NavLink to="/">
            <button onClick={handleLogout}>Logout</button>
          </NavLink>
        )}
      </div>
      <div className="navbar__mobile-menu-options" onClick={toggleNavBar}>
        {navbarOpen ? "X" : "="}
      </div>
    </nav>
  );
}

export default Navbar;
