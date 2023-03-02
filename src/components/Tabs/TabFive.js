import React from 'react';

const TabFive = () => {
  return (
    <React.Fragment>
      <section className='feature-tabs-area-four'>
        <div className='container'>
          <div className='section-heading style-four text-center'>
            <h2 className='section-title  wow fadeInUp' data-wow-delay='0.3s'>
              Set up your first security test in
              <br />
              under 3 minutes
            </h2>

            <p className='description wow fadeInUp' data-wow-delay='0.5s'>
              So I said knees up cuppa such a fibber jeffrey a bit of how's
              your.
            </p>
          </div>

          <div className='tabs-four-wrapper'>
            <div className='row align-items-center'>
              <div className='col-lg-7 tt-order-2'>
                <div
                  id='ultraland-tabs-content'
                  className='ultraland-tabs-content-wrapper wow fadeInUp'
                >
                  <div id='image-tab1' className='content'>
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

                  <div id='image-tab-2' className='content'>
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
                  <div id='image-tab-3' className='content'>
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

              <div className='col-lg-5'>
                <div
                  id='ultraland-tabs'
                  className='ultraland-tabs image-tabs-two wow fadeInUp'
                >
                  <ul id='ultraland-tabs-nav'>
                    <li>
                      <a href='#image-tab1'>
                        <span className='tab-icon'>
                          <img src='media/tabs/icon1.png' alt='tab icon' />
                        </span>
                        Want to import designs into
                        <br />
                        your product
                      </a>
                    </li>

                    <li>
                      <a href='#image-tab-2'>
                        <span className='tab-icon'>
                          <img src='media/tabs/icon2.png' alt='tab icon' />
                        </span>
                        Enter your URL and verify
                        <br />
                        domain ownership
                      </a>
                    </li>

                    <li>
                      <a href='#image-tab-3'>
                        <span className='tab-icon'>
                          <img src='media/tabs/icon3.png' alt='tab icon' />
                        </span>
                        Start a new test or schedule
                        <br />
                        recurring tests
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TabFive;
