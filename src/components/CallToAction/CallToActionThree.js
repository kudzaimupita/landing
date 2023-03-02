import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionThree = () => {
  return (
    <React.Fragment>
      <div className='call-to-action-two'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-8 tt-order-2'>
              <div className='actions-content-two'>
                <h2 className='action-title wow fadeInUp'>
                  Work together with
                  <br />
                  less friction
                </h2>
                <p className='description wow fadeInUp' data-wow-delay='0.3s'>
                  Download Free Antivirus and System
                  <br />
                  Optimization Utility
                </p>

                <div className='button-wrapper'>
                  <Link
                    to='/signup'
                    className='tt__btn btn-round btn-light wow fadeInUp'
                    data-wow-delay='0.5s'
                  >
                    Sign up Now
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='action-thumbnail'>
                <img
                  src='media/feature/action-image.png'
                  alt='action thumnail'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CallToActionThree;
