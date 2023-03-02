import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

class FeatureOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='service'>
          <div className='container'>
            <SectionTitle
              firstTitle='Ultraland'
              lastTitle='feature overview'
              description='
                  So I said knees up cuppa such a fibber jeffrey a bit of hows
                  your'
              classOption='text-center'
            />
            <div className='row'>
              <div className='col-md-3 col-sm-6'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/profile.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Product Managers</a>
                    </h4>

                    <p className='description'>
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/copy.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Multiple Layouts</a>
                    </h4>

                    <p className='description'>
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/bulb.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>New Hire Onboarding</a>
                    </h4>

                    <p className='description'>
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='1.1s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/analytics.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Sales Enablement</a>
                    </h4>

                    <p className='description'>
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='1.3s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/hand_shake.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Company Training</a>
                    </h4>

                    <p className='description'>
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='1.5s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/folder.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Automation Builder</a>
                    </h4>

                    <p className='description'>
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeatureOne;
