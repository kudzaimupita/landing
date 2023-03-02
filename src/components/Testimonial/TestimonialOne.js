import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { testimonialOneData } from '../../data/data';
import Rating from '../Rating/Rating';
SwiperCore.use([Pagination]);

class TestimonialOne extends Component {
  render() {
    const swiperOption = {
      slidesPerView: 1,
      direction: 'vertical',
      mousewheel: true,
      pagination: {
        clickable: true,
      },
    };
    return (
      <React.Fragment>
        <section className='testimonial-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-10'>
                <div className='tt-testimonials-wrapper'>
                  <Swiper
                    {...swiperOption}
                    className='tt-testimonial style-1 wow fadeInUp'
                    data-wow-delay='0.7s'
                  >
                    {testimonialOneData.map((data) => (
                      <SwiperSlide key={data._id}>
                        <div className='testimonial testimonial--one'>
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

                          <div className='testimonial__content'>
                            <Rating />
                            <p>{data.authorQuote}</p>
                            <span className='testimonial__date'>
                              {data.testimonialDate}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default TestimonialOne;
