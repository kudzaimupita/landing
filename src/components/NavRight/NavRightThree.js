import React from 'react';
import { Link } from 'react-router-dom';

const NavRightThree = () => {
  return (
    <>
      <div className='nav-right style1'>
        <Link to='/login' className='nav-link'>
          <i className='feather-unlock'></i>Login
        </Link>
        <a href='/contact' className='nav-btn tt__btn btn-round'>
          Book Now
        </a>
      </div>
    </>
  );
};

export default NavRightThree;
