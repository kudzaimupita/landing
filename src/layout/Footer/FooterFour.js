import React from 'react';
import { Link } from 'react-router-dom';

const FooterFour = () => {
  return (
    <>
      <footer id='footer' className='footer-education'>
        <div className='container'>
          <div className='footer-widget-wrapper'>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
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
                  <p className='footer-description'>
                    My flat burke pardon you easy peasy he lost his bottle twit
                    victoria.
                  </p>

                  <ul className='footer-contact-info'>
                    <li className='phone'>
                      <i className='feather-phone'></i>+(426) 762 44 356{' '}
                    </li>
                    <li className='email'>
                      <i className='feather-mail'></i> info@example.com
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-md-3 col-sm-6'>
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
                      <Link to='/portfolio'>Courses</Link>
                    </li>
                    <li>
                      <Link to='/company'>How it works</Link>
                    </li>
                    <li>
                      <Link to='/service'>Services</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Instructor</Link>
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
                  <h3 className='widget-title'>Category</h3>
                  <ul className='footer-menu'>
                    <li>
                      <Link to='/company'>All Courses</Link>
                    </li>
                    <li>
                      <Link to='/testimonial'> News &amp; Blogs</Link>
                    </li>
                    <li>
                      <Link to='/service'>Development</Link>
                    </li>
                    <li>
                      <Link to='/team'>Library</Link>
                    </li>
                    <li>
                      <Link to='/price'>Art &amp; Design</Link>
                    </li>
                    <li>
                      <Link to='/price'>Partners</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-md-2 col-sm-6'>
                <div
                  className='widget widget-footer-menu wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <h3 className='widget-title'>Support</h3>
                  <ul className='footer-menu'>
                    <li>
                      <Link to='./compnay'>Help &amp; Support</Link>
                    </li>
                    <li>
                      <Link to='/testimonial'>Partnership</Link>
                    </li>
                    <li>
                      <Link to='/team'>Our Mentors</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Free Classes</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Find a Job?</Link>
                    </li>
                    <li>
                      <Link to='/price'>Terms</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-info wow fadeIn' data-wow-delay='1.1s'>
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
      </footer>
    </>
  );
};

export default FooterFour;
