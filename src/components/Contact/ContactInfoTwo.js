import React from 'react';

const ContactInfoTwo = () => {
  return (
    <React.Fragment>
      <section className='contact-info-section-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div
                className='tt-contact-info style-two wow fadeInUp'
                data-wow-delay='0.3s'
              >
                <div className='tt-contact-info__icon'>
                  <img src='media/feature/info-medi1.png' alt='contact info' />
                </div>

                <div className='tt-contact-info__content'>
                  <h3 className='tt-contact-info__title'>24 Hours Service</h3>
                  <p className='tt-contact-info__description'>
                    We accept dental insurance plans we bill for services.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div
                className='tt-contact-info style-two wow fadeInUp'
                data-wow-delay='0.5s'
              >
                <div className='tt-contact-info__icon'>
                  <img src='media/feature/info-medi2.png' alt='contact info' />
                </div>

                <div className='tt-contact-info__content'>
                  <h3 className='tt-contact-info__title'>Online Help</h3>
                  <p className='tt-contact-info__description'>
                    We accept dental insurance plans we bill for services.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div
                className='tt-contact-info style-two wow fadeInUp'
                data-wow-delay='0.7s'
              >
                <div className='tt-contact-info__icon'>
                  <img src='media/feature/info-medi3.png' alt='contact info' />
                </div>

                <div className='tt-contact-info__content'>
                  <h3 className='tt-contact-info__title'>Online Payment</h3>
                  <p className='tt-contact-info__description'>
                    We accept dental insurance plans we bill for services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactInfoTwo;
