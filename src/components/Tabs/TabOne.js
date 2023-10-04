import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

class TabOne extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='feature-tabs-area'>
          <div className='container'>
            <SectionTitle
              firstTitle='We create software'
              lastTitle=' for your business solutions'
              description='
                  So I said knees up cuppa such a fibber jeffrey a bit of hows
                  your'
              classOption='text-center'
            />

            <div className='row align-items-center'>
              <div className='col-lg-5'>
                <div className='feature-tab-content'>
                  <div className='section-heading style-one'>
                    <h2
                      className='section-title wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      What customers
                      <br />
                      think of Servly
                    </h2>
                    <p
                      className='description wow fadeInUp'
                      data-wow-delay='0.5s'
                    >
                      Why morish some dodgy chav chimney pot
                      <br />
                      chinwag bog cup of tea off his nut pardon
                      <br />
                      you cheers wind up bloke.
                    </p>
                  </div>
                  <ul className='logo-list wow fadeInUp' data-wow-delay='0.7s'>
                    <li title='Brand Name'>
                      <img src='media/brand-logo/logo-sm.png' alt='logo-sm' />
                      <div className='tt-star-rating tt-star-50'>
                        <span className='tt-star-1 fa'></span>
                        <span className='tt-star-2 fa'></span>
                        <span className='tt-star-3 fa'></span>
                        <span className='tt-star-4 fa'></span>
                        <span className='tt-star-5 fa'></span>
                      </div>
                    </li>
                    <li title='Brand Name'>
                      <img src='media/brand-logo/logo-sm2.png' alt='logo-sm2' />
                      <div className='tt-star-rating tt-star-50 tt-star-rating tt-star-50'>
                        <span className='tt-star-1 fa'></span>
                        <span className='tt-star-2 fa'></span>
                        <span className='tt-star-3 fa'></span>
                        <span className='tt-star-4 fa'></span>
                        <span className='tt-star-5 fa'></span>
                      </div>
                    </li>
                    <li title='Brand Name'>
                      <img src='media/brand-logo/logo-sm3.png' alt='logo-sm3' />
                      <div className='tt-star-rating tt-star-50 tt-star-rating tt-star-50 tt-star-rating tt-star-50'>
                        <span className='tt-star-1 fa'></span>
                        <span className='tt-star-2 fa'></span>
                        <span className='tt-star-3 fa'></span>
                        <span className='tt-star-4 fa'></span>
                        <span className='tt-star-5 fa'></span>
                      </div>
                    </li>
                  </ul>
                  <a
                    href='about'
                    className='tt__btn wow fadeInUp'
                    data-wow-delay='0.9s'
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className='col-lg-7'>
                <div
                  id='ultraland-tabs'
                  className='ultraland-tabs image-tabs wow fadeInUp'
                >
                  <ul
                    className='nav nav-pills mb-4'
                    id='pills-tab'
                    role='tablist'
                  >
                    <li className='nav-item' role='presentation'>
                      <a
                        className='nav-link active'
                        id='pills-home-tab'
                        data-toggle='pill'
                        href='#pills-home'
                        role='tab'
                        aria-controls='pills-home'
                        aria-selected='true'
                      >
                        Ultraland Soft
                      </a>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <a
                        className='nav-link'
                        id='pills-profile-tab'
                        data-toggle='pill'
                        href='#pills-profile'
                        role='tab'
                        aria-controls='pills-profile'
                        aria-selected='false'
                      >
                        Analysis
                      </a>
                    </li>
                  </ul>
                  <div
                    className='tab-content ultraland-tabs-wrapper'
                    id='pills-tabContent'
                  >
                    <div
                      className='tab-pane fade show active'
                      id='pills-home'
                      role='tabpanel'
                      aria-labelledby='pills-home-tab'
                    >
                      <div className='ultraland-tab-contents content'>
                        <div className='tab-image'>
                          <img
                            src='media/tabs/tab1.png'
                            alt=''
                            className='tab-image'
                          />
                        </div>
                        <div className='tab-image-two'>
                          <img
                            src='media/tabs/tab2.png'
                            alt=''
                            data-parallax='{"y": 30}'
                            className='tab-image'
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-profile'
                      role='tabpanel'
                      aria-labelledby='pills-profile-tab'
                    >
                      <div className='ultraland-tab-contents content'>
                        <div className='tab-image'>
                          <img
                            src='media/tabs/tab1.png'
                            alt=''
                            className='tab-image'
                          />
                        </div>
                        <div className='tab-image-two'>
                          <img
                            src='media/tabs/tab2.png'
                            alt=''
                            data-parallax='{"y": 30}'
                            className='tab-image'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default TabOne;
