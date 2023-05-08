import React, { useState } from "react";
export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
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
        <button>Sign up</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("signin")}>
        If you already have an account, Sign in here.
      </button>
    </div>
  );
};
export default SignUp;
