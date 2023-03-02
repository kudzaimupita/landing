import React, { Component } from 'react';

class PromoBox extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='promo-section-area'>
          <div className='container'>
            <div className='promo-content-wrap'>
              <div className='section-heading text-center'>
                <h2 className='section-title'>Got new Project?</h2>
                <p className='description'>
                  Call us for fast support to this number.
                </p>
                <div className='phone-info'>
                  <img src='media/feature/phone-call.png' alt='Phone Call' />
                  +(402) 763 520 90
                </div>
                <a href='contact' className='tt__btn btn-outline btn-round'>
                  Get in touch
                </a>
              </div>

              <div className='badge-wrap'>
                <img
                  src='media/feature/badge_left.png'
                  className='badge-left'
                  alt='badge-left'
                />
                <img
                  src='media/feature/badge_right.png'
                  className='badge-right'
                  alt='badge-left'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <div className='promo-box-two'>
                  <div className='box-image'>
                    <img src='media/feature/promo3.jpg' alt='promo' />
                  </div>

                  <div className='promo-content'>
                    <h3 className='box-title'>Online Support</h3>
                    <p className='description'>
                      You’ll have everything you’ll need
                      <br />
                      inside a powerful back-end.
                    </p>
                    <a href='about' className='more-link'>
                      Read More <i className='feather-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='promo-box-two'>
                  <div className='box-image'>
                    <img src='media/feature/promo4.jpg' alt='promo' />
                  </div>

                  <div className='promo-content'>
                    <h3 className='box-title'>Work Inquiries</h3>
                    <p className='description'>
                      Interested in working with us?
                      <br />
                      hello@ultraland.com
                    </p>
                    <a href='about' className='more-link'>
                      Read More <i className='feather-arrow-right'></i>
                    </a>
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
export default PromoBox;
