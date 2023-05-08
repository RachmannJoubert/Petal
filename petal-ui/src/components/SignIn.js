import React, { useState } from "react";
export const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <h2>Sign in</h2>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          placeholder="yourmail@gmail.com"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="*********"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button>Sign in</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("sign-up")}
      >
        Don't have an account? Sign up here.
      </button>
    </div>
  );
};

export default SignIn;
