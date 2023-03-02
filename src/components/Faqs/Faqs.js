import React from 'react';

const Faqs = () => {
  return (
    <>
      <section className='faq-medical-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div
                className='tt-faq-image wow fadeInLeft'
                data-wow-delay='0.3s'
              >
                <img src='media/feature/faq_medical.jpg' alt='faq' />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='section-heading style-two'>
                <h3 className='section-subtitle wow fadeInUp'>Excellence is</h3>
                <h2
                  className='section-title wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  Our speciality
                </h2>
                <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                  So I said knees up cuppa such a fibber jeffrey a bit of how's
                  your..
                </p>
              </div>

              <div
                className='tt-accordian style-three wow fadeInUp'
                data-wow-delay='0.5s'
              >
                <div
                  className='tab-pane fade show'
                  id='general-questions'
                  role='tabpanel'
                >
                  <div
                    id='accordion-1'
                    className='tt-accordian_faq style-three'
                  >
                    <div className='card'>
                      <div className='card-header' id='general-questions-0'>
                        <h5
                          className=''
                          data-toggle='collapse'
                          data-target='#general-questions-collapse-0'
                          aria-controls='general-questions-collapse-0'
                        >
                          Get Answers about Health
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
                            A blinding shot mush bog arse hunky-dory super spend
                            a penny, baking cakes Charles bugger Richard.
                          </p>

                          <ul className='feature-list'>
                            <li>
                              <i className='ei ei-icon_check_alt2'></i>Nutrition
                              counseling
                            </li>
                            <li>
                              <i className='ei ei-icon_check_alt2'></i>Family
                              planning
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='card '>
                      <div className='card-header' id='general-questions-1'>
                        <h5
                          className='collapsed'
                          data-toggle='collapse'
                          data-target='#general-questions-collapse-1'
                          aria-controls='general-questions-collapse-1'
                        >
                          Wellness and prevention
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
                            A blinding shot mush bog arse hunky-dory super spend
                            a penny, baking cakes Charles bugger Richard.
                          </p>

                          <ul className='feature-list'>
                            <li>
                              <i className='ei ei-icon_check_alt2'></i>Nutrition
                              counseling
                            </li>
                            <li>
                              <i className='ei ei-icon_check_alt2'></i>Family
                              planning
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='card '>
                      <div className='card-header' id='general-questions-2'>
                        <h5
                          className='collapsed'
                          data-toggle='collapse'
                          data-target='#general-questions-collapse-2'
                          aria-controls='general-questions-collapse-2'
                        >
                          Nurturing Body And Mind
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
                            A blinding shot mush bog arse hunky-dory super spend
                            a penny, baking cakes Charles bugger Richard.
                          </p>

                          <ul className='feature-list'>
                            <li>
                              <i className='ei ei-icon_check_alt2'></i>Nutrition
                              counseling
                            </li>
                            <li>
                              <i className='ei ei-icon_check_alt2'></i>Family
                              planning
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
