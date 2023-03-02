import React, { Component } from 'react';

class AppointmentMed extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='appointment-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='section-heading style-two'>
                  <h3 className='section-subtitle wow fadeInUp'>
                    We are here for you.
                  </h3>
                  <h2
                    className='section-title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    Appointment
                  </h2>
                  <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                    We will send you a confirmation
                    <br />
                    within 24 hours.
                  </p>

                  <div
                    className='appointment-contact-info wow fadeInUp'
                    data-wow-delay='0.7s'
                  >
                    <h3 className='appointment-contact-info-title'>
                      Emergency?
                    </h3>
                    <p className='appointment-contact-info-number'>
                      Call +(602) 442 762 22
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <form
                  action='php/mailer.php'
                  className='appointment-form wow fadeInUp'
                  data-wow-delay='0.3s'
                  data-tt-form='appointment-from'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='input-field'>
                        <input
                          type='text'
                          name='name'
                          placeholder='Full Name'
                          required=''
                        />
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className='input-field'>
                        <input
                          type='tel'
                          name='phone'
                          placeholder='Phone'
                          required=''
                        />
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className='input-field'>
                        <input
                          type='email'
                          name='email'
                          placeholder='Email'
                          required=''
                        />
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className='input-field'>
                        <select
                          name='doctor-list'
                          id='doctor-list'
                          className='tt-select'
                        >
                          <option value=''>Select Doctor</option>
                          <option value=''>Joss Sticks</option>
                          <option value=''>Lance Bogrol</option>
                          <option value=''>Penny Tool</option>
                          <option value=''>Ravi Leigh</option>
                        </select>
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className='input-field'>
                        <input
                          type='date'
                          name='date'
                          placeholder='Date'
                          required=''
                        />
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className='input-field'>
                        <input
                          type='time'
                          name='time'
                          placeholder='Time'
                          required=''
                        />
                      </div>
                    </div>

                    <div className='col-md-12'>
                      <div className='input-field message-field'>
                        <textarea
                          name='content'
                          placeholder='Type you message'
                          required=''
                        ></textarea>
                      </div>

                      <button type='submit' className='tt__btn submit-btn'>
                        <span className='btn-text'>Submit Now</span>
                      </button>

                      <div
                        className='form-result alert'
                        style={{ display: 'none' }}
                      >
                        <div className='content'></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default AppointmentMed;
