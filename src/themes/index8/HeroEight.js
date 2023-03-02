import React from 'react';

const HeroEight = () => {
  return (
    <>
      <section className='banner banner--eight d-flex align-items-center'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 tt-order-lg-2'>
              <div className='banner__content'>
                <h2
                  className='banner__title wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  <span>Education</span> is <br />
                  The best way to Reform people.
                </h2>

                <p
                  className='wow fadeInUp banner__description'
                  data-wow-delay='.5s'
                >
                  Online learning is the future of education, and it is right
                  now all around us.
                </p>

                <form
                  action=''
                  className='course-search-form wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='search-field-wrap'>
                    <i className='feather-search'></i>
                    <input
                      type='text'
                      placeholder='Enter your course name'
                      className='search-field'
                    />
                  </div>

                  <button type='submit'>
                    Search now <i className='feather-arrow-right'></i>
                  </button>
                </form>

                <div
                  className='group-image-wrap wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <ul className='group-image'>
                    <li>
                      <img
                        src='media/banner/banner-eight/image1.png'
                        alt='banner'
                      />
                    </li>
                    <li>
                      <img
                        src='media/banner/banner-eight/image2.png'
                        alt='banner'
                      />
                    </li>
                    <li>
                      <img
                        src='media/banner/banner-eight/image3.png'
                        alt='banner'
                      />
                    </li>
                    <li>
                      <img
                        src='media/banner/banner-eight/image4.png'
                        alt='banner'
                      />
                    </li>
                  </ul>

                  <p className='group-text'>Creative Team. View Price.</p>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='banner__feature-image'>
                <img
                  className='wow fadeInUp'
                  src='media/banner/banner-eight/banner_eight.png'
                  alt='banner '
                />

                <ul className='banner__animate-element'>
                  <li>
                    <img
                      src='media/banner/banner-eight/top.png'
                      className='wow fadeInDown'
                      data-wow-delay='0.5s'
                      alt='banner element'
                    />
                  </li>
                  <li>
                    <img
                      src='media/banner/banner-eight/left.png'
                      className='wow fadeInUp'
                      data-wow-delay='0.5s'
                      alt='banner element'
                    />
                  </li>
                  <li>
                    <img
                      src='media/banner/banner-eight/right.png'
                      className='wow fadeInRight'
                      data-wow-delay='0.5s'
                      alt='banner element'
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ul className='banner-bg-shape'>
          <li>
            <img
              src='media/banner/banner-eight/shape1.png'
              alt='banner shape'
            />
          </li>
          <li>
            <img
              src='media/banner/banner-eight/shape2.png'
              alt='banner shape'
            />
          </li>
          <li>
            <img
              src='media/banner/banner-eight/shape3.png'
              alt='banner shape'
            />
          </li>
          <li>
            <img
              src='media/banner/banner-eight/shape4.png'
              alt='banner shape'
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export default HeroEight;
