import React from 'react';
import { Link } from 'react-router-dom';

const HeroFour = () => {
  return (
    <>
      <section className='banner banner--four'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 tt-order-lg-2'>
              <div className='banner__content'>
                <h2
                  className='banner__title wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  We are the best
                  <br />
                  SEO Marketing Agency.
                </h2>

                <p
                  className='wow fadeInUp banner__description'
                  data-wow-delay='.5s'
                >
                  Tomfoolery are you taking the piss cor blimey guvnor do one
                  bleeding young delinquent.
                </p>

                <div
                  className='banner__counter wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='banner__counter__item'>
                    <h2 className='banner__counter__count color__one'>
                      <span className='counter'>99.5%</span>
                    </h2>

                    <p className='banner__counter__title'>
                      Clients Satisfaction
                    </p>
                  </div>

                  <div className='banner__counter__item'>
                    <h2 className='banner__counter__count'>
                      <span className='counter'>25</span>
                      <span className='suffix_title'>Years</span>
                    </h2>

                    <p className='banner__counter__title'>Work Experience</p>
                  </div>
                </div>

                <div className='banner__btns'>
                  <Link
                    to='/contact'
                    className='tt__btn btn-round btn-light banner-btn wow fadeInUp'
                    data-wow-delay='.9s'
                  >
                    Contact Today
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div
                className='banner__feature-image wow fadeInRight'
                data-wow-delay='0.5s'
              >
                <img
                  src='media/banner/banner-four/banner-four.png'
                  alt='banner'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='banner-wave-shape'>
          <img
            src='media/banner/banner-four/banner_wave.png'
            alt='banner shape'
          />
        </div>
      </section>
    </>
  );
};

export default HeroFour;
