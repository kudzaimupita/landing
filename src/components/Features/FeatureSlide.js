import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import { featureSlideData } from '../../data/data';
import SectionTitle from '../SectionTitle/SectionTitle';

SwiperCore.use([Navigation]);

class FeatureSlide extends Component {
  render() {
    const swiperOption = {
      // Default parameters
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.testi-next',
        prevEl: '.testi-prev',
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    };

    return (
      <React.Fragment>
        <section className='feature-two-section'>
          <div className='container'>
            <div className='tt-features-wrapper'>
              <div className='row align-items-center'>
                <div className='col-md-8'>
                  <SectionTitle
                    firstTitle='Check some of'
                    lastTitle='Our featured work.'
                    description="'So I said knees up cuppa such a fibber jeffrey a bit of
                      how's your..'"
                  />
                </div>
                <div className='col-md-4 text-right'>
                  <div
                    className='feature-control wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    <div className='testi-prev'>
                      <svg
                        version='1.1'
                        id='Layer_1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        x='0px'
                        y='0px'
                        viewBox='0 0 476.213 476.213'
                        xmlSpace='preserve'
                      >
                        <polygon points='476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 ' />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </div>
                    <div className='testi-next'>
                      <svg
                        version='1.1'
                        id='Layer_1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        x='0px'
                        y='0px'
                        viewBox='0 0 476.213 476.213'
                        xmlSpace='preserve'
                      >
                        <polygon
                          points='345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
                                345.606,368.713 476.213,238.106 '
                        />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <Swiper {...swiperOption}>
                {featureSlideData.map((data) => (
                  <SwiperSlide key={data._id}>
                    <div className='tt-feature'>
                      <div className='tt-feature__image'>
                        <img src={data.featureImg} alt={data.featureName} />
                      </div>
                      <div className='tt-feature__info'>
                        <span className='tt-feature__cat'>
                          {data.featureCat}
                        </span>
                        <h4 className='tt-feature__title'>
                          {data.featureName}
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default FeatureSlide;
