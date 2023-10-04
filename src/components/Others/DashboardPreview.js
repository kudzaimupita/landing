import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPreview = () => {
  return (
    <>
      <section className='dashboard-preview-section'>
        <div className='container'>
          <div className='dashboard-preview-wrapper'>
            <div className='section-heading text-center style-three'>
              <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
                Sign up for free to get
                <br />
                started with Servly
              </h2>
              <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                So I said knees up cuppa such a fibber jeffrey a bit of how's
                your.
              </p>
              <Link to='/signup' className='tt__btn btn-round'>
                Sign up Now
              </Link>
            </div>

            <div className='dashboard-image'>
              <img src='media/feature/dasboard.jpg' alt='dashboard' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPreview;
