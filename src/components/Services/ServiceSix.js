import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServiceSix extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='service-eight'>
          <div className='container'>
            <div className='section-heading style-two text-center'>
              <h3 className='section-subtitle wow fadeInUp'>Specialities</h3>
              <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
                Specialized Programs
              </h2>
              <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                So I said knees up cuppa such a fibber jeffrey a bit of how's
                your.
              </p>
            </div>

            <div className='row'>
              <div className='col-lg-4'>
                <div className='tt-counter-box wow fadeInLeft'>
                  <h3 className='tt-counter-box__subtitle'>
                    About the Ultraland
                  </h3>
                  <h2 className='tt-counter-box__title'>
                    We Provide the best Medical care for your Family.
                  </h2>

                  <div className='tt-counter-box__item'>
                    <div className='tt-counter-box__icon'>
                      <img src='media/feature/count1.png' alt='Count' />
                    </div>

                    <div className='tt-counter-box__content'>
                      <h3 className='tt-counter-box__count' data-counter='16'>
                        16+
                      </h3>
                      <p className='tt-counter-box__count-title'>
                        Our Hospital
                      </p>
                    </div>
                  </div>

                  <div className='tt-counter-box__item'>
                    <div className='tt-counter-box__icon'>
                      <img src='media/feature/count2.png' alt='Count ' />
                    </div>

                    <div className='tt-counter-box__content'>
                      <h3 className='tt-counter-box__count' data-counter='200'>
                        200+
                      </h3>
                      <p className='tt-counter-box__count-title'>
                        Medical Specialist
                      </p>
                    </div>
                  </div>

                  <Link to='/company' className='tt__btn btn-light'>
                    About Me
                  </Link>
                </div>
              </div>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-nine wow fadeInUp'
                      data-wow-delay='0.7s'
                    >
                      <div className='icon-container'>
                        <img src='media/feature/md1.png' alt='Direct Access' />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <Link to='/service'>Primary care</Link>
                        </h4>
                        <p className='description'>
                          So I said grub chance blower bleng pardon porkies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-nine wow fadeInUp'
                      data-wow-delay='0.9s'
                    >
                      <div className='icon-container color__two'>
                        <img src='media/feature/md2.png' alt='Data Tracking' />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <Link to='/service'>SEO Consultancy</Link>
                        </h4>
                        <p className='description'>
                          So I said grub chance blower bleng pardon porkies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-nine wow fadeInUp'
                      data-wow-delay='1.1s'
                    >
                      <div className='icon-container color__three'>
                        <img src='media/feature/md3.png' alt='Press Releases' />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <Link to='/service'>Physical Theraphy</Link>
                        </h4>
                        <p className='description'>
                          So I said grub chance blower bleng pardon porkies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 col-sm-6'>
                    <div
                      className='tt-icon-box style-nine wow fadeInUp'
                      data-wow-delay='1.1s'
                    >
                      <div className='icon-container color__three'>
                        <img src='media/feature/md4.png' alt='Press Releases' />
                      </div>

                      <div className='box-content'>
                        <h4 className='box-title'>
                          <Link to='service'>Dental Surgery</Link>
                        </h4>
                        <p className='description'>
                          So I said grub chance blower bleng pardon porkies.
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

export default ServiceSix;
