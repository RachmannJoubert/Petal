import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setError("Please enter both username/email and password");
    } else {
      setError(""); // Clear any previous error
      console.log(email);
      setUser(email);
      navigate("/home");
    }
  };

  return (
    <div className="main">
      <h3>Petal Logo</h3>
      <div className="auth-form-container">
        <div className="title-container">
          <div>
            <h4> Welcome to PETAL</h4>
          </div>
          <div>
            <button className="link-btn" onClick={() => navigate("/signup")}>
              No Account?
              <p>Sign up</p>
            </button>
          </div>
        </div>
        <h2>Sign in</h2>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error message */}
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your username or email address</label>
          <input
            type="email"
            placeholder="yourmail@gmail.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            placeholder="*********"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <div className="button-container">
            <button type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
