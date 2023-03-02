import React from 'react';

const AboutThree = () => {
  return (
    <React.Fragment>
      <section className='about-doctor'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <div className='tt-parallax__image tt-parallax__image--eight'>
                <div className='parallax-image'>
                  <div
                    className='image-one wow ttfadeInUp animated'
                    data-wow-dealy='0.5s'
                  >
                    <img src='media/image-content/dts1.png' alt='Shape' />
                  </div>

                  <div className='image-two'>
                    <img
                      src='media/image-content/dts2.png'
                      className='wow fadeIn'
                      data-parallax='{"x": -50}'
                      alt='Shape'
                    />
                  </div>

                  <div className='image-three'>
                    <img
                      src='media/image-content/dts3.png'
                      className='wow fadeIn'
                      data-parallax='{"y": -50}'
                      alt='Shape'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-5'>
              <div className='about-science-content'>
                <div className='section-heading'>
                  <h2
                    className='section-title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    Dashboard to capture All your live data
                  </h2>
                  <p className='lead'>
                    Looking for a solution to a confusing
                    <br />
                    Analysis problem.
                  </p>

                  <p className='description'>
                    So I said knees up cuppa such a fibber jeffrey a<br /> bit
                    of how's your.
                  </p>
                </div>

                <ul
                  className='tt-list style-four wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <li className='list-item'>
                    <span className='list-text'>Predictive Analysis</span>
                  </li>

                  <li className='list-item'>
                    <span className='list-text'>Clean & Modern Design</span>
                  </li>
                  <li className='list-item'>
                    <span className='list-text'>Data Cleaning</span>
                  </li>

                  <li className='list-item'>
                    <span className='list-text'>Data Processing</span>
                  </li>

                  <li className='list-item'>
                    <span className='list-text'>Initial data analysis</span>
                  </li>

                  <li className='list-item'>
                    <span className='list-text'>Data Science</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='row align-items-center mt-220'>
            <div className='col-lg-4 tt-order-2'>
              <div className='about-science-content'>
                <div className='section-heading'>
                  <h2
                    className='section-title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    Data science
                    <br />
                    &amp; analytics to life
                  </h2>

                  <p className='description'>
                    So I said knees up cuppa such a fibber jeffrey a<br /> bit
                    of how's your.
                  </p>
                </div>

                <ul className='list-with-icon'>
                  <li>
                    <div className='list-icon'>
                      <img src='media/feature/list-icon1.png' alt='list icon' />
                    </div>

                    <h6 className='list-title'>Analytics Business</h6>
                  </li>

                  <li>
                    <div className='list-icon color-two'>
                      <img src='media/feature/list-icon2.png' alt='list icon' />
                    </div>

                    <h6 className='list-title'>Data Processing</h6>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-8'>
              <div className='tt-parallax__image tt-parallax__image--nine'>
                <div className='parallax-image'>
                  <div
                    className='image-one wow ttfadeInUp animated'
                    data-wow-dealy='0.5s'
                  >
                    <img src='media/image-content/dts4.png' alt='Shape' />
                  </div>

                  <div className='image-two'>
                    <img
                      src='media/image-content/dts5.png'
                      className='wow fadeIn'
                      data-parallax='{"x": -50}'
                      alt='Shape'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutThree;
