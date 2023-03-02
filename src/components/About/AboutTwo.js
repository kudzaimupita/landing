import React from 'react';

const AboutTwo = () => {
  return (
    <React.Fragment>
      <section className='about-doctor'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 tt-order-2'>
              <div className='about-doctor-content'>
                <div className='section-heading style-two'>
                  <h3 className='section-subtitle wow fadeInUp'>We Provide</h3>
                  <h2
                    className='section-title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    Qualified help In.
                  </h2>
                  <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                    So I said knees up cuppa such a fibber jeffrey a bit of
                    how's your.
                  </p>
                </div>

                <ul
                  className='tt-list style-three wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>Gynecology</span>
                  </li>

                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>Family Planning</span>
                  </li>
                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>Hysteroscopy</span>
                  </li>

                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>
                      Early Pregnancy Assessment
                    </span>
                  </li>

                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>In Vitro Fertilization</span>
                  </li>

                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>Labour & Delivery</span>
                  </li>

                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>Master of Science</span>
                  </li>

                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>
                      Reproductive Endocrinology
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-5'>
              <div className='about-doctor-feature-image wow fadeInRight'>
                <img src='media/image-content/doctor-about.png' alt='About ' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutTwo;
