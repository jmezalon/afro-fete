import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/auth.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <hr />
      <h1>logo goes here</h1>
      <form action="login" className="auth-form">
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
          {isLoading ? "Loading..." : "Login"}
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
