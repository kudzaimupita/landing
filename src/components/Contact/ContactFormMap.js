import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from '../Map';
class ContactFormMap extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='contact-page'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-10 pr'>
                <div className='row align-items-center pr'>
                  <div className='col-md-6'>
                    <div className='contact-form-wrapper'>
                      <div className='contact-content'>
                        <h2 className='contact-title'>Send us a Message</h2>
                        <p className='description'>
                          Why I say old chap that is spiffing cockup off his nut
                          blow.
                        </p>
                      </div>

                      <form
                        action='php/mailer.php'
                        className='contact-form'
                        data-tt-form='contact-froms'
                      >
                        <div className='input-wrap'>
                          <label>Your Name</label>
                          <div className='input-field'>
                            <input
                              type='text'
                              name='name'
                              placeholder='Name'
                              required
                            />
                            <i className='feather-user'></i>
                          </div>
                        </div>

                        <div className='input-wrap'>
                          <label>Email</label>
                          <div className='input-field'>
                            <input
                              type='email'
                              name='email'
                              placeholder='Email'
                              required
                            />
                            <i className='feather-mail'></i>
                          </div>
                        </div>

                        <div className='input-wrap mb--5'>
                          <label>Message</label>
                          <div className='input-field message-field'>
                            <textarea
                              name='content'
                              placeholder='Type you message'
                              required
                            ></textarea>
                            <i className='feather-message-square'></i>
                          </div>
                        </div>

                        <div className='input-checkbox'>
                          <input type='checkbox' />
                          <p>
                            I agree to the{' '}
                            <Link to='#'>Terms & Conditions</Link>
                          </p>
                        </div>

                        <button type='submit' className='tt__btn submit-btn'>
                          <span className='btn-text'>Send</span>
                          <i className='fas fa-spinner fa-spin'></i>
                        </button>

                        <div className='form-result alert'>
                          <div className='content'></div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='google-map'>
                      <Map />
                    </div>
                  </div>
                </div>

                <ul className='anemate-element parallax-element'>
                  <li className='layer' data-depth='0.05'>
                    <div className='inner'>
                      <img src='media/element/sf1.png' alt='shape' />
                    </div>
                  </li>

                  <li className='layer' data-depth='0.02'>
                    <div className='inner'>
                      <img src='media/element/sf3.png' alt='shape' />
                    </div>
                  </li>

                  <li className='layer' data-depth='0.04'>
                    <div className='inner'>
                      <img src='media/element/sf4.png' alt='shape' />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ContactFormMap;
