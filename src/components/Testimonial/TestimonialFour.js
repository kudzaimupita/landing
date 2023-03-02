import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { testimonialFourData } from '../../data/data';
import ModalVideo from 'react-modal-video';
import SectionTitle from '../SectionTitle/SectionTitle';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const TestimonialFour = () => {
  const [isOpen, setOpen] = useState(false);
  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 50,
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
      <section className='testimonial-four-section'>
        <div className='container'>
          <div className='tt-testimonials-wrapper'>
            <div className='row'>
              <div className='col-lg-7 col-md-6'>
                <div className='testimonial-left-content-two'>
                  <div className='play-button wow fadeInUp'>
                    <ModalVideo
                      channel='youtube'
                      autoplay
                      isOpen={isOpen}
                      videoId='9No-FiEInLA'
                      onClose={() => setOpen(false)}
                    />
                    <a
                      href='#/'
                      className='popup-play-btn'
                      onClick={() => setOpen(true)}
                    >
                      <i className='fas fa-play'></i>
                    </a>
                  </div>

                  <SectionTitle
                    firstTitle='Trusted by more than'
                    lastTitle=' 4,200 clients in the world'
                    description='
                      Trusted by teams of all sizes'
                  />

                  <ul
                    className='client-logo-list style_two column_4 wow fadeInUp'
                    data-wow-delay='0.5s'
                  >
                    <li>
                      <Link to='#'>
                        <img
                          src='media/brand-logo/logo8.png'
                          alt='Client Logo'
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <img
                          src='media/brand-logo/logo9.png'
                          alt='Client Logo'
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <img
                          src='media/brand-logo/logo10.png'
                          alt='Client Logo'
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <img
                          src='media/brand-logo/logo11.png'
                          alt='Client Logo'
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-5 col-md-6'>
                <div className='tt-testimonial-single-two style-3'>
                  <Swiper {...swiperOption}>
                    {testimonialFourData.map((data) => (
                      <SwiperSlide key={data._id}>
                        <div className='testimonial testimonial--four'>
                          <div className='testimonial__avater'>
                            <img src={data.authorImg} alt={data.authorName} />
                          </div>

                          <div className='testimonial__content'>
                            <h4 className='testimonial__title'>
                              {data.authorCat}
                            </h4>

                            <p>{data.authorQuote}</p>

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
        </div>
      </section>
    </React.Fragment>
  );
};
export default TestimonialFour;
