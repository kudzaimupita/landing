import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

class ImageContent2 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='image-content-area-two'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 tt-order-2'>
                <div className='image-content'>
                  <SectionTitle
                    classOption='style-one'
                    firstTitle='Create a professional'
                    lastTitle='the story in minutes.'
                    description='He lost his bottle in my flat my good sir chap my lady
                    boot'
                    descriptionTwo='is car boot well smashing crikey.!'
                  />

                  <ul className='tt-list style-two'>
                    <li
                      className='list_item wow fadeInUp'
                      data-wow-delay='0.7s'
                    >
                      <i className='ei ei-icon_check'></i>

                      <div className='list-content'>
                        <h3 className='list-text'>Multipurpose Layout</h3>
                        <p>
                          The bee's knees cracking goal it's all gone to
                          <br /> pot old young delinquent.
                        </p>
                      </div>
                    </li>
                    <li
                      className='list_item wow fadeInUp'
                      data-wow-delay='0.7s'
                    >
                      <i className='ei ei-icon_check'></i>

                      <div className='list-content'>
                        <h3 className='list-text'>Application Design</h3>

                        <p>
                          The bee's knees cracking goal it's all gone to
                          <br /> pot old young delinquent.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <a
                    href='about'
                    className='tt__btn btn-outline wow fadeInUp'
                    data-wow-delay='0.9s'
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='tt-parallax__image tt-parallax__image--two'>
                  <div className='shape-image'>
                    <div className='shape-wrapper wow fadeInLeft'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='100%'
                        height='100%'
                        viewBox='0 0 496 594'
                      >
                        <path
                          opacity='0.2'
                          fill='rgb(252, 63, 157)'
                          d='M388.000,113.000 C376.082,289.071 582.444,363.776 453.000,400.999 C186.432,477.654 406.667,588.819 272.000, 593.000 C59.412,599.599 -23.327,426.813 6.000,270.999 C49.477,40.006 403.605,-117.539 388.000,113.000 Z'
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className='parallax-image'>
                    <div className='parallax-image-wrapper'>
                      <ul className='parallax-image-list_two'>
                        <li className='wow fadeInUp' data-wow-delay='0.3s'>
                          <img
                            src='media/image-content/img_05.png'
                            alt='ultraland'
                          />
                        </li>
                        <li className='wow fadeInUp' data-wow-delay='0.5s'>
                          <img
                            src='media/image-content/img_06.png'
                            alt='ultraland'
                          />
                        </li>
                        <li className='wow fadeInUp' data-wow-delay='0.7s'>
                          <img
                            src='media/image-content/img_07.png'
                            alt='ultraland'
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ImageContent2;
