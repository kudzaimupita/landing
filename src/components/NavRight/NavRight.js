import React from 'react';
import { Link } from 'react-router-dom';

const NavRight = ({ square }) => {
  return (
    <>
      {square ? (
        <div className='nav-right style1'>
          <Link to='/login' className='nav-link'>
            <i className='feather-unlock'></i>Login
          </Link>
          <Link to='/contact' className='nav-btn tt__btn btn-round'>
            Book Now
          </Link>
        </div>
      ) : (
        <div className='nav-right style1'>
          <Link to='/login' className='nav-link'>
            <i className='feather-unlock'></i>Login
          </Link>
          <Link to='/contact' className='nav-btn tt__btn'>
            Get Started
          </Link>
        </div>
      )}
    </>
  );
};

export default NavRight;
