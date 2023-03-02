import React from 'react';
import { Link } from 'react-router-dom';
const FeatureSeven = () => {
  return (
    <React.Fragment>
      <div className='service-ten-area'>
        <div className='container'>
          <div className='section-heading style-four header-light text-center'>
            <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
              Code changes are complex
              <br />
              and free software
            </h2>

            <p className='description wow fadeInUp' data-wow-delay='0.5s'>
              So I said knees up cuppa such a fibber jeffrey a bit of how's
              your.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='tt-icon-box style-twelve wow fadeInUp'
                data-wow-delay='0.7s'
              >
                <div className='icon-container'>
                  <img src='media/feature/hs1.png' alt='Direct Access' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='/service'>
                      Intelligent
                      <br />
                      Automation
                    </Link>
                  </h4>

                  <p className='description'>
                    The bee's knees say arse over tit it's all gone to pot
                    tickety.
                  </p>
                  <Link to='/service' className='tt-more-link'>
                    Read More<i className='feather-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div
                className='tt-icon-box style-twelve wow fadeInUp'
                data-wow-delay='0.9s'
              >
                <div className='icon-container color__two'>
                  <img src='media/feature/hs2.png' alt='Push Notification' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='service.html'>
                      Managed
                      <br />
                      Security Services
                    </Link>
                  </h4>

                  <p className='description'>
                    The bee's knees say arse over tit it's all gone to pot
                    tickety.
                  </p>

                  <Link to='/service' className='tt-more-link'>
                    Read More<i className='feather-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div
                className='tt-icon-box style-twelve wow fadeInUp'
                data-wow-delay='1.1s'
              >
                <div className='icon-container color__three'>
                  <img src='media/feature/hs3.png' alt='Mobile Capability' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='/service'>
                      Expert
                      <br />
                      Assistance
                    </Link>
                  </h4>

                  <p className='description'>
                    The bee's knees say arse over tit it's all gone to pot
                    tickety.
                  </p>

                  <Link to='service.' className='tt-more-link'>
                    Read More<i className='feather-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeatureSeven;
