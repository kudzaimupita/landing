import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const IntroTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <section className='intro-video-two'>
        <div className='container'>
          <div className='video-content style-two text-center'>
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
            <div className='section-heading style-one'>
              <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
                SEO & Marketing
              </h2>
              <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                Why I say old chap that is spiffing cockup, blower cheeky quaint
                pardon me cheesed off gutted mate the bee's knees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default IntroTwo;
