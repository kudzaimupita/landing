import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SkillOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='skill-area'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6 tt-order-md-2'>
                <div className='section-heading style-gradient'>
                  <h2 className='section-title wow fadeInUp'>
                    We help you increase sales by improving SEO
                  </h2>

                  <p className='description wow fadeInUp' data-wow-delay='0.3s'>
                    We know good design meent that good business.
                  </p>
                </div>

                <div className='skills-wrap'>
                  <div className='wrapper-full'>
                    <div className='skills active'>
                      <div className='progrees-box mb-4'>
                        <div className='bar-top d-flex justify-content-between'>
                          <p>User Interface</p>
                          <span>75%</span>
                        </div>
                        <div className='progress'>
                          <div
                            className='progress-bar color-one'
                            role='progressbar'
                            style={{ width: '75%' }}
                            aria-valuenow='75'
                            aria-valuemin='0'
                            aria-valuemax='100'
                          ></div>
                        </div>
                      </div>
                      <div className='progrees-box mb-4'>
                        <div className='bar-top d-flex justify-content-between'>
                          <p>SEO Optimization</p>
                          <span>82%</span>
                        </div>
                        <div className='progress'>
                          <div
                            className='progress-bar color-two'
                            role='progressbar'
                            style={{ width: '82%' }}
                            aria-valuenow='82'
                            aria-valuemin='0'
                            aria-valuemax='100'
                          ></div>
                        </div>
                      </div>
                      <div className='progrees-box mb-4'>
                        <div className='bar-top d-flex justify-content-between'>
                          <p>Digital Marketing</p>
                          <span>75%</span>
                        </div>
                        <div className='progress'>
                          <div
                            className='progress-bar color-three'
                            role='progressbar'
                            style={{ width: '62%' }}
                            aria-valuenow='62'
                            aria-valuemin='0'
                            aria-valuemax='100'
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to='/company'
                  className='tt__btn btn-outline btn-outline-dark btn-round mt-4 wow fadeInUp'
                  data-wow-delay='1.1s'
                >
                  Learn More
                </Link>
              </div>

              <div className='col-md-6'>
                <div
                  className='skill-image-wrapper wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  <img src='media/image-content/image-four.png' alt='content' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SkillOne;
