import React from 'react';

const PortfolioHeader = () => {
  return (
    <>
      <section className='portfolio-header'>
        <ul className='animated-shape'>
          <li>
            <img
              src='media/element/shape_left.png'
              alt='Shape Left'
              data-parallax='{"y": -100}'
            />
          </li>
          <li>
            <img
              src='media/element/shape_leaf.png'
              alt='Shape Left'
              data-parallax='{"y": -80, "x": 50}'
            />
          </li>
          <li>
            <img
              src='media/element/shape_leg.png'
              alt='Shape Left'
              data-parallax='{"y": 80, "x": -50}'
            />
          </li>
        </ul>

        <div className='container'>
          <div className='row align-items-end'>
            <div className='col-lg-7'>
              <div className='portfolio-title-wrapper'>
                <span className='portfolio-cat'>Branding</span>
                <h1 className='portfolio-title'>Web Design</h1>
                <p className='info-description'>
                  Start saving time on your next design project.
                </p>
              </div>
            </div>

            <div className='col-lg-5'>
              <ul className='portfolio-info-list'>
                <li>
                  <span>Date:</span>
                  June 18, 2021
                </li>
                <li>
                  <span>Client:</span>
                  Eric Widget
                </li>
                <li>
                  <span>Services:</span>
                  Branding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHeader;
