import React from 'react';

const TabFour = () => {
  return (
    <>
      <section className='faq-section'>
        <div className='container'>
          <div className='section-heading style-one text-center'>
            <h2 className='section-title wow fadeInUp'>
              Frequently
              <br />
              Asked Questions
            </h2>

            <p className='description wow fadeInUp' data-wow-delay='0.3s'>
              Find answers to common questions below.
            </p>
          </div>
          <div className='tt-accordian wow fadeInUp' data-wow-delay='0.5s'>
            <div className='tt-accordian_nav-wrapper'>
              <ul className='nav tt-accordian__nav' role='tablist'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    id='general-questions-tab'
                    data-toggle='tab'
                    role='tab'
                    aria-controls='general-questions'
                    href='#general-questions'
                  >
                    General Questions
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    id='message-send-tab'
                    data-toggle='tab'
                    role='tab'
                    aria-controls='message-send'
                    href='#message-send'
                  >
                    Customization Process
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    id='privacy-security-tab'
                    data-toggle='tab'
                    role='tab'
                    aria-controls='privacy-security'
                    href='#privacy-security'
                  >
                    Integration and Scalability
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    id='multiple-states-tab'
                    data-toggle='tab'
                    role='tab'
                    aria-controls='multiple-states'
                    href='#multiple-states'
                  >
                    Cost and ROI
                  </a>
                </li>{' '}
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    id='multiple-states-tab'
                    data-toggle='tab'
                    role='tab'
                    aria-controls='multiple-states'
                    href='#multiple-states'
                  >
                    Support and Training
                  </a>
                </li>{' '}
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    id='multiple-states-tab'
                    data-toggle='tab'
                    role='tab'
                    aria-controls='multiple-states'
                    href='#multiple-states'
                  >
                    Security and Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div className='tab-content tt-accordian__content'>
              <div
                className='tab-pane fade active show'
                id='general-questions'
                role='tabpanel'
              >
                <div id='accordion-1' className='tt-accordian_faq'>
                  <div className='card active'>
                    <div className='card-header' id='general-questions-0'>
                      <h5
                        className=''
                        data-toggle='collapse'
                        data-target='#general-questions-collapse-0'
                        aria-controls='general-questions-collapse-0'
                      >
                        What is a customizable ERP system?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='general-questions-collapse-0'
                      className='collapse show'
                      data-parent='#accordion-1'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          A customizable ERP system is cloud-based software
                          designed for businesses to manage their core
                          operations, such as finance, HR, inventory, and more.
                          Customizability means it can be tailored to meet the
                          unique needs of different businesses.
                        </p>
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
                        Why should my business consider a customizable ERP
                        system?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='general-questions-collapse-1'
                      className='collapse'
                      data-parent='#accordion-1'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          Customizable ERP systems offer flexibility to adapt to
                          your specific business processes, providing
                          efficiency, cost savings, and a competitive edge.
                        </p>
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
                        How does customization work in an ERP system?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='general-questions-collapse-2'
                      className='collapse'
                      data-parent='#accordion-1'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          Customization involves configuring the ERP software to
                          match your business processes and requirements. This
                          may include adjusting workflows, adding or removing
                          modules, and creating custom reports.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='tab-pane fade ' id='message-send' role='tabpanel'>
                <div id='accordion-2' className='tt-accordian_faq'>
                  <div className='card active'>
                    <div className='card-header' id='message-send-0'>
                      <h5
                        className=''
                        data-toggle='collapse'
                        data-target='#message-send-collapse-0'
                        aria-controls='message-send-collapse-0'
                      >
                        Can non-technical users customize the ERP system?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='message-send-collapse-0'
                      className='collapse show'
                      data-parent='#accordion-2'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          Yes, many modern ERP systems provide user-friendly
                          tools, such as drag-and-drop interfaces and wizards,
                          making it accessible to non-technical users.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='card '>
                    <div className='card-header' id='message-send-1'>
                      <h5
                        className='collapsed'
                        data-toggle='collapse'
                        data-target='#message-send-collapse-1'
                        aria-controls='message-send-collapse-1'
                      >
                        How long does it typically take to customize an ERP
                        system?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='message-send-collapse-1'
                      className='collapse'
                      data-parent='#accordion-2'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          The time required for customization varies based on
                          the complexity of your requirements. Small adjustments
                          may be quick, while extensive customizations may take
                          weeks or months.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='card '>
                    <div className='card-header' id='message-send-2'>
                      <h5
                        className='collapsed'
                        data-toggle='collapse'
                        data-target='#message-send-collapse-2'
                        aria-controls='message-send-collapse-2'
                      >
                        Is professional assistance required for customization?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='message-send-collapse-2'
                      className='collapse'
                      data-parent='#accordion-2'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          While some customization can be done in-house,
                          larger-scale or complex customizations may benefit
                          from the expertise of ERP consultants or developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='tab-pane fade '
                id='privacy-security'
                role='tabpanel'
              >
                <div id='accordion-3' className='tt-accordian_faq'>
                  <div className='card active'>
                    <div className='card-header' id='privacy-security-0'>
                      <h5
                        className=''
                        data-toggle='collapse'
                        data-target='#privacy-security-collapse-0'
                        aria-controls='privacy-security-collapse-0'
                      >
                        How is our service better than other products?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='privacy-security-collapse-0'
                      className='collapse show'
                      data-parent='#accordion-3'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          A blinding shot mush bog arse hunky-dory super spend a
                          penny, baking cakes Charles bugger Richard chancer
                          haggle gutted mate, Oxford Queen’s English don’t get
                          shirty.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='card '>
                    <div className='card-header' id='privacy-security-1'>
                      <h5
                        className='collapsed'
                        data-toggle='collapse'
                        data-target='#privacy-security-collapse-1'
                        aria-controls='privacy-security-collapse-1'
                      >
                        How to contact with Customer Service?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='privacy-security-collapse-1'
                      className='collapse'
                      data-parent='#accordion-3'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          A blinding shot mush bog arse hunky-dory super spend a
                          penny, baking cakes Charles bugger Richard chancer
                          haggle gutted mate, Oxford Queen’s English don’t get
                          shirty.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='card '>
                    <div className='card-header' id='privacy-security-2'>
                      <h5
                        className='collapsed'
                        data-toggle='collapse'
                        data-target='#privacy-security-collapse-2'
                        aria-controls='privacy-security-collapse-2'
                      >
                        Where is the edit optioon on dashboard?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='privacy-security-collapse-2'
                      className='collapse'
                      data-parent='#accordion-3'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          A blinding shot mush bog arse hunky-dory super spend a
                          penny, baking cakes Charles bugger Richard chancer
                          haggle gutted mate, Oxford Queen’s English don’t get
                          shirty.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='card '>
                    <div className='card-header' id='privacy-security-3'>
                      <h5
                        className='collapsed'
                        data-toggle='collapse'
                        data-target='#privacy-security-collapse-3'
                        aria-controls='privacy-security-collapse-3'
                      >
                        Is there any custome pricing system?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='privacy-security-collapse-3'
                      className='collapse'
                      data-parent='#accordion-3'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          A blinding shot mush bog arse hunky-dory super spend a
                          penny, baking cakes Charles bugger Richard chancer
                          haggle gutted mate, Oxford Queen’s English don’t get
                          shirty.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='card '>
                    <div className='card-header' id='privacy-security-4'>
                      <h5
                        className='collapsed'
                        data-toggle='collapse'
                        data-target='#privacy-security-collapse-4'
                        aria-controls='privacy-security-collapse-4'
                      >
                        On the other hand the strengthening?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='privacy-security-collapse-4'
                      className='collapse'
                      data-parent='#accordion-3'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
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

              <div
                className='tab-pane fade '
                id='multiple-states'
                role='tabpanel'
              >
                <div id='accordion-4' className='tt-accordian_faq'>
                  <div className='card active'>
                    <div className='card-header' id='multiple-states-0'>
                      <h5
                        className=''
                        data-toggle='collapse'
                        data-target='#multiple-states-collapse-0'
                        aria-controls='multiple-states-collapse-0'
                      >
                        How to contact with Customer Service?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='multiple-states-collapse-0'
                      className='collapse show'
                      data-parent='#accordion-4'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          A blinding shot mush bog arse hunky-dory super spend a
                          penny, baking cakes Charles bugger Richard chancer
                          haggle gutted mate, Oxford Queen’s English don’t get
                          shirty.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='card '>
                    <div className='card-header' id='multiple-states-1'>
                      <h5
                        className='collapsed'
                        data-toggle='collapse'
                        data-target='#multiple-states-collapse-1'
                        aria-controls='multiple-states-collapse-1'
                      >
                        On the other hand the strengthening?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='multiple-states-collapse-1'
                      className='collapse'
                      data-parent='#accordion-4'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                          A blinding shot mush bog arse hunky-dory super spend a
                          penny, baking cakes Charles bugger Richard chancer
                          haggle gutted mate, Oxford Queen’s English don’t get
                          shirty.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='card '>
                    <div className='card-header' id='multiple-states-2'>
                      <h5
                        className='collapsed'
                        data-toggle='collapse'
                        data-target='#multiple-states-collapse-2'
                        aria-controls='multiple-states-collapse-2'
                      >
                        Largely determines the creation?
                        <i className='ei ei-arrow_carrot-up'></i>
                      </h5>
                    </div>
                    <div
                      id='multiple-states-collapse-2'
                      className='collapse'
                      data-parent='#accordion-4'
                    >
                      <div className='card-body'>
                        <p style={{ fontSize: '14px', lineHeight: '18px' }}>
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
      </section>
    </>
  );
};

export default TabFour;
