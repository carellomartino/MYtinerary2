import React from "react";
import logo from "./NavbarComponentImages/MYtineraryLogo.svg";
import "./NavbarComponentStyle.css";
import {Link} from 'react-router-dom'


const NavbarComponent = props => {
  return (
    <div>
      <Link to='/index'>
      <img className="logo" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default NavbarComponent;
