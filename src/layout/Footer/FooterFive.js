import React from 'react';

const FooterFive = () => {
  return (
    <React.Fragment>
      <footer id='footer' class='footer-science'>
        <div class='container'>
          <div class='footer-widget-wrapper'>
            <div class='row'>
              <div class='col-lg-4 col-md-6 col-sm-6'>
                <div
                  id='ultraland_widget_about-3'
                  class='widget ultraland_widget about-widget_wrapper  wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  <img
                    src='assets/img/logo_black.svg'
                    class='footer-logo'
                    alt='footer logo'
                  />
                  <p class='about_text'>
                    Start for free Try UltraLand Our builder now
                  </p>
                  <ul class='footer-contact-info'>
                    <li class='phone'>
                      <i class='feather-phone'></i>+(426) 762 44 356
                    </li>
                    <li class='email'>
                      <i class='feather-mail'></i> info@example.com
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-2 col-md-6 col-sm-6'>
                <div
                  class='widget widget-footer-menu wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <h3 class='widget-title'>Departments</h3>
                  <ul class='footer-menu'>
                    <li>
                      <a href='about.html'>About Us</a>
                    </li>
                    <li>
                      <a href='service.html'>Services</a>
                    </li>
                    <li>
                      <a href='team.html'>Our Team</a>
                    </li>
                    <li>
                      <a href='testimonial.html'>Testimonial</a>
                    </li>
                    <li>
                      <a href='pricing.html'>Pricing</a>
                    </li>
                    <li>
                      <a href='contact.html'>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div
                  class='widget widget-footer-menu wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <h3 class='widget-title'>Links</h3>
                  <ul class='footer-menu'>
                    <li>
                      <a href='about.html'>About Us</a>
                    </li>
                    <li>
                      <a href='testimonial.html'>Appointment</a>
                    </li>
                    <li>
                      <a href='service.html'>Service</a>
                    </li>
                    <li>
                      <a href='our-team.html'>Our Clinic</a>
                    </li>
                    <li>
                      <a href='pricing.html'>News & Media</a>
                    </li>
                    <li>
                      <a href='our-team.html'>Our Doctor</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div
                  class='widget ultraland-contact-widget wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <h3 class='widget-title'>Newsletter</h3>
                  <p>
                    Subscribe to our newsletter to receive early discount
                    offers.
                  </p>

                  <form
                    action='php/subscribe.php'
                    method='post'
                    class='footer-newsletter-form'
                    data-tt-form='newsletter-subscribe'
                  >
                    <div class='newsletter-inner d-flex justify-content-center style_one'>
                      <input
                        type='email'
                        name='email'
                        class='form-control'
                        placeholder='Your email...'
                        required=''
                      />

                      <button
                        type='submit'
                        name='submit'
                        class='newsletter-submit tt__btn'
                      >
                        <i class='feather-arrow-right'></i>
                        <i class='fas fa-spinner fa-spin'></i>
                      </button>
                    </div>

                    <div class='form-result alert'>
                      <div class='content'></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class='site-info'>
            <div class='row align-items-center'>
              <div class='col-md-6'>
                <p class='copy-right'>
                  © 2021 Ultraland Rights Reserved. Designed By{' '}
                  <a
                    href='https://themetags.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    ThemeTags
                  </a>
                </p>
              </div>

              <div class='col-md-6'>
                <div class='footer-social-wrap'>
                  <h3 class='social-title'>Follow Us</h3>

                  <ul class='footer-social-link'>
                    <li>
                      <a href='http://facebook.com'>
                        <i class='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='http://twitter.com'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='http://dribbble.com'>
                        <i class='fab fa-dribbble'></i>
                      </a>
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

export default FooterFive;
