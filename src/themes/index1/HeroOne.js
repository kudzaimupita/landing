import React from 'react';

const HeroOne = () => {
  return (
    <>
      <section className='banner banner--one banner_bg d-flex align-items-center'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 tt-order-2'>
              <div className='banner__content'>
                <h2 className='banner__title wow fadeInUp'>
                  Delightful Learning software
                </h2>

                <p
                  className='wow fadeInUp banner__description'
                  data-wow-delay='0.3s'
                >
                  Tomfoolery are you taking the piss cor blimey guvnor do one
                  <br /> bleeding young delinquent.
                </p>

                <form
                  action='php/subscribe.php'
                  method='post'
                  className='banner__newsletter-form wow fadeInUp'
                  data-wow-delay='0.7s'
                  data-tt-form='newsletter-subscribe'
                >
                  <div className='newsletter-inner'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='newsletter-form-email'
                      placeholder='Enter your Email'
                      required=''
                    />
                    <button
                      type='submit'
                      name='submit'
                      id='newsletter-submit'
                      className='tt__btn newsletter-submit'
                    >
                      <span>Try It Now</span>
                      <i className='fas fa-spinner fa-spin'></i>
                    </button>
                  </div>
                  <div className='form-result alert'>
                    <div className='content'></div>
                  </div>
                </form>

                <ul
                  className='banner__feature wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <li>
                    <i className='ei ei-icon_check'></i>Monthly subscription
                  </li>
                  <li>
                    <i className='ei ei-icon_check'></i>Free to get started
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='banner__feature-image'>
                <div className='shape-image'>
                  <img
                    src='media/banner/element/shape.png'
                    className='wow zoomIn'
                    alt='Delightful  Learning software'
                  />
                </div>

                <div className='banner__feature-multiimage'>
                  <ul className='banner__image-lists'>
                    <li className='image_item'>
                      <img
                        className='wow fadeInDown'
                        data-wow-delay='ms'
                        src='media/banner/banner-one/main.png'
                        alt='banner 1'
                      />
                    </li>
                    <li className='image_item'>
                      <img
                        className='wow fadeInLeft'
                        data-wow-delay='300ms'
                        src='media/banner/banner-one/slack.png'
                        alt='banner 2'
                      />
                    </li>
                    <li className='image_item'>
                      <img
                        className='wow fadeInUp'
                        data-wow-delay='ms'
                        src='media/banner/banner-one/dash1.png'
                        alt='banner 3'
                      />
                    </li>
                    <li className='image_item'>
                      <img
                        className='wow fadeInRight'
                        data-wow-delay='400ms'
                        src='media/banner/banner-one/dash2.png'
                        alt='banner 4'
                      />
                    </li>
                    <li className='image_item'>
                      <img
                        className='wow fadeInUp'
                        data-wow-delay='300ms'
                        src='media/banner/banner-one/dash3.png'
                        alt='banner 5'
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className='animate-element parallax-element' id='scene'>
          <li className='layer' data-depth='0.02'>
            <div className='inner'>
              <img
                src='media/banner/element/element1.png'
                alt='Delightful  Learning software 1'
              />
            </div>
          </li>
          <li className='layer' data-depth='0.03'>
            <div className='inner'>
              <img
                src='media/banner/element/element2.png'
                alt='Delightful  Learning software 2'
              />
            </div>
          </li>
          <li className='layer' data-depth='0.04'>
            <div className='inner'>
              <img
                src='media/banner/element/element3.png'
                alt='Delightful  Learning software 3'
              />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HeroOne;
