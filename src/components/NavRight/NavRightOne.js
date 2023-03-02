import React from 'react';
import { Link } from 'react-router-dom';

const NavRightOne = () => {
  return (
    <>
      <div className='nav-right style1'>
        <Link to='/login' className='nav-link'>
          <i className='feather-unlock'></i>Login
        </Link>
        <Link to='/contact' className='nav-btn tt__btn'>
          Get Started
        </Link>
      </div>
    </>
  );
};

export default NavRightOne;
