import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import SectionTitle from '../SectionTitle/SectionTitle';

const ServiceFive = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className='service-seven'>
        <div className='container'>
          <SectionTitle
            firstTitle=' The full service'
            lastTitle=' Studio with marketing'
            classOption='style-one'
          />
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-icon-box style-eight wow fadeInUp'
                data-wow-delay='0.7s'
              >
                <div className='icon-container'>
                  <img src='media/feature/target.svg' alt='Direct Access' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='/service'>Digital strategy</Link>
                  </h4>
                  <p className='description'>
                    So I said grub chance blower bleng pardon porkies.
                  </p>
                  <Link to='/service' className='read-more-btn'>
                    Read More<i className='feather-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-icon-box style-eight wow fadeInUp'
                data-wow-delay='0.9s'
              >
                <div className='icon-container color__two'>
                  <img src='media/feature/email.svg' alt='Data Tracking' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='service'>SEO Consultancy</Link>
                  </h4>
                  <p className='description'>
                    So I said grub chance blower bleng pardon porkies.
                  </p>
                  <Link to='/service' className='read-more-btn'>
                    Read More<i className='feather-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-icon-box style-eight wow fadeInUp'
                data-wow-delay='1.1s'
              >
                <div className='icon-container color__three'>
                  <img src='media/feature/bar-graph.svg' alt='Press Releases' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='/service'>SEO Consultancy</Link>
                  </h4>
                  <p className='description'>
                    So I said grub chance blower bleng pardon porkies.
                  </p>
                  <Link to='/service' className='read-more-btn'>
                    Read More<i className='feather-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-icon-box style-eight wow fadeInUp'
                data-wow-delay='1.1s'
              >
                <div className='icon-container color__three'>
                  <img src='media/feature/headphone.svg' alt='Press Releases' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='/service'>SEO Consultancy</Link>
                  </h4>
                  <p className='description'>
                    So I said grub chance blower bleng pardon porkies.
                  </p>
                  <Link to='/service' className='read-more-btn'>
                    Read More<i className='feather-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='video-thumbnail'>
            <div className='play-button'>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ServiceFive;
