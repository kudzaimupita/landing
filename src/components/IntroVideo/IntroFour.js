import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const IntroFour = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <section className='intro-video-four'>
        <div className='row align-items-center no-gutters'>
          <div className='col-lg-6'>
            <div className='video-intro-box'>
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
              {/* <div className='intro-video-thumbnail'>
                <img
                  src='media/background/intro_video_bg_four.jpg'
                  alt='Video Thumnail'
                />
              </div> */}
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='video-content style-three'>
              <div className='section-heading style-two'>
                <h3 className='section-subtitle wow fadeInUp'>Welcome To</h3>
                <h2
                  className='section-title wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  Ultraland Hospital
                </h2>
                <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                  So I said knees up cuppa such a fibber jeffrey a bit of how's
                  your.
                </p>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <div
                    className='tt-chamber-time-box wow fadeInUp'
                    data-wow-delay='0.7s'
                  >
                    <div className='chamber-icon'>
                      <img
                        src='media/feature/wall-clock.png'
                        alt='Clock Icon'
                      />
                      <span className='hour-time'>am</span>
                    </div>

                    <div className='chamber-content'>
                      <h3 className='chamber-title'>Morning 8 am to 10 am</h3>
                      <p className='chamber-description'>
                        This alone would be enough for a 5 star rating. On top
                        of a great tool is even better customer support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div
                    className='tt-chamber-time-box wow fadeInUp'
                    data-wow-delay='0.7s'
                  >
                    <div className='chamber-icon'>
                      <img
                        src='media/feature/wall-clock2.png'
                        alt='Clock Icon'
                      />
                      <span className='hour-time color-two'>pm</span>
                    </div>

                    <div className='chamber-content'>
                      <h3 className='chamber-title'>Evening 4 pm to 8 pm</h3>
                      <p className='chamber-description'>
                        This alone would be enough for a 5 star rating. On top
                        of a great tool is even better customer support.
                      </p>
                    </div>
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

export default IntroFour;
