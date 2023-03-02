import React from 'react';
import { Link } from 'react-router-dom';

const HeroSix = () => {
  return (
    <>
      <section className='banner banner--six'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 tt-order-lg-2'>
              <div className='banner__content'>
                <h3 className='banner__subtitle wow fadeInUp'>
                  Digital Marketing
                </h3>

                <h2
                  className='banner__title wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  We are the best SEO Marketing Agency.
                </h2>

                <p
                  className='wow fadeInUp banner__description'
                  data-wow-delay='.5s'
                >
                  Tomfoolery are you taking the piss cor blimey guvnor do one
                  bleeding young delinquent.
                </p>
                <div className='banner__btns'>
                  <Link
                    to='/contact'
                    className='tt__btn btn-round banner-btn wow fadeInUp'
                    data-wow-delay='.7s'
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='banner__feature-image wow fadeIn'>
                <img
                  className='wow fadeInUp'
                  src='media/banner/banner-six.png'
                  alt='banner'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='bottom-shape'>
          <img
            src='media/banner/banner-six-shape.png'
            alt='banner bottom shape'
          />
        </div>
      </section>
    </>
  );
};

export default HeroSix;
