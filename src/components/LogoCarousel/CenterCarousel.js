import React from 'react';
import { largeCarouselData } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
const CenterCarousel = () => {
  const swiperOption = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // when window width is >= 480px
      420: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

      991: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };
  return (
    <React.Fragment>
      <section className='logo-carousel-three'>
        <div className='container'>
          <div className='logo-slider-wrapper'>
            <div className='section--heading text-center'>
              <h4 className='section-title-sm wow fadeInUp'>
                Trusted over 2000+ established companies
              </h4>
            </div>
            <div
              className='row justify-content-center wow fadeInUp'
              data-wow-delay='0.3s'
            >
              <div className='col-md-6'>
                <div className='tt-logo-carousel'>
                  <Swiper {...swiperOption} className='tt-client-logo-two'>
                    {largeCarouselData.map((data) => (
                      <SwiperSlide key={data._id}>
                        <div className='client_logo' title='Brand Name'>
                          <img src={data.svgUrl} alt={data.svgAlt} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CenterCarousel;
