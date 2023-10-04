import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import { Link } from 'react-router-dom';
import { testimonialThreeData } from '../../data/data';
SwiperCore.use([Navigation, Thumbs]);

const TestimonialThree = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    thumbs: { swiper: thumbsSwiper },
  };
  const thumbOption = {
    spaceBetween: 0,
    slidesPerView: 3,
    speed: 700,
    freeMode: true,
  };
  return (
    <React.Fragment>
      <section className='testimonial-three-section'>
        <div className='container'>
          <div className='tt-testimonials-wrapper'>
            <div className='row'>
              <div className='col-lg-5 col-md-6'>
                <div className='testimonial-left-content'>
                  <div className='section-heading'>
                    <h2 className='section-title wow fadeInUp'>
                      Our customers
                      <br />
                      love what we do
                    </h2>
                    <p
                      className='description wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      Servly an Official Marketing Partner
                    </p>
                  </div>

                  <ul
                    className='client-logo-list style_two column_3 wow fadeInUp'
                    data-wow-delay='0.5s'
                  >
                    <li>
                      <Link to='#'>
                        <img
                          src='media/brand-logo/logo4.png'
                          alt='Client Logo'
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <img
                          src='media/brand-logo/logo5.png'
                          alt='Client Logo'
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <img
                          src='media/brand-logo/logo6.png'
                          alt='Client Logo'
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <img
                          src='media/brand-logo/logo7.png'
                          alt='Client Logo'
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-7 col-md-6'>
                <Swiper
                  {...swiperOption}
                  className='tt-testimonial-single style-3 wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  {testimonialThreeData.map((data) => (
                    <SwiperSlide key={data._id}>
                      <div className='testimonial testimonial--three'>
                        <div className='testimonial__info'>
                          <div className='quote'>
                            <img src={data.quoteImg} alt={data.authorName} />
                          </div>
                        </div>

                        <div className='testimonial__content'>
                          <p>{data.authorQuote}</p>

                          <div className='testimonial__bio'>
                            <h4 className='testimonial__name'>
                              {data.authorTitle}
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

                <Swiper
                  {...thumbOption}
                  onSwiper={setThumbsSwiper}
                  className='testimonial-thumb wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  {testimonialThreeData.map((data) => (
                    <SwiperSlide key={data._id}>
                      <div className='testiminial-nav-thumb'>
                        <img src={data.thumbImg} alt={data.authorName} />
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
export default TestimonialThree;
