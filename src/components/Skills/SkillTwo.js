import React from 'react';

const SkillTwo = () => {
  return (
    <>
      <div className='faq-skill-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='skills-wrap'>
                <div className='section-heading style-one'>
                  <h4 className='subtitle wow fadeInUp'>Capabilites Skils</h4>
                  <h2
                    className='section-title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    We help to create visual strategies
                  </h2>
                </div>

                <div className='wrapper-full'>
                  <div className='skills'>
                    <div className='progrees-box mb-4'>
                      <div className='bar-top d-flex justify-content-between'>
                        <p>Customer Satisfaction</p>
                        <span>75%</span>
                      </div>
                      <div className='progress skill-two'>
                        <div
                          className='progress-bar skill-two'
                          role='progressbar'
                          style={{ width: '75%' }}
                          aria-valuenow='75'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                    <div className='progrees-box mb-4'>
                      <div className='bar-top d-flex justify-content-between'>
                        <p>Web Development</p>
                        <span>82%</span>
                      </div>
                      <div className='progress skill-two'>
                        <div
                          className='progress-bar skill-two'
                          role='progressbar'
                          style={{ width: '82%' }}
                          aria-valuenow='82'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                    <div className='progrees-box mb-4'>
                      <div className='bar-top d-flex justify-content-between'>
                        <p>Performance</p>
                        <span>62%</span>
                      </div>
                      <div className='progress skill-two'>
                        <div
                          className='progress-bar skill-two'
                          role='progressbar'
                          style={{ width: '62%' }}
                          aria-valuenow='62'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div
                id='accordion-1'
                className='tt-accordian tt-accordian_faq style-two wow fadeInUp'
                data-wow-delay='0.3s'
              >
                <div className='card active'>
                  <div className='card-header' id='general-questions-0'>
                    <h5
                      className='collapsed'
                      data-toggle='collapse'
                      data-target='#general-questions-collapse-0'
                      aria-controls='general-questions-collapse-0'
                    >
                      How is our service better than other products?
                      <i className='ei ei-arrow_carrot-up'></i>
                    </h5>
                  </div>
                  <div
                    id='general-questions-collapse-0'
                    className='collapse show'
                    data-parent='#accordion-1'
                  >
                    <div className='card-body'>
                      <p>
                        A blinding shot mush bog arse hunky-dory super spend a
                        penny, baking cakes Charles bugger Richard chancer
                        haggle gutted mate, Oxford Queen’s English don’t get
                        shirty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='card'>
                  <div className='card-header' id='general-questions-1'>
                    <h5
                      className='collapsed'
                      data-toggle='collapse'
                      data-target='#general-questions-collapse-1'
                      aria-controls='general-questions-collapse-1'
                    >
                      Do i have to sign a long term contract?
                      <i className='ei ei-arrow_carrot-up'></i>
                    </h5>
                  </div>
                  <div
                    id='general-questions-collapse-1'
                    className='collapse'
                    data-parent='#accordion-1'
                  >
                    <div className='card-body'>
                      <p>
                        A blinding shot mush bog arse hunky-dory super spend a
                        penny, baking cakes Charles bugger Richard chancer
                        haggle gutted mate, Oxford Queen’s English don’t get
                        shirty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='card'>
                  <div className='card-header' id='general-questions-2'>
                    <h5
                      className='collapsed'
                      data-toggle='collapse'
                      data-target='#general-questions-collapse-2'
                      aria-controls='general-questions-collapse-2'
                    >
                      Where can I learn more about using cloudflare?
                      <i className='ei ei-arrow_carrot-up'></i>
                    </h5>
                  </div>
                  <div
                    id='general-questions-collapse-2'
                    className='collapse'
                    data-parent='#accordion-1'
                  >
                    <div className='card-body'>
                      <p>
                        A blinding shot mush bog arse hunky-dory super spend a
                        penny, baking cakes Charles bugger Richard chancer
                        haggle gutted mate, Oxford Queen’s English don’t get
                        shirty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='card'>
                  <div className='card-header' id='general-questions-3'>
                    <h5
                      className='collapsed'
                      data-toggle='collapse'
                      data-target='#general-questions-collapse-3'
                      aria-controls='general-questions-collapse-3'
                    >
                      What is a project?
                      <i className='ei ei-arrow_carrot-up'></i>
                    </h5>
                  </div>
                  <div
                    id='general-questions-collapse-3'
                    className='collapse'
                    data-parent='#accordion-1'
                  >
                    <div className='card-body'>
                      <p>
                        A blinding shot mush bog arse hunky-dory super spend a
                        penny, baking cakes Charles bugger Richard chancer
                        haggle gutted mate, Oxford Queen’s English don’t get
                        shirty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillTwo;
