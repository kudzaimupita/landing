import React from 'react';

const TabSix = () => {
  return (
    <React.Fragment>
      <section className='feature-tabs-area-four'>
        <div className='container'>
          {/* <div className="section-heading style-four text-center">
            <h2 className="section-title  wow fadeInUp" data-wow-delay="0.3s">
              Start managing your organisation's work and assets now
              <br />
              under 3 minutes
            </h2>
            <p className="description wow fadeInUp" data-wow-delay="0.5s">
              So I said knees up cuppa such a fibber jeffrey a bit of how's
              your.
            </p>
          </div> */}

          <div className='tabs-four-wrapper'>
            <div className='row align-items-center'>
              <div className='col-lg-7 tt-order-2'>
                <div
                  className='ultraland-tabs-content-wrapper tab-content'
                  id='v-pills-tabContent'
                >
                  <div
                    className='tab-pane fade show active'
                    id='v-pills-home'
                    role='tabpanel'
                    aria-labelledby='v-pills-home-tab'
                  >
                    <div className='content'>
                      <div className='ultraland-tab-contents'>
                        <div className='tab-image'>
                          <img
                            src='media/tabs/ff.png'
                            alt=''
                            className='tab-image'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-profile'
                    role='tabpanel'
                    aria-labelledby='v-pills-profile-tab'
                  >
                    <div className='content'>
                      <div className='ultraland-tab-contents'>
                        <div className='tab-image'>
                          <img
                            src='media/tabs/tab_three.png'
                            alt=''
                            className='tab-image'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-messages'
                    role='tabpanel'
                    aria-labelledby='v-pills-messages-tab'
                  >
                    <div className='content'>
                      <div className='ultraland-tab-contents'>
                        <div className='tab-image'>
                          <img
                            src='media/tabs/tab_three.png'
                            alt=''
                            className='tab-image'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5'>
                <div
                  id='ultraland-tabs'
                  className='ultraland-tabs image-tabs-two'
                >
                  <div
                    className='nav flex-column nav-pills ultraland-tabs-nav'
                    id='v-pills-tab'
                    role='tablist'
                    aria-orientation='vertical'
                  >
                    <a
                      className='nav-link active'
                      id='v-pills-home-tab'
                      data-toggle='pill'
                      href='#v-pills-home'
                      role='tab'
                      aria-controls='v-pills-home'
                      aria-selected='true'
                    >
                      <span className='tab-icon'>
                        <img src='media/tabs/icon1.png' alt='tab icon' />
                      </span>
                      Reports and Analytics
                      {/* <br />
                      your product */}
                    </a>
                    <a
                      className='nav-link'
                      id='v-pills-profile-tab'
                      data-toggle='pill'
                      href='#v-pills-profile'
                      role='tab'
                      aria-controls='v-pills-profile'
                      aria-selected='false'
                    >
                      <span className='tab-icon'>
                        <img src='media/tabs/icon2.png' alt='tab icon' />
                      </span>
                      Predictive maintenance
                      {/* <br />
                      domain ownership */}
                    </a>
                    <a
                      className='nav-link'
                      id='v-pills-messages-tab'
                      data-toggle='pill'
                      href='#v-pills-messages'
                      role='tab'
                      aria-controls='v-pills-messages'
                      aria-selected='false'
                    >
                      <span className='tab-icon'>
                        <img src='media/tabs/icon3.png' alt='tab icon' />
                      </span>
                      Aggregate Reports and Audit tools
                      {/* <br />
                      recurring tests */}
                    </a>
                    <a
                      className='nav-link'
                      id='v-pills-profile-tab'
                      data-toggle='pill'
                      href='#v-pills-profile'
                      role='tab'
                      aria-controls='v-pills-profile'
                      aria-selected='false'
                    >
                      <span className='tab-icon'>
                        <img src='media/tabs/icon2.png' alt='tab icon' />
                      </span>
                      Complex job scheduler
                      {/* <br />
                      domain ownership */}
                    </a>
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

export default TabSix;
