import React from 'react';
import { Link } from 'react-router-dom';
import { smallCarouselData } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';

const SmallCarousel = () => {
  const swiperOption = {
    spaceBetween: 20,
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 100,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 90,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 110,
      },

      576: {
        slidesPerView: 3,
        spaceBetween: 60,
      },

      320: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <React.Fragment>
      <Swiper
        className='tt-logo-carousel tt-client-logo-two wow fadeInUp'
        {...swiperOption}
      >
        {smallCarouselData.map((data) => (
          <SwiperSlide key={data._id}>
            <div className='client_logo'>
              <Link to='#'>
                <img src={data.imgUrl} alt={data.imgAlt} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default SmallCarousel;
