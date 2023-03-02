import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ContactInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='contact-info-section'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-10'>
                <div className='contact-info-wrap bg-wrap'>
                  <div className='row no-gutters'>
                    <div className='col-md-4'>
                      <div className='tt-contact-info'>
                        <div className='icon-container'>
                          <img
                            src='https://ultraland.themetags.com/wp-content/plugins/ultraland-core/elementor/assets/images/phone-call.jpg'
                            alt='+(426) 276 442 32'
                          />
                        </div>

                        <div className='box-content'>
                          <h4 className='box-title'>
                            <Link
                              to='#'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              +(426) 276 442 32
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-4'>
                      <div className='tt-contact-info'>
                        <div className='icon-container'>
                          <img
                            src='http://ultraland.themetags.com/wp-content/uploads/2021/04/inbox.jpg'
                            alt='info@ultraland.com'
                          />
                        </div>

                        <div className='box-content'>
                          <h4 className='box-title'>
                            <a
                              href='mailto:info@ultraland.com'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              info@ultraland.com
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-4'>
                      <div className='tt-contact-info'>
                        <div className='icon-container'>
                          <img
                            src='http://ultraland.themetags.com/wp-content/uploads/2021/04/map.jpg'
                            alt='23 Dhanmondi, Dhaka'
                          />
                        </div>

                        <div className='box-content'>
                          <h4 className='box-title'>23 Dhanmondi, Dhaka</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactInfo;
