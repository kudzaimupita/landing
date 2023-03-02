import React from 'react';
import { Link } from 'react-router-dom';

const FooterOne = ({ classOption, dark }) => {
  return (
    <>
      <footer
        id='footer'
        className={`${classOption} ${dark ? 'footer-dark' : ''}`}
      >
        <div className='container'>
          <div className='footer-widget-wrapper'>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div
                  id='ultraland_widget_about-3'
                  className='widget ultraland_widget about-widget_wrapper  wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  {dark ? (
                    <img
                      src='assets/img/logo_white.svg'
                      className='footer-logo'
                      alt='footer logo'
                    />
                  ) : (
                    <img
                      src='assets/img/logo_black.svg'
                      className='footer-logo'
                      alt='footer logo'
                    />
                  )}

                  <p className='about_text'>
                    Start for free Try UltraLand Our builder now
                  </p>
                  <Link to='/signup' className='tt__btn'>
                    Sign up Free{' '}
                  </Link>
                </div>
              </div>

              <div className='col-md-2 col-sm-6'>
                <div
                  className='widget widget-footer-menu wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <h3 className='widget-title'>Quick Links</h3>

                  <ul className='footer-menu'>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/portfolio'>Projects</Link>
                    </li>
                    <li>
                      <Link to='/company'>About</Link>
                    </li>
                    <li>
                      <Link to='/service'>Company</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-md-3 col-sm-6'>
                <div
                  className='widget widget-footer-menu wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <h3 className='widget-title'>Company</h3>

                  <ul className='footer-menu'>
                    <li>
                      <Link to='/company'>About Us</Link>
                    </li>
                    <li>
                      <Link to='/testimonial'>Testimonials</Link>
                    </li>
                    <li>
                      <Link to='/service'>Service</Link>
                    </li>
                    <li>
                      <Link to='/team'>Team</Link>
                    </li>
                    <li>
                      <Link to='/price'>Pricing</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-md-3 col-sm-6'>
                <div
                  className='widget ultraland-contact-widget wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <h3 className='widget-title'>Help</h3>
                  <ul className='footer-contact-info'>
                    <li className='phone'>
                      <i className='feather-phone'></i>+(426) 762 44 356{' '}
                    </li>
                    <li className='email'>
                      <i className='feather-mail'></i> info@example.com
                    </li>
                  </ul>
                  <h4 className='social-title'>Follow Us</h4>
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

          <div className='site-info wow fadeIn' data-wow-delay='1.1s'>
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
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
