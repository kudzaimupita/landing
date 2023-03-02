import React, { Component } from 'react';

class NewsLetterTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='newsletter'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-4'>
                <div className='section-heading'>
                  <h2 className='section-title wow fadeInUp'>
                    Join over 10,762 Users Worldwide
                  </h2>

                  <p className='description wow fadeInUp' data-wow-delay='0.3s'>
                    Loo spiffing it's your round dropped a clanger haggle say
                    faff about argy bargy.
                  </p>
                </div>
              </div>

              <div className='col-lg-5 offset-lg-3'>
                <form
                  action='php/subscribe.php'
                  method='post'
                  className='newsletter-form wow fadeInUp'
                  data-tt-form='newsletter-subscribe'
                >
                  <div className='newsletter-inner d-flex justify-content-center style_two'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Enter your email...'
                      required=''
                    />

                    <button
                      type='submit'
                      name='submit'
                      id='newsletter-submit'
                      className='newsletter-submit tt__btn'
                    >
                      <span>Subscribe Now</span>
                      <i className='fas fa-spinner fa-spin'></i>
                    </button>
                  </div>

                  <div className='form-result alert'>
                    <div className='content'></div>
                  </div>
                </form>

                <ul className='newsletter-info wow fadeInUp' data-wow-delay='0.3s'>
                  <li>
                    <i className='ei ei-icon_check'></i>No credit card required
                  </li>
                  <li>
                    <i className='ei ei-icon_check'></i>No software to install
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
export default NewsLetterTwo;
