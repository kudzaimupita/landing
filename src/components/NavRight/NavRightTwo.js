import React from 'react';
import { Link } from 'react-router-dom';

const NavRightTwo = ({ warningBtn }) => {
  return (
    <>
      <div className={`nav-right ${warningBtn ? 'style3' : 'style2'}`}>
        <a href='https://portal.servly.app/sign-in' className='nav-link'>
          <i className='feather-unlock'></i>Login
        </a>
        <Link to='/request-demo' className='nav-btn tt__btn'>
          Request Demo
        </Link>
      </div>
    </>
  );
};

export default NavRightTwo;
