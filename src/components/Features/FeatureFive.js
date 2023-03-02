import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeatureFive extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='service-six'>
          <div className='container'>
            <div className='section-heading style-one text-center'>
              <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
                Provide awesome Service
                <br />
                With our Tools
              </h2>

              <p className='description'>
                So I said knees up cuppa such a fibber jeffrey a bit of how's
                your.
              </p>
            </div>

            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div
                  className='tt-icon-box style-seven wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/mk1.png' alt='Direct Access' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>SEO Consultancy</a>
                    </h4>

                    <p className='description'>
                      I only a quid me old mucker bambo zled bender chinwag
                      pardon.
                    </p>

                    <Link to='/service' className='read-more-btn'>
                      <i className='feather-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div
                  className='tt-icon-box style-seven wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <div className='icon-container color__two'>
                    <img src='media/feature/mk2.png' alt='Data Tracking' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>SEO Consultancy</a>
                    </h4>

                    <p className='description'>
                      I only a quid me old mucker bambo zled bender chinwag
                      pardon.
                    </p>

                    <Link to='/service' className='read-more-btn'>
                      <i className='feather-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div
                  className='tt-icon-box style-seven wow fadeInUp'
                  data-wow-delay='1.1s'
                >
                  <div className='icon-container color__three'>
                    <img src='media/feature/mk3.png' alt='Press Releases' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <Link to='/service'>SEO Consultancy</Link>
                    </h4>

                    <p className='description'>
                      I only a quid me old mucker bambo zled bender chinwag
                      pardon.
                    </p>

                    <Link to='/service' className='read-more-btn'>
                      <i className='feather-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className='feature-element'>
            <li>
              <img
                src='media/element/element1.png'
                data-parallax='{"y": -100}'
                alt='element'
              />
            </li>
            <li>
              <img
                src='media/element/circle_half.png'
                data-parallax='{"y": 150}'
                alt='element'
              />
            </li>
            <li data-parallax='{"y": -50, "x": -70}'></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default FeatureFive;
