import React from 'react';
import { Link } from 'react-router-dom';

const ImageContentFive = () => {
  return (
    <>
      <div className='image-content-six-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 col-md-6'>
              <div
                className='tt-parallax__image tt-parallax__image--six wow fadeInUp'
                data-wow-delay='0.3s'
              >
                <img src='media/image-content/image-three.png' alt='content' />
              </div>
            </div>

            <div className='col-lg-5 col-md-6'>
              <div className='image-content-six'>
                <div className='section-heading'>
                  <h2 className='section-title wow fadeInUp'>
                    Grow your Business
                    <br />
                    with our SEO agency
                  </h2>

                  <div
                    className='description wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    <p>
                      Why I say old chap that is spiffing, quaint cracking goal
                      cor blimey guvnor say pardon you codswallop some dodgy
                      chav, happy days Harry tickety bo bits and bobs faff about
                      burke mufty blow skive lavatory.
                    </p>
                  </div>
                </div>

                <div
                  className='author-info-box style-two wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='avatar'>
                    <img src='media/testimonial/author.png' alt='Author' />
                  </div>

                  <div className='info-wrap'>
                    <h3 className=' author-info'>Jason Response</h3>
                    <p className='position'>– CEO @ Google</p>
                  </div>
                </div>

                <Link
                  to='/company'
                  className='tt__btn btn-outline btn-outline-dark btn-round mt-5 wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContentFive;
