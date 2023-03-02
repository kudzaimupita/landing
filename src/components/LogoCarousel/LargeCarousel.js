import React from 'react';
import { largeCarouselData } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const LargeCarousel = () => {
  const swiperOption = {
    spaceBetween: 20,
    slidesPerView: 6,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
        spaceBetween: 100,
      },

      992: {
        slidesPerView: 4,
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
                  <Link
                    to='/testimonial'
                    className='btn__link wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    Read our customer stories
                    <i className='feather-arrow-right'></i>
                  </Link>
                </div>
              </div>

              <Swiper
                className='tt-logo-carousel tt-client-logo wow fadeInUp'
                {...swiperOption}
              >
                {largeCarouselData.map((data) => (
                  <SwiperSlide key={data._id}>
                    <div className='client_logo'>
                      <img src={data.svgUrl} alt={data.svgAlt} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default LargeCarousel;
