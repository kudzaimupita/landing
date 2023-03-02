import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { testimonialTwoData } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import Rating from '../Rating/Rating';

// install Swiper modules
SwiperCore.use([Navigation]);

class TestimonialTwo extends Component {
  render() {
    const swiperOption = {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.testimonial-control .testi-next',
        prevEl: '.testimonial-control .testi-prev',
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 480px
        768: {
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
        <section className='testimonial-two-section'>
          <div className='container'>
            <div className='tt-testimonials-wrapper'>
              <div className='row align-items-center'>
                <div className='col-md-8'>
                  <div className='section-heading'>
                    <h2 className='section-title wow fadeInUp'>
                      What our users
                      <br /> have been saying.
                    </h2>
                    <p
                      className='description wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      So I said knees up cuppa such a fibber jeffrey a bit of
                      how's your.
                    </p>
                  </div>
                </div>
                <div className='col-md-4 d-flex justify-content-end'>
                  <div
                    className='testimonial-control wow fadeInUp'
                    data-wow-delay='0.5s'
                  >
                    <div className='testi-prev'>
                      <i className='ei ei-arrow_carrot-left'></i>
                    </div>
                    <div className='testi-next'>
                      <i className='ei ei-arrow_carrot-right'></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='testimonial-wrapper'>
                <Swiper
                  className='style-2 wow fadeInUp'
                  data-wow-delay='0.7s'
                  {...swiperOption}
                >
                  {testimonialTwoData.map((data) => (
                    <SwiperSlide key={data._id}>
                      <div className='testimonial testimonial--two'>
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
                        <div className='testimonial__content'>
                          <Rating />
                          <p>{data.authorQuote}</p>
                          <Link to='#' className='review-link'>
                            {data.reviewLink}
                          </Link>
                        </div>
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
  }
}
export default TestimonialTwo;
