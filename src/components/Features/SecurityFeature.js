import React from 'react';
import { Link } from 'react-router-dom';
const SecurityFeature = () => {
  return (
    <React.Fragment>
      <section className='security-feature-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className='security-content'>
                <div className='section-heading style-four'>
                  <h2
                    className='section-title  wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    Innovate and achieve excellence
                  </h2>

                  <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                    Be at the forefront of business management innovation with
                    our smart platform. Empower your teams to collaborate
                    seamlessly, foster innovation, and achieve operational
                    excellence that drives lasting success.
                    <br />
                  </p>
                </div>

                <div
                  className='tt-counter-box__item style-two wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='tt-counter-box__icon'>
                    <img src='media/feature/funfact.png' alt='Count' />
                  </div>

                  <div className='tt-counter-box__content'>
                    <h3 className='tt-counter-box__count'>97%</h3>
                    <p className='tt-counter-box__count-title'>
                      Satisfaction Rate
                    </p>
                  </div>
                </div>

                <a
                  href='https://app.servly.app/sign-in'
                  className='tt__btn btn-round wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  Begin My 14 Day Free Trial
                </a>
              </div>
            </div>

            <div className='col-lg-7'>
              <div className='security-feature-list-wrapper'>
                <h3 className='security-feature-title wow fadeInUp'>
                  Build ERP modules
                  <br />
                  that suite your business.
                </h3>

                <div className='row'>
                  <div className='col-lg-6'>
                    <ul
                      className='tt-list style-five wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          Streamlined Operations
                        </span>
                      </li>

                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          Resource Optimization & QA
                          {/* Interactive User Interfaces */}
                        </span>
                      </li>
                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>Streamlined Workflows</span>
                      </li>
                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          {/* Versatile Solution Building */}
                          Improved Customer Service
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className='col-lg-6'>
                    <ul
                      className='tt-list style-five wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          Efficient Task Automation
                        </span>
                      </li>

                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          Robust Analytics & Report Tools
                        </span>
                      </li>

                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          Enhanced Decision-Making
                        </span>
                      </li>
                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>Reduced Paperwork</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='security-image-content'>
            <div className='row'>
              <div className='col-lg-6 tt-order-2'>
                <div className='tt-parallax__image tt-parallax__image--ten'>
                  <div className='parallax-image'>
                    <div
                      className='image-one wow ttfadeInUp animated'
                      data-wow-dealy='0.5s'
                    >
                      {/* <img
                        src='media/image-content/landing-bg.png'
                        alt='Shape'
                      /> */}
                    </div>

                    <div className='image-two'>
                      <img
                        src='https://ultraland-react.themetags.com/media/banner/banner-one/main.png'
                        className='wow fadeIn'
                        data-parallax='{"x": -50}'
                        alt='Shape'
                      />
                    </div>
                    {/* 
                    <div className='image-three'>
                      <img
                        src='media/image-content/hs3.jpg'
                        className='wow fadeIn'
                        data-parallax='{"y": -50}'
                        alt='Shape'
                      />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='security-image-content-wrapper'>
                  <div className='section-heading style-four'>
                    <h2
                      className='section-title wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      Build Unique Business Solutions Your Way
                    </h2>

                    <p
                      className='description wow fadeInUp'
                      data-wow-delay='0.7s'
                    >
                      Servly is your canvas for creating one-of-a-kind business
                      solutions. Discover how our customization options and
                      versatile templates empower you to build tailored portals
                      and applications that align perfectly with your goals.
                    </p>
                  </div>

                  <div className='row'>
                    <div className='col-lg-6'>
                      <div
                        className='tt-counter-box__item style-two wow fadeInUp'
                        data-wow-delay='0.9s'
                      >
                        <div className='tt-counter-box__icon'>
                          <img src='media/feature/funfact2.png' alt='Count' />
                        </div>

                        <div className='tt-counter-box__content'>
                          <h3 className='tt-counter-box__count'>300%</h3>
                          <p className='tt-counter-box__count-title'>ROI</p>
                        </div>
                      </div>
                    </div>

                    {/* <div className='col-lg-6'>
                      <div
                        className='tt-counter-box__item style-two wow fadeInUp'
                        data-wow-delay='0.9s'
                      >
                        <div className='tt-counter-box__icon'>
                          <img src='media/feature/funfact3.png' alt='Count' />
                        </div>

                        <div className='tt-counter-box__content'>
                          <h3 className='tt-counter-box__count'>40%</h3>
                          <p className='tt-counter-box__count-title'>
                            Downtime
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  <Link
                    to='/features'
                    className='tt__btn btn-outline-bg btn-round wow fadeInUp'
                    data-wow-delay='1.1s'
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SecurityFeature;
