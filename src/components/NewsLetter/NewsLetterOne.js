import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
class NewsLetterOne extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='newsletter'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-4'>
                <SectionTitle
                  firstTitle='Join over 10,762 Users Worldwide'
                  description="Loo spiffing it's your round dropped a clanger haggle say
                    faff about argy bargy."
                />
              </div>

              <div className='col-lg-5 offset-lg-3'>
                <form
                  action='php/subscribe.php'
                  method='post'
                  className='newsletter-form wow fadeInUp'
                  data-tt-form='newsletter-subscribe'
                >
                  <div className='newsletter-inner d-flex justify-content-center style_one'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Enter your email...'
                      required
                    />

                    <button
                      type='submit'
                      name='submit'
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

                <ul className='newsletter-info'>
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

export default NewsLetterOne;
