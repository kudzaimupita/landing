import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import Rating from '../Rating/Rating';
import { testimonialSevenData } from '../../data/data';
SwiperCore.use([Autoplay, Navigation]);

const TestimonialSeven = () => {
  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.testimonial-control-two .testi-next',
      prevEl: '.testimonial-control-two .testi-prev',
    },
  };
  return (
    <React.Fragment>
      <section className='testimonial-seven-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='tt-testimonials-wrapper-seven'>
                <Swiper
                  {...swiperOption}
                  className='tt-testimonial-single-three style-6 wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  {testimonialSevenData.map((data) => (
                    <SwiperSlide key={data._id}>
                      <div className='testimonial testimonial--seven'>
                        <div className='testimonial__info-wrap'>
                          <div className='testimonial__avater'>
                            <img src={data.authorImg} alt={data.authorName} />
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
                        <Rating />
                        <div className='testimonial__content'>
                          <p>{data.authorQuote}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className='testimonial-control-two'>
                    <div
                      className='testi-prev'
                      tabIndex='0'
                      role='button'
                      aria-label='Previous slide'
                    >
                      <i className='ei ei-arrow_left'></i>
                    </div>
                    <div
                      className='testi-next'
                      tabIndex='0'
                      role='button'
                      aria-label='Next slide'
                    >
                      <i className='ei ei-arrow_right'></i>
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

export default TestimonialSeven;
