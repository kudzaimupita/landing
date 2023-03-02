import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { screenshotData } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

class ScreenShot extends Component {
  render() {
    const swiperOption = {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5000,
      },
      pagination: { clickable: true },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 767px
        360: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 767px
        767: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    };
    return (
      <React.Fragment>
        <section className='screenshot-area'>
          <div className='container'>
            <SectionTitle
              firstTitle='Awesome'
              lastTitle=' App Screenshots'
              description=" So I said knees up cuppa such a fibber jeffrey a bit of how's
                your."
              classOption='text-center'
            />
            <Swiper
              className='tt-screenshots wow fadeInUp'
              data-wow-delay='0.3s'
              {...swiperOption}
            >
              {screenshotData.map((data) => (
                <SwiperSlide key={data._id}>
                  <div className='screenshot-slider'>
                    <img src={data.screenUrl} alt={data.screenAlt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ScreenShot;
