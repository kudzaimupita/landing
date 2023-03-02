import React from 'react';

const NewsLetterFive = () => {
  return (
    <React.Fragment>
      <section className='newsletter-four-section'>
        <div className='newsletter-wrapper'>
          <div className='section-heading text-center'>
            <h2 className='section-title'>
              Let's Track Your
              <br />
              Customer's journey
            </h2>
          </div>

          <form
            action='php/subscribe.php'
            method='post'
            className='newsletter-form wow fadeInUp'
            data-tt-form='newsletter-subscribe'
          >
            <div className='newsletter-inner d-flex justify-content-center style_four'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Enter your email...'
                required
              />

              <button type='submit' name='submit' className='newsletter-submit'>
                <span>Subscribe Now</span>
                <i className='fas fa-spinner fa-spin'></i>
              </button>
            </div>

            <div className='form-result alert'>
              <div className='content'></div>
            </div>
          </form>

          <p className='description'>
            We are rolling out access on a first come basis.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NewsLetterFive;
