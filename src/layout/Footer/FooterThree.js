import React from 'react';
import { Link } from 'react-router-dom';

const FooterThree = () => {
  return (
    <>
      <footer id='footer' className='footer-medical'>
        <div className='container'>
          <div className='footer-top'>
            <div className='footer-phone-info'>
              <div className='image-wrap'>
                <img src='media/footer/footer-icon.png' alt='footer icon' />
              </div>

              <p className='phone-info'>
                Please feel free to contact our friendly reception staff with
                any
                <br /> medical enquiry , or call <span>+(088) 269 462 348</span>
              </p>
            </div>

            <div className='footer-social-top'>
              <h4 className='social-title'>Follow Us</h4>
              <ul className='footer-social-link-top'>
                <li>
                  <Link to='#/'>
                    <i className='fab fa-facebook-f'></i>
                  </Link>
                </li>
                <li>
                  <Link to='#/'>
                    <i className='fab fa-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link to='#/'>
                    <i className='fab fa-dribbble'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer-widget-wrapper'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  id='ultraland_widget_about-3'
                  className='widget ultraland_widget about-widget_wrapper  wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  <img
                    src='assets/img/logo_white.svg'
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
                  <h3 className='widget-title'>Departments</h3>
                  <ul className='footer-menu'>
                    <li>
                      <Link to='/l'>Neurology Clinic</Link>
                    </li>
                    <li>
                      <Link to='/portfolio'>Laboratory Annalysis</Link>
                    </li>
                    <li>
                      <Link to='/company'>Cardiac Clinic</Link>
                    </li>
                    <li>
                      <Link to='/service'>Cardiology Clinic</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Pathology Clinic</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Family Planning</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  className='widget widget-footer-menu wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <h3 className='widget-title'>Links</h3>

                  <ul className='footer-menu'>
                    <li>
                      <Link to='/company'>About Us</Link>
                    </li>
                    <li>
                      <Link to='/testimonial'>Appointment</Link>
                    </li>
                    <li>
                      <Link to='/service'>Service</Link>
                    </li>
                    <li>
                      <Link to='/team'>Our Clinic</Link>
                    </li>
                    <li>
                      <Link to='/price'>News & Media</Link>
                    </li>
                    <li>
                      <Link to='/team'>Our Doctor</Link>
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
      </footer>
    </>
  );
};

export default FooterThree;
