import React from 'react';
import { Link } from 'react-router-dom';

const RightBtn = () => {
  return (
    <>
      <div className='nav-right style3'>
        <Link to='/contact' className='nav-btn tt__btn'>
          Get Started
        </Link>
      </div>
    </>
  );
};

export default RightBtn;
