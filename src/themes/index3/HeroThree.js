import React from 'react';
import { Link } from 'react-router-dom';

const HeroThree = () => {
  return (
    <>
      <section className='banner banner--three'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 tt-order-2'>
              <div className='banner__content'>
                <h2 className='banner__title wow fadeInUp'>
                  Your website
                  <br />
                  into a mobile app.
                </h2>

                <p
                  className='wow fadeInUp banner__description'
                  data-wow-delay='.5s'
                >
                  Tomfoolery are you taking the piss cor blimey guvnor <br />
                  do one bleeding young delinquent.
                </p>

                <ul
                  className='banner__feature-list wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <li>
                    <i className='ei ei-icon_check'></i>
                    Design &amp; Development
                  </li>
                  <li>
                    <i className='ei ei-icon_check'></i>
                    Excellent Support
                  </li>
                </ul>

                <div className='banner__btns'>
                  <Link
                    to='/contact'
                    className='tt__btn btn-round btn-outline btn-light banner-btn wow fadeInUp'
                    data-wow-delay='.9s'
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='banner__feature-image'>
                <img
                  src='media/banner/banner-three/mobile1.png'
                  alt='Banner'
                  className='banner__image-three wow fadeInLeft'
                />

                <img
                  src='media/banner/banner-three/mobile2.png'
                  alt='Banner'
                  className='banner__image-four  wow fadeInRight'
                />

                <svg
                  className='banner__shape'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='100%'
                  height='100%'
                  viewBox='0 0 605 637'
                >
                  <defs>
                    <linearGradient
                      id='PSgrad_0'
                      x1='50%'
                      x2='0%'
                      y1='86.603%'
                      y2='0%'
                    >
                      <stop
                        offset='0%'
                        stopColor='rgb(95,21,205)'
                        stopOpacity='0'
                      ></stop>
                      <stop
                        offset='100%'
                        stopColor='rgb(128,51,243)'
                        stopOpacity='1'
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fillRule='evenodd'
                    fill='url(#PSgrad_0)'
                    d='M375.014,468.521 C239.610,333.885 36.428,610.981 13.000,473.000 C-27.081,236.938 32.702,286.306 197.000,72.999 C275.835,-29.352 541.392,-47.699 599.124,185.705 C632.645,321.231 517.583,610.283 375.014,468.521 Z'
                  ></path>
                </svg>

                <div className='shape__item-one wow fadeInUp'>
                  <img
                    src='media/banner/element/shape_b3-1.png'
                    alt='Banner Element'
                    data-parallax='{" y": 50, "x" : -50}'
                    className='wow zoomin'
                  />
                </div>

                <div className='shape__item-two wow fadeInDown'>
                  <img
                    src='media/banner/element/shape_b3-2.png'
                    alt='Banner Element'
                    data-parallax='{"y": -50, "x": -50}'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='shape-left'>
          <img
            src='media/banner/element/shape_b2-3-3.png'
            data-parallax='{"y": 200}'
            alt='Leaf'
          />
        </div>
      </section>
    </>
  );
};

export default HeroThree;
