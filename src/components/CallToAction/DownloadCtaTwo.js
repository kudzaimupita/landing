import React from 'react';

const DownloadCtaTwo = () => {
  return (
    <React.Fragment>
      <section className='home-security-section'>
        <div className='container'>
          <div className='home-security-wrapper'>
            <div className='section-heading style-four header-light'>
              <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
                Discover just how
                <br />
                Access control can be.
              </h2>

              <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                Download Free Antivirus and System
                <br />
                Optimization Utility
              </p>
            </div>

            <div className='banner__feature-wrap'>
              <div className='banner__feature-item'>
                <div className='banner__feature-icon'>
                  <img src='media/banner/banner-ten/pc.png' alt='pc' />
                </div>

                <h4 className='banner__feature-title'>
                  PC
                  <br />
                  Explore
                </h4>
              </div>

              <div className='banner__feature-item'>
                <div className='banner__feature-icon'>
                  <img src='media/banner/banner-ten/laptop.png' alt='pc' />
                </div>

                <h4 className='banner__feature-title'>
                  MAC
                  <br />
                  Explore
                </h4>
              </div>

              <div className='banner__feature-item'>
                <div className='banner__feature-icon'>
                  <img src='media/banner/banner-ten/smartphone.png' alt='pc' />
                </div>

                <h4 className='banner__feature-title'>
                  Mobile
                  <br />
                  Explore
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DownloadCtaTwo;
