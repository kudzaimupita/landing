import React from 'react';
import { Link } from 'react-router-dom';

const ImageContentSeven = () => {
  return (
    <React.Fragment>
      <section className='about-education'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='tt-parallax__image tt-parallax__image--seven'>
                <div className='shape-image'>
                  <div className='shape-wrapper'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='589px'
                      height='580px'
                    >
                      <path
                        fillRule='evenodd'
                        fill='rgb(255, 240, 235)'
                        d='M155.076,88.381 C121.886,273.021 -59.461,231.843 19.978,351.582 C132.645,521.406 -3.941,705.764 438.885,460.192 C560.264,392.881 648.030,213.233 537.847,101.681 C430.075,-7.430 180.143,-51.073 155.076,88.381 Z'
                      />
                    </svg>
                  </div>
                </div>

                <div className='parallax-image'>
                  <div className='image-one'>
                    <img src='media/image-content/about-edu1.jpg' alt='About' />
                  </div>

                  <div className='image-two'>
                    <img src='media/image-content/about-edu2.jpg' alt='About' />
                  </div>

                  <div className='image-three'>
                    <img src='media/image-content/about-edu3.jpg' alt='About' />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='about-education-content'>
                <div className='section-heading style-one'>
                  <h2
                    className='section-title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    Make your personalized learning journey
                  </h2>

                  <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                    The his nut say faf about excusesloshed is matie boy hip
                    shop nice one blow.
                  </p>
                </div>

                <h3 className='title'>7-week free course and...</h3>

                <ul
                  className='tt-list style-two wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>
                      No biggie cracking goal squiffy
                    </span>
                  </li>

                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>
                      William ruddy elizabeth bubble squeak
                    </span>
                  </li>
                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>
                      Tosser zonked hotpot, horse play
                    </span>
                  </li>

                  <li className='list-item'>
                    <i className='feather-check'></i>
                    <span className='list-text'>Educator support.</span>
                  </li>
                </ul>

                <Link
                  to='/company'
                  className='tt__btn btn-outline btn-sqr mt-5'
                >
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ImageContentSeven;
