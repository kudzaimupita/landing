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
                    How secure is your Organization
                  </h2>

                  <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                    Need help with installation? Looking for a solution to
                    <br /> a confusing security problem.
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

                <Link
                  to='/#'
                  className='tt__btn btn-round wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  Begin My 14 Day Free Trial
                </Link>
              </div>
            </div>

            <div className='col-lg-7'>
              <div className='security-feature-list-wrapper'>
                <h3 className='security-feature-title wow fadeInUp'>
                  Protect what’s
                  <br />
                  yours with Internet Security
                </h3>

                <div className='row'>
                  <div className='col-lg-6'>
                    <ul
                      className='tt-list style-five wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>Automated Workflows</span>
                      </li>

                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          Getting blacklisted by Google
                        </span>
                      </li>
                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          VAPT Security Certificate
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
                          Software Data & Code Analysis
                        </span>
                      </li>

                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          IP and Country Blocking
                        </span>
                      </li>

                      <li className='list-item'>
                        <i className='feather-check'></i>
                        <span className='list-text'>
                          24x7 Realtime Protection
                        </span>
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
                      <img src='media/image-content/hs1.jpg' alt='Shape' />
                    </div>

                    <div className='image-two'>
                      <img
                        src='media/image-content/hs2.jpg'
                        className='wow fadeIn'
                        data-parallax='{"x": -50}'
                        alt='Shape'
                      />
                    </div>

                    <div className='image-three'>
                      <img
                        src='media/image-content/hs3.jpg'
                        className='wow fadeIn'
                        data-parallax='{"y": -50}'
                        alt='Shape'
                      />
                    </div>
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
                      Manage your website Security platform
                    </h2>

                    <p className='lead wow fadeInUp' data-wow-delay='0.5s'>
                      Looking for a solution to a confusing
                      <br />
                      Security problem.
                    </p>

                    <p
                      className='description wow fadeInUp'
                      data-wow-delay='0.7s'
                    >
                      So I said knees up cuppa such a fibber jeffrey a<br /> bit
                      of how's your.
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
                          <h3 className='tt-counter-box__count'>1,476</h3>
                          <p className='tt-counter-box__count-title'>
                            Threats Blocked
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-6'>
                      <div
                        className='tt-counter-box__item style-two wow fadeInUp'
                        data-wow-delay='0.9s'
                      >
                        <div className='tt-counter-box__icon'>
                          <img src='media/feature/funfact3.png' alt='Count' />
                        </div>

                        <div className='tt-counter-box__content'>
                          <h3 className='tt-counter-box__count'>93%</h3>
                          <p className='tt-counter-box__count-title'>
                            Trustiest Ratings
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to='/#'
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
