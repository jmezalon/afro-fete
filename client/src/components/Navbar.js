import { NavLink } from "react-router-dom";
import "../styles/nav.css";

function Navbar() {
  // const history = useHistory();
  //   const user = { full_name: "Max Mezalon" };
  const user = null;
  function handleLogout() {
    //     fetch("/logout", {
    //       method: "DELETE",
    //     }).then((r) => {
    //       if (r.ok) {
    //         setUser(null);
    //         history.push("/");
    //       }
    //     });
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
            <p>{user.full_name[0]}</p>
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
