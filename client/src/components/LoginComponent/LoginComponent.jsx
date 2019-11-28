import React from "react";
import "./LoginComponentStyle.css";
import { Link } from 'react-router-dom'

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
            className={"btn btn-primary btnSub2"}
            type="submit"
            name="submit"
          >
            Log In!
          </button>
        </div>
      </form>
      
        <button onClick={() =>{ window.location.href = "api/users/auth/google"}} className={"btn btn-primary btnSub3 btnSub2"}>
          Log In with Google
        </button>
    </div>
  );
};

export default LoginComponent;
