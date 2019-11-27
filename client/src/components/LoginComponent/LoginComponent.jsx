import React from "react";
import './LoginComponentStyle.css';

const LoginComponent = ({
  handlePassword,
  handleEmail,
  handleSubmit,
  email,
  password
}) => {
  return (
    <div>
      <h1>Login Here!</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={"contForm2"}>
          <label htmlFor="email">Your Email:&nbsp;</label>
          <input
            className={"inpStyle2"}
            value={email}
            onChange={handleEmail}
            type="email"
            name="email"
            required
          ></input>
          <label htmlFor="password">Password:&nbsp;</label>
            <input
              className={"inpStyle2"}
              value={password}
              onChange={handlePassword}
              type="password"
              name="password"
              required
            />
            <label htmlFor="submit"></label>
            <button
              className={"btn btn-primary btnSub"}
              type="submit"
              name="submit"
            >
              Log In!
            </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
