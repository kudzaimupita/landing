import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FeatureFour extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='service-five'>
          <div className='image__content-six'>
            <img
              src='media/image-content/image-five.png'
              className='wow fadeInLeft'
              alt='service '
            />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-6'></div>

              <div className='col-xl-8'>
                <div className='row align-items-center'>
                  <div className='col-lg-7'>
                    <div className='section-heading style-one'>
                      <h2
                        className='section-title wow fadeInUp'
                        data-wow-delay='0.3s'
                      >
                        Discover the
                        <br />
                        world of business
                      </h2>
                    </div>
                  </div>

                  <div className='col-lg-5 text-right'>
                    <Link
                      to='#'
                      className='tt__btn btn-round wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      Join our Community
                    </Link>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-six wow fadeInUp'
                      data-wow-delay='0.7s'
                    >
                      <div className='icon-container'>
                        <img src='media/feature/cor1.png' alt='Direct Access' />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <a href='service.html'>Financial Audit</a>
                        </h4>

                        <p className='description'>
                          Jeffrey load of old tosh cup of char quaint barmy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-six wow fadeInUp'
                      data-wow-delay='0.9s'
                    >
                      <div className='icon-container color__two'>
                        <img src='media/feature/cor2.png' alt='Data Tracking' />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <a href='service'>Data Tracking</a>
                        </h4>

                        <p className='description'>
                          Jeffrey load of old tosh cup of char quaint barmy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-six wow fadeInUp'
                      data-wow-delay='1.1s'
                    >
                      <div className='icon-container color__three'>
                        <img
                          src='media/feature/cor3.png'
                          alt='Press Releases'
                        />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <a href='service.html'>Press Releases</a>
                        </h4>

                        <p className='description'>
                          Jeffrey load of old tosh cup of char quaint barmy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-six wow fadeInUp'
                      data-wow-delay='1.1s'
                    >
                      <div className='icon-container color__three'>
                        <img
                          src='media/feature/cor4.png'
                          alt='Press Releases'
                        />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <a href='service'>Press Releases</a>
                        </h4>

                        <p className='description'>
                          Jeffrey load of old tosh cup of char quaint barmy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-six wow fadeInUp'
                      data-wow-delay='1.1s'
                    >
                      <div className='icon-container color__three'>
                        <img
                          src='media/feature/cor5.png'
                          alt='Press Releases'
                        />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <a href='service'>Press Releases</a>
                        </h4>

                        <p className='description'>
                          Jeffrey load of old tosh cup of char quaint barmy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-six wow fadeInUp'
                      data-wow-delay='1.1s'
                    >
                      <div className='icon-container color__three'>
                        <img
                          src='media/feature/cor6.png'
                          alt='Press Releases'
                        />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <a href='service.html'>Press Releases</a>
                        </h4>

                        <p className='description'>
                          Jeffrey load of old tosh cup of char quaint barmy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeatureFour;
