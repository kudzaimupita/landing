import React, { Component } from 'react';

class NewsLetterFour extends Component {
  render() {
    return (
      <div>
        <section className='newsletter-three'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-5'>
                <div className='section-heading'>
                  <h2 className='section-title wow fadeInUp'>
                    Save your data, wherever you are.
                  </h2>
                </div>
              </div>

              <div className='col-lg-5 offset-lg-2'>
                <form
                  action='php/subscribe.php'
                  method='post'
                  className='newsletter-form-three wow fadeInUp'
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
                      <span>Get a Demo</span>
                      <i className='fas fa-spinner fa-spin'></i>
                    </button>
                  </div>

                  <div className='form-result alert'>
                    <div className='content'></div>
                  </div>
                </form>

                <p className='info-text wow fadeInUp' data-wow-delay='0.3s'>
                  Already using our service? <a href='login'>Sign In</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default NewsLetterFour;
