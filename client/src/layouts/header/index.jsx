import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div id="header">
        <div className="logo">
          <Link to={"/"}>
            <em>Pointer Calculator</em>
          </Link>
        </div>
        <nav>
          <NavLink to={"/signup"} className={"signup"}>
            Signup
          </NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
