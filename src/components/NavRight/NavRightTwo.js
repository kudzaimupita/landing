import React from "react";
import { Link } from "react-router-dom";

const NavRightTwo = ({ warningBtn }) => {
  return (
    <>
      <div className={`nav-right ${warningBtn ? "style3" : "style2"}`}>
        <a
          href="https://main.d2rjth5qw0o0qm.amplifyapp.com/sign-in"
          className="nav-link"
        >
          <i className="feather-unlock"></i>Login
        </a>
        <a
          href="https://main.d2rjth5qw0o0qm.amplifyapp.com/sign-up"
          className="nav-btn tt__btn"
        >
          Get Started
        </a>
      </div>
    </>
  );
};

export default NavRightTwo;
