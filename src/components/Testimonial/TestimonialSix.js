import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { testimonialSixData } from '../../data/data';

SwiperCore.use([Pagination]);
const TestimonialSix = () => {
  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    mousewheel: true,
    spaceBetween: 10,
    speed: 700,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      clickable: true,
    },
  };
  return (
    <React.Fragment>
      <section className='testimonial-six-section'>
        <div className='container'>
          <div className='tt-testimonials-wrapper'>
            <div className='row align-items-center'>
              <div className='col-lg-7'>
                <div className='learn-info-content-wrap'>
                  <h2 className='learn-info-title'>
                    People love to learn with Ultraland
                  </h2>

                  <div className='learn-info-box-wrap'>
                    <div className='learn-info-box'>
                      <h3 className='info-title'>24/7</h3>
                      <p className='info'>
                        7/24 users reported better
                        <br /> learning outcomes.
                      </p>
                    </div>

                    <div className='learn-info-box'>
                      <h3 className='info-title'>90%</h3>
                      <p className='info'>
                        90% of students see their course
                        <br /> through to completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-5'>
                <Swiper
                  {...swiperOption}
                  className='tt-testimonial-single-three style-6 wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  {testimonialSixData.map((data) => (
                    <SwiperSlide key={data._id}>
                      <div className='testimonial testimonial--six'>
                        <div className='testimonial__content'>
                          <p>{data.authorQuote}</p>
                        </div>

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
};

export default TestimonialSix;
