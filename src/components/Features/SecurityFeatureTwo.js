import React from 'react';
import { Link } from 'react-router-dom';

const SecurityFeatureTwo = () => {
  return (
    <React.Fragment>
      <section className='feature-security-section'>
        <div className='container'>
          <div className='feature-security-wrapper'>
            <div className='section-heading style-four text-center'>
              <h2 className='section-title  wow fadeInUp' data-wow-delay='0.3s'>
                Choose package match
                <br />
                your budget
              </h2>
              <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                3 minute installation · Try Team plan features for 14 days · No
                credit card required
              </p>
            </div>

            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div className='tt-icon-box-list'>
                  <div className='icon-container'>
                    <img src='media/feature/price1.png' alt='icon' />
                  </div>

                  <div className='box-content'>
                    <h3 className='box-title'>Standard</h3>

                    <ul className='tt-icon-box-list-item'>
                      <li>
                        <i className='feather-check'></i>IP and Country Blocking
                      </li>
                      <li>
                        <i className='feather-check'></i>14 Day Free Trial
                      </li>
                      <li>
                        <i className='feather-check'></i>Tracking Time
                      </li>
                      <li>
                        <i className='feather-check'></i>VAPT Security
                        Certificate
                      </li>
                      <li>
                        <i className='feather-check'></i>Dedicated Support
                      </li>
                    </ul>

                    <Link to='/contact' className='feature-link'>
                      Choose This <i className='feather-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='tt-icon-box-list color-two'>
                  <div className='icon-container'>
                    <img src='media/feature/price2.png' alt='icon' />
                  </div>

                  <div className='box-content'>
                    <h3 className='box-title'>Professional</h3>

                    <ul className='tt-icon-box-list-item'>
                      <li>
                        <i className='feather-check'></i>IP and Country Blocking
                      </li>
                      <li>
                        <i className='feather-check'></i>14 Day Free Trial
                      </li>
                      <li>
                        <i className='feather-check'></i>Tracking Time
                      </li>
                      <li>
                        <i className='feather-check'></i>VAPT Security
                        Certificate
                      </li>
                      <li>
                        <i className='feather-check'></i>Dedicated Support
                      </li>
                    </ul>

                    <Link to='/contact' className='feature-link'>
                      Choose This <i className='feather-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='tt-icon-box-list color-three'>
                  <div className='icon-container'>
                    <img src='media/feature/price4.png' alt='icon' />
                  </div>

                  <div className='box-content'>
                    <h3 className='box-title'>Security Audit</h3>

                    <ul className='tt-icon-box-list-item'>
                      <li>
                        <i className='feather-check'></i>IP and Country Blocking
                      </li>
                      <li>
                        <i className='feather-check'></i>14 Day Free Trial
                      </li>
                      <li>
                        <i className='feather-check'></i>Tracking Time
                      </li>
                      <li>
                        <i className='feather-check'></i>VAPT Security
                        Certificate
                      </li>
                      <li>
                        <i className='feather-check'></i>Dedicated Support
                      </li>
                    </ul>

                    <Link to='/contact' className='feature-link'>
                      Choose This <i className='feather-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='tt-icon-box-list color-four'>
                  <div className='icon-container'>
                    <img src='media/feature/price5.png' alt='icon' />
                  </div>

                  <div className='box-content'>
                    <h3 className='box-title'>Lifetime Tool</h3>

                    <ul className='tt-icon-box-list-item'>
                      <li>
                        <i className='feather-check'></i>IP and Country Blocking
                      </li>
                      <li>
                        <i className='feather-check'></i>14 Day Free Trial
                      </li>
                      <li>
                        <i className='feather-check'></i>Tracking Time
                      </li>
                      <li>
                        <i className='feather-check'></i>VAPT Security
                        Certificate
                      </li>
                      <li>
                        <i className='feather-check'></i>Dedicated Support
                      </li>
                    </ul>

                    <Link to='/contact' className='feature-link'>
                      Choose This <i className='feather-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SecurityFeatureTwo;
