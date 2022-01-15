import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/nav.css";
import { userLogout } from "../features/users/usersSlice";

function Navbar() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
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

  let initials;

  if (user) {
    let nameArr = user.full_name.split(" ");

    initials = nameArr[0][0] + nameArr[1][0];
  }

  return (
    <nav className="nav-container">
      <div className="left-side-nav">
        <NavLink exact to="/">
          {/* <img src="logo/afrofete_logo.png" alt="logo" /> */}
          <h1>Afro-fete</h1>
        </NavLink>
      </div>
      <div className="right-side-nav">
        <NavLink exact to="/about-us">
          <p>About Us</p>
        </NavLink>
        <NavLink to="/how-it-works">
          <p>How It Works</p>
        </NavLink>
        {!user && (
          <NavLink id="login-active" to="/auth/login">
            <button>Login</button>
          </NavLink>
        )}
        {!user && (
          <NavLink id="signup-active" to="/auth/signup">
            <button>Sign Up</button>
          </NavLink>
        )}
        {user && (
          <NavLink to="/post-a-photo">
            <p>Post A Photo</p>
          </NavLink>
        )}
        {user && (
          <NavLink to="/photo-gallery">
            <p>Photo Gallery</p>
          </NavLink>
        )}
        {user && (
          <NavLink id="profile-init" to="/profile">
            <p>{initials.toUpperCase()}</p>
          </NavLink>
        )}
        {user && (
          <NavLink to="/">
            <button onClick={handleLogout}>Logout</button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
