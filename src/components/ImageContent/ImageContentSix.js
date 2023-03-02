import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ImageContentSix extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='image-content-area-five'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                <div className='tt-parallax__image tt-parallax__image--five'>
                  <div className='shape-image'>
                    <div
                      className='shape-wrapper wow ttzoomIn'
                      data-wow-dealy='0.3s'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='584px'
                        height='559px'
                      >
                        <path
                          opacity='0.2'
                          fill='rgb(42, 92, 255)'
                          d='M326.000,44.000 C503.632,277.776 562.107,114.244 582.000,317.000 C595.156,451.088 540.668,637.432 408.000,523.000 C281.486,413.876 382.696,331.473 84.000,382.999 C-151.851,423.685 169.857,-161.495 326.000,44.000 Z'
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className='parallax-image'>
                    <div
                      className='image-one wow ttfadeInUp'
                      data-wow-dealy='0.5s'
                    >
                      <img
                        src='media/image-content/pimage_one.jpg'
                        data-parallax='{"y": -10}'
                        alt='Shape '
                      />
                    </div>

                    <div className='image-two'>
                      <img
                        src='media/image-content/pimage_two.jpg'
                        className='wow ttfadeInDown'
                        data-parallax='{"y": 10}'
                        alt='Shape '
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-5'>
                <div className='image-content'>
                  <div className='section-heading style-one'>
                    <h2
                      className='section-title wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      Increase your business growth &amp; sales
                    </h2>

                    <p
                      className='description wow fadeInUp'
                      data-wow-delay='0.5s'
                    >
                      He lost his bottle in my flat my good sir chap my lady
                      boot
                      <br />
                      is car boot well smashing crikey, are you taking the piss
                      <br />
                      lost the plot it's all gone.
                    </p>
                  </div>

                  <h4 className='title wow fadeInUp' data-wow-delay='0.7s'>
                    Discover the widgets
                  </h4>

                  <div className='row'>
                    <div className='col-md-6'>
                      <ul
                        className='tt-list wow fadeInUp'
                        data-wow-delay='0.9s'
                      >
                        <li className='list-item'>
                          <i className='feather-check'></i>
                          <span className='list-text'>Additional Form</span>
                        </li>

                        <li className='list-item'>
                          <i className='feather-check'></i>
                          <span className='list-text'>Table</span>
                        </li>
                        <li className='list-item'>
                          <i className='feather-check'></i>
                          <span className='list-text'>Cross Sells</span>
                        </li>
                      </ul>
                    </div>

                    <div className='col-md-6'>
                      <ul
                        className='tt-list wow fadeInUp'
                        data-wow-delay='0.9s'
                      >
                        <li className='list-item'>
                          <i className='feather-check'></i>
                          <span className='list-text'>Content Creation</span>
                        </li>

                        <li className='list-item'>
                          <i className='feather-check'></i>
                          <span className='list-text'>UX Design</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Link
                    to='/company'
                    className='tt__btn btn-outline wow fadeInUp mt-5'
                    data-wow-delay='1.1s'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ImageContentSix;
