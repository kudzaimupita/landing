import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

class ImageContent1 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='image-content-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-7'>
                <div className='tt-parallax__image tt-parallax__image--one'>
                  <div className='shape-image'>
                    <div
                      className='shape-wrapper wow fadeInLeft'
                      data-wow-dealy='0.3s'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='100%'
                        height='100%'
                        viewBox='0 0 557 573'
                      >
                        <path
                          opacity='0.2'
                          fill='rgb(42, 92, 255)'
                          d='M340.000,39.000 C514.125,249.550 534.107,124.244 554.000,326.999 C567.156,461.088 521.668,652.432 389.000,538.000 C262.486,428.875 320.696,424.474 81.000,392.000 C-156.168,359.868 191.931,-140.044 340.000,39.000 Z'
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className='parallax-image'>
                    <div className='parallax-image-wrapper'>
                      <ul className='parallax-image-list'>
                        <li className='wow fadeInUp' data-wow-delay='0.3s'>
                          <img src='media/image-content/img_01.png' alt='' />
                        </li>
                        <li className='wow fadeInUp' data-wow-delay='0.3s'>
                          <img src='media/image-content/img_02.png' alt='' />
                        </li>
                        <li className='wow fadeInUp' data-wow-delay='0.5s'>
                          <img src='media/image-content/img_03.png' alt='' />
                        </li>
                        <li className='wow fadeInUp' data-wow-delay='0.5s'>
                          <img src='media/image-content/img_04.png' alt='' />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-5'>
                <div className='image-content'>
                  <SectionTitle
                    classOption='style-one'
                    firstTitle='Increase your business growth & sales'
                    description=' He lost his bottle in my flat my good sir chap my lady
                      boot'
                    descriptionTwo='is car boot well smashing crikey, are you taking the piss'
                    descriptionThree="lost the plot it's all gone."
                  />

                  <h4 className='title wow fadeInUp' data-wow-delay='0.7s'>
                    Discover the widgets
                  </h4>

                  <div className='row'>
                    <div className='col-xl-6'>
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

                    <div className='col-xl-6'>
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

                  <a
                    href='about'
                    className='tt__btn btn-outline wow fadeInUp mt-5'
                    data-wow-delay='1.1s'
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ImageContent1;
