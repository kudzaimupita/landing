import React, { Component } from 'react';

class CarouselOne extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='logo-carousel'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-10'>
                <div className='row align-items-center'>
                  <div className='col-xl-8 col-lg-8'>
                    <div className='section-heading style-one'>
                      <h2
                        className='section-title wow fadeInUp'
                        data-wow-delay='0.3s'
                      >
                        Reviewed the
                        <br />
                        Trusted by professionals
                      </h2>
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-4'>
                    <a
                      href='testimonial'
                      className='btn__link wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      Read our customer stories
                      <i className='feather-arrow-right'></i>
                    </a>
                  </div>
                </div>

                <div className='tt-logo-carousel'>
                  <div className='swiper-container tt-client-logo wow fadeInUp'>
                    <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        <div className='client_logo' title='Brand Name'>
                          <img
                            src='media/brand-logo/logo_01.svg'
                            alt='Brand logo'
                          />
                        </div>
                      </div>

                      <div className='swiper-slide'>
                        <div className='client_logo' title='Brand Name'>
                          <img
                            src='media/brand-logo/logo_02.svg'
                            alt='Brand logo'
                          />
                        </div>
                      </div>

                      <div className='swiper-slide'>
                        <div className='client_logo' title='Brand Name'>
                          <img
                            src='media/brand-logo/logo_03.svg'
                            alt='Brand logo'
                          />
                        </div>
                      </div>

                      <div className='swiper-slide'>
                        <div className='client_logo' title='Brand Name'>
                          <img
                            src='media/brand-logo/logo_04.svg'
                            alt='Brand logo'
                          />
                        </div>
                      </div>

                      <div className='swiper-slide'>
                        <div className='client_logo' title='Brand Name'>
                          <img
                            src='media/brand-logo/logo_02.svg'
                            alt='Brand logo'
                          />
                        </div>
                      </div>

                      <div className='swiper-slide'>
                        <div className='client_logo' title='Brand Name'>
                          <img
                            src='media/brand-logo/logo_03.svg'
                            alt='Brand logo'
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
export default CarouselOne;
