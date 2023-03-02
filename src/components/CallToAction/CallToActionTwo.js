import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionTwo = () => {
  return (
    <>
      <div className='call-to-action-three'>
        <div className='container'>
          <div className='call-action-wrapper'>
            <div className='row align-items-center'>
              <div className='col-lg-8'>
                <div className='actions-content-two'>
                  <h2 className='action-title wow fadeInUp'>
                    Join our community of
                    <br />
                    students
                  </h2>
                </div>
              </div>

              <div className='col-lg-4'>
                <div className='button-wrapper'>
                  <Link
                    to='/contact'
                    className='tt__btn btn-outline btn-sqr btn-round btn-light wow fadeInUp'
                    data-wow-delay='0.5s'
                  >
                    Get Started For Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToActionTwo;
