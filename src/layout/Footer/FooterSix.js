import React from 'react';
import { Link } from 'react-router-dom';

const FooterSix = () => {
  return (
    <React.Fragment>
      <footer id='footer' className='footer-home-security'>
        <div className='container'>
          <div className='footer-widget-wrapper'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  id='ultraland_widget_about-3'
                  className='widget ultraland_widget about-widget_wrapper  wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  <img
                    src='assets/img/logo_black.svg'
                    className='footer-logo'
                    alt='footer logo'
                  />
                  <p className='about_text'>
                    Start for free Try Servly Our builder now
                  </p>
                  <ul className='footer-contact-info'>
                    <li className='phone'>
                      <i className='feather-phone'></i>+(426) 762 44 356
                    </li>
                    <li className='email'>
                      <i className='feather-mail'></i> info@example.com
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  className='widget widget-footer-menu wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <h3 className='widget-title'>Company</h3>
                  <ul className='footer-menu'>
                    <li>
                      <Link to='/company'>About Us</Link>
                    </li>
                    <li>
                      <Link to='/service'>Service</Link>
                    </li>
                    <li>
                      <Link to='/team'>Our Team</Link>
                    </li>
                    <li>
                      <Link to='/testimonial'>Testimonial</Link>
                    </li>
                    <li>
                      <Link to='/price'>Pricing</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  className='widget widget-footer-menu wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <h3 className='widget-title'>Resources</h3>

                  <ul className='footer-menu'>
                    <li>
                      <Link to='/portfolio'>Portfolio</Link>
                    </li>
                    <li>
                      <Link to='/login'>Sign In</Link>
                    </li>
                    <li>
                      <Link to='/signup'>Sign Up</Link>
                    </li>
                    <li>
                      <Link to='/blogs'>Blog Standard</Link>
                    </li>
                    <li>
                      <Link to='/blogs'>Blog Grid</Link>
                    </li>
                    <li>
                      <Link to='#'>Error 404</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  className='widget ultraland-contact-widget wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <h3 className='widget-title'>Newsletter</h3>
                  <p>
                    Subscribe to our newsletter to receive early discount
                    offers.
                  </p>

                  <form
                    action='php/subscribe.php'
                    method='post'
                    className='footer-newsletter-form'
                    data-tt-form='newsletter-subscribe'
                  >
                    <div className='newsletter-inner d-flex justify-content-center style_one'>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        placeholder='Your email...'
                        required=''
                      />

                      <button
                        type='submit'
                        name='submit'
                        className='newsletter-submit tt__btn'
                      >
                        <i className='feather-arrow-right'></i>
                        <i className='fas fa-spinner fa-spin'></i>
                      </button>
                    </div>

                    <div
                      className='form-result alert'
                      style={{ display: 'none' }}
                    >
                      <div className='content'></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-info'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <p className='copy-right'>
                  © 2021 Ultraland Rights Reserved. Designed By{' '}
                  <a
                    href='https://themetags.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    ThemeTags
                  </a>
                </p>
              </div>

              <div className='col-md-6'>
                <div className='footer-social-wrap'>
                  <h3 className='social-title'>Follow Us</h3>

                  <ul className='footer-social-link'>
                    <li>
                      <Link to='http://facebook.com'>
                        <i className='fab fa-facebook-f'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='http://twitter.com'>
                        <i className='fab fa-twitter'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='http://dribbble.com'>
                        <i className='fab fa-dribbble'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterSix;
