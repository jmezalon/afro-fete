import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { signupUser } from "../../features/users/usersSlice";
import "../../styles/auth.css";

function Singup() {
  const errors = useSelector((state) => state.users.errors);
  const isLoading = useSelector((state) => state.users.status);
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const [formData, setFormData] = useState({
    username: "",
    full_name: "",
    password: "",
    password_confirmation: "",
    isPromoter: false,
  });
  const dispatch = useDispatch();

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

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      signupUser({
        username: formData.username.toLocaleLowerCase(),
        full_name: formData.full_name,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        isPromoter: formData.isPromoter,
      })
    );
    setFormData({
      username: "",
      full_name: "",
      password: "",
      password_confirmation: "",
      isPromoter: false,
    });
  }

  useEffect(() => {
    user && history.push("/");
  }, [user, history]);

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
        <label htmlFor="full name">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
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
        <label htmlFor="password confirmation" className="last-label">
          <input
            type="password"
            name="password_confirmation"
            placeholder="confirm password"
            value={formData.password_confirmation}
            onChange={handleFormDataChange}
          />
        </label>
        <button className="login-button">
          {isLoading === "loading" ? "Loading..." : "Sign up"}
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
