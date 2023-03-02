import React, { Component } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper/core';
import { featureSlideData } from '../../data/data';
import SectionTitle from '../SectionTitle/SectionTitle';

SwiperCore.use([Pagination]);

class FeaturedWork extends Component {
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
      pagination: {
        clickable: true,
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
        <section className='feature-slider-two'>
          <div className='container'>
            <SectionTitle
              classOption='text-center'
              firstTitle=' Check some of'
              lastTitle=' Our featured work.'
              description="So I said knees up cuppa such a fibber jeffrey a bit of how's your."
            />

            <div className='tt-features-wrapper'>
              <Swiper
                {...swiperOption}
                className='tt-feature-slider wow fadeInUp'
              >
                {featureSlideData.map((data) => (
                  <SwiperSlide key={data._id}>
                    <div className='tt-feature tt-feature--two'>
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
                <div className='feature-pagination'></div>
              </Swiper>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default FeaturedWork;
