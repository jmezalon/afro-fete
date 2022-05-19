import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { fetchUser } from "../../features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/auth.scss";
import { showEvents } from "../../features/events/eventsSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((state) => state.users.errors);
  const isLoading = useSelector((state) => state.users.status);
  const history = useHistory();
  const user = useSelector((state) => state.users.user);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchUser({ username: username.toLowerCase(), password }));
    setUsername("");
    setPassword("");
    dispatch(showEvents(true));
  }

  useEffect(() => {
    user && history.goBack();
  }, [user, history]);

  return (
    <div className="auth-container">
      <h4 className="auth-header">Log In</h4>
      <hr />
      <img className="auth-logo" src="/afrofete_logo.png" alt="logo" />
      <form action="login" onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="last-label">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="login-button">
          {isLoading === "loading" ? "Loading..." : "Login"}
        </button>
        <>
          {errors.map((err) => (
            <p style={{ color: "red" }} key={err}>
              {err}
            </p>
          ))}
        </>
      </form>
      <p>
        Not a member? <NavLink to="/auth/signup">Sign Up</NavLink>
      </p>
    </div>
  );
}

export default Login;
