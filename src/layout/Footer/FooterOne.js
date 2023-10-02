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
                      src='assets/img/Servly-logo_FULL-black_draft_1x1.png'
                      className='footer-logo'
                      alt='footer logo'
                    />
                  ) : (
                    <img
                      src='https://lean-front-git-main-kudzaimupita.vercel.app/static/media/8083535-ai.2e13fa0b9a79b340430b.png'
                      className='footer-logo'
                      alt='footer logo'
                    />
                  )}

                  <p className='about_text'>Start for free Try Servly now</p>
                  <a href='/request-demo' className='tt__btn'>
                    Request Demo
                  </a>
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
                      <Link to='/features'>Features</Link>
                    </li>
                    <li>
                      <Link to='/industries'>Industries</Link>
                    </li>
                    <li>
                      <Link to='/faqs'>FAQs</Link>
                    </li>
                    {/* <li>
                      <Link to="/contact">Contact</Link>
                    </li> */}
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
                      <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                      <Link to='/pricing'>Pricing</Link>
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
                      <i className='feather-phone'></i>+(27) 81 337 6735{' '}
                    </li>
                    <li className='email'>
                      <i className='feather-mail'></i> info@servly.app
                    </li>
                  </ul>
                  <h4 className='social-title'>Follow Us</h4>
                  <ul className='footer-social-link'>
                    <li>
                      <a href='http://facebook.com/servly.app'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='http://twitter.com/servly.app'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='site-info wow fadeIn' data-wow-delay='1.1s'>
            <p className='copy-right'>© 2023 Servly. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
