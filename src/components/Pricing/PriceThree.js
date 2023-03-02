import React from 'react';

const PriceThree = () => {
  return (
    <React.Fragment>
      <section className='pricing-section-four'>
        <div className='container'>
          <div className='section-heading style-three text-center'>
            <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
              Choose package match
              <br />
              your budget
            </h2>

            <div className='description wow fadeInUp' data-wow-delay='0.5s'>
              <p>
                3 minute installation · Try Team plan features for 14 days · No
                credit card required
              </p>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-md-6 col-lg-4'>
              <div className='tt-pricing'>
                <div className='tt-pricing__header'>
                  <div className='tt-pricing__icon'>
                    <img src='media/feature/price1.png' alt='Standard' />
                  </div>

                  <h2 className='tt-pricing__title'>Standard</h2>
                </div>

                <div className='tt-pricing__feature-lists'>
                  <ul className='tt-pricing__feature-list'>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      IP and Country Blocking
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      14 Day Free Trial
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      Tracking Time
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      VAPT Security Certificate
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      Dedicated Support
                    </li>
                  </ul>
                </div>

                <div className='tt-pricing__action'>
                  <a href='#/' className='tt-pricing__btn-link'>
                    Choose This <i className='feather-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div className='tt-pricing featured'>
                <span className='feature-text'>Most popular</span>
                <div className='tt-pricing__header'>
                  <div className='tt-pricing__icon'>
                    <img src='media/feature/price2.png' alt='Standard' />
                  </div>

                  <h2 className='tt-pricing__title'>Professional</h2>
                </div>

                <div className='tt-pricing__feature-lists'>
                  <ul className='tt-pricing__feature-list'>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      IP and Country Blocking
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      14 Day Free Trial
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      Tracking Time
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      VAPT Security Certificate
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      Dedicated Support
                    </li>
                  </ul>
                </div>

                <div className='tt-pricing__action'>
                  <a href='#/' className='tt__btn btn-round'>
                    Choose This <i className='feather-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div className='tt-pricing'>
                <div className='tt-pricing__header'>
                  <div className='tt-pricing__icon'>
                    <img src='media/feature/price3.png' alt='Standard' />
                  </div>
                  <h2 className='tt-pricing__title'>Security Audit</h2>
                </div>

                <div className='tt-pricing__feature-lists'>
                  <ul className='tt-pricing__feature-list'>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      IP and Country Blocking
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      14 Day Free Trial
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      Tracking Time
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      VAPT Security Certificate
                    </li>
                    <li>
                      <i className='ei ei-icon_check'></i>
                      Dedicated Support
                    </li>
                  </ul>
                </div>

                <div className='tt-pricing__action'>
                  <a href='#/' className='tt-pricing__btn-link'>
                    Choose This <i className='feather-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PriceThree;
