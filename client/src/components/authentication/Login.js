import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { fetchUser } from "../../features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/auth.css";

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
    dispatch(fetchUser({ username, password }));
    setUsername("");
    setPassword("");
  }

  useEffect(() => {
    user && history.push("/");
  }, [user, history]);

  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <hr />
      <h1>logo goes here</h1>
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
