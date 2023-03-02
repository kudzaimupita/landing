import React from 'react';
import { Link } from 'react-router-dom';

const TextBox = ({
  heroSubtitle,
  firstTitle,
  lastTitle,
  heroDesc,
  heroBtnText,
}) => {
  return (
    <React.Fragment>
      <div className='banner__content text-center'>
        <h4 className='banner__subtitle'>{heroSubtitle}</h4>
        <h1 className='banner__title'>
          {firstTitle}
          <br />
          {lastTitle}
        </h1>

        <p className='banner__description'>{heroDesc}</p>

        <div className='banner__button-container'>
          <Link
            to='/contact'
            className='tt__btn banner-btn btn-round btn-outline'
          >
            {heroBtnText}
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextBox;
