import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, EffectFade } from 'swiper/core';
import { testimonialNineData } from '../../data/data';

SwiperCore.use([Autoplay, EffectFade, Navigation]);

const TestimonialNine = () => {
  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.testimonial-control .testi-next',
      prevEl: '.testimonial-control .testi-prev',
    },
  };

  return (
    <React.Fragment>
      <section className='testimonial-area-five'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
              <div className='tt-testimonials-wrapper'>
                <Swiper
                  {...swiperOption}
                  className='tt-testimonial style-5 wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  {testimonialNineData.map((data) => (
                    <SwiperSlide key={data._id}>
                      <div className='testimonial testimonial--five'>
                        <div className='testimonial__content'>
                          <h3 className='title'>{data.topTitle}</h3>
                          <p>{data.authorQuote}</p>
                        </div>

                        <div className='testimonial__info-wrapper'>
                          <div className='testimonial__info'>
                            <div className='avatar'>
                              <img
                                src={data.authorImg}
                                alt={data.authorName}
                                height='50'
                                width='50'
                              />
                            </div>

                            <div className='testimonial__bio'>
                              <h4 className='testimonial__name'>
                                {data.authorName}
                              </h4>
                              <span className='testimonial__designation'>
                                {data.authorTitle}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className='testimonial-control'>
                    <div
                      className='testi-prev'
                      tabIndex='0'
                      role='button'
                      aria-label='Previous slide'
                    >
                      <i className='ei ei-arrow_carrot-left'></i>
                    </div>
                    <div
                      className='testi-next'
                      tabIndex='0'
                      role='button'
                      aria-label='Next slide'
                    >
                      <i className='ei ei-arrow_carrot-right'></i>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TestimonialNine;
