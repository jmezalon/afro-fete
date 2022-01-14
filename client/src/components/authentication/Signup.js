import { NavLink } from "react-router-dom";
import "../../styles/auth.css";

function Singup() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <hr />
      <h1>logo goes here</h1>
      <form action="signup" className="auth-form"></form>
      <p>
        Already have an account, <NavLink to="/auth/login">Login</NavLink>!
      </p>
    </div>
  );
}

export default Singup;
