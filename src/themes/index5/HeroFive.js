import React, { Component } from 'react';
import TextBox from '../../components/HeroSection/TextBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { heroFiveSliderData } from '../../data/data';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

class HeroFive extends Component {
  render() {
    const swiperOption = {
      slidesPerView: 1,
      speed: 1000,
      watchSlidesProgress: true,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      navigation: {
        nextEl: '.banner-control .swiper-button-next',
        prevEl: '.banner-control .swiper-button-prev',
      },
    };
    return (
      <React.Fragment>
        <div className='banner style-five'>
          <Swiper {...swiperOption} className='banner__slider'>
            {heroFiveSliderData.map((data) => (
              <SwiperSlide key={data._id}>
                <div className='banner__slide'>
                  <div className='banner__image'>
                    <img src={data.heroImg} alt={data.heroSubtitle} />
                  </div>
                  <TextBox
                    heroSubtitle={data.heroSubtitle}
                    firstTitle={data.firstTitle}
                    lastTitle={data.lastTitle}
                    heroDesc={data.heroDesc}
                    heroBtnText={data.heroBtnText}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='banner-control'>
            <div className='swiper-button-prev'>
              <i className='ei ei-arrow_carrot-left'></i>
            </div>
            <div className='swiper-button-next'>
              <i className='ei ei-arrow_carrot-right'></i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HeroFive;
