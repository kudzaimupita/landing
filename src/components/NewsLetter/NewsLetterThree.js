import React, { Component } from 'react';
class NewsLetterThree extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='seo-score-area wow fadeInUp'>
          <div className='container pr'>
            <div className='seo-score-wrapper'>
              <div className='section-heading text-center'>
                <h2 className='section-title'>Check your website’s SEO</h2>

                <p className='description'>
                  So I said knees up cuppa such a fibber jeffrey a bit of how's
                  your.
                </p>
              </div>
              <form
                action='php/subscribe.php'
                method='post'
                className='score-form'
                data-tt-form='newsletter-subscribe'
              >
                <div className='scoreform-inner row justify-content-center'>
                  <input
                    type='text'
                    name='fname'
                    className='form-control'
                    id='score-form-url'
                    placeholder='Type website URL'
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    id='score-form-email'
                    placeholder='Your emali'
                    required
                  />
                  <button
                    type='submit'
                    name='submit'
                    id='score-submit'
                    className='score-submit tt__btn btn-round'
                  >
                    <span>Check Now</span>
                  </button>
                </div>
                <div className='form-result alert'>
                  <div className='content'></div>
                </div>
              </form>
              <div className='bottom-content'>
                <p>
                  We’ll never share your details with third parties.
                  <br />
                  View our Privacy Policy for more info.
                </p>
              </div>
            </div>
            <div className='dot-right-shape'>
              <img src='media/element/dot_shape.png' alt='Dot Shape' />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default NewsLetterThree;
