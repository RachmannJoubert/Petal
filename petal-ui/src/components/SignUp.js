import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="main">
      <h3>Petal Logo</h3>
      <div className="auth-form-container">
        <div className="title-container">
          <div>
            <h4>Welcome to PETAL</h4>
          </div>
          <div>
            <button className="link-btn" onClick={() => navigate("/")}>
              Have an Account?
              <p>Sign in</p>
            </button>
          </div>
        </div>
        <h2>Sign up</h2>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            placeholder="your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            <button onClick={() => navigate("/searchresults")}>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
