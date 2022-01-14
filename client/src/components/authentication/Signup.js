import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/auth.css";

function Singup() {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    password: "",
    passwordConfirmation: "",
    isPromoter: false,
  });

  function handleFormDataChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleRadioChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: !formData.isPromoter,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      fullName: "",
      password: "",
      passwordConfirmation: "",
      isPromoter: false,
    });
  }
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <hr />
      <h1>logo goes here</h1>
      <form action="signup" onSubmit={handleSubmit} className="auth-form">
        <div id="radio-options">
          <span>I am a ...</span>
          <span>
            <input
              type="radio"
              name="isPromoter"
              checked={formData.isPromoter === false}
              onChange={handleRadioChange}
            />
          </span>
          <label htmlFor="Partygoer">Partygoer</label>
          <span>
            <input
              type="radio"
              name="isPromoter"
              checked={formData.isPromoter === true}
              onChange={handleRadioChange}
            />
          </span>
          <label htmlFor="promoter">Promoter</label>
        </div>

        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleFormDataChange}
          />
        </label>
        <label htmlFor="fullName">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleFormDataChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleFormDataChange}
          />
        </label>
        <label htmlFor="password" className="last-label">
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="confirm password"
            value={formData.passwordConfirmation}
            onChange={handleFormDataChange}
          />
        </label>
        <button className="login-button">
          {isLoading ? "Loading..." : "Sign up"}
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
        Already a member? <NavLink to="/auth/login">Login</NavLink>!
      </p>
    </div>
  );
}

export default Singup;
