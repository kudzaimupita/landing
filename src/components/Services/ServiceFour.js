import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

export default class ServiceFour extends Component {
  render() {
    return (
      <div>
        <section className='service-four-area'>
          <div className='container'>
            <SectionTitle
              classOption='text-center'
              firstTitle='Our solutions power'
              lastTitle='  The world’s largest'
              description="So I said knees up cuppa such a fibber jeffrey a bit of how's
                  your."
            />

            <div className='row'>
              <div className='col-lg-6'>
                <div
                  className='tt-icon-box style-five wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/seo1.png' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Think Different</a>
                    </h4>

                    <p className='description'>
                      That sloshed nice one bog standar what load of rubbish
                      argy bargy.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div
                  className='tt-icon-box style-five wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/seo2.png' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>SEO Optimization</a>
                    </h4>

                    <p className='description'>
                      That sloshed nice one bog standar what load of rubbish
                      argy bargy.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div
                  className='tt-icon-box style-five wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/seo3.png' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Search Engine Optimization</a>
                    </h4>

                    <p className='description'>
                      That sloshed nice one bog standar what load of rubbish
                      argy bargy.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div
                  className='tt-icon-box style-five wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/seo4.png' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Social Media Marketing</a>
                    </h4>

                    <p className='description'>
                      That sloshed nice one bog standar what load of rubbish
                      argy bargy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
