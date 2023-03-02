import React from 'react';
import { Link } from 'react-router-dom';

const FooterTwo = () => {
  return (
    <>
      <footer id='footer' className='footer-style-two'>
        <div className='container'>
          <div className='footer-widget-wrapper'>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div
                  id='ultraland_widget_about-3'
                  className='widget ultraland_widget about-widget_wrapper'
                >
                  <img
                    src='assets/img/logo_white.svg'
                    className='footer-logo'
                    alt='footer logo'
                  />
                  <p className='about_text'>
                    Start for free Try UltraLand Our builder now
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

              <div className='col-md-4'>
                <div className='widget ultraland_widget ultraland-recent-posts'>
                  <h3 className='widget-title'>Recent Post</h3>
                  <div className='widget-post ultraland-widget-recent-posts'>
                    <div className='recent-posts-image_wrapper'>
                      <img src='media/blog/recent1.jpg' alt='Rercent Post' />
                    </div>

                    <div className='recent-posts-content_wrapper'>
                      <h4 className='post-title'>
                        <Link to='#'>
                          Create wonderful website with beautiful page.
                        </Link>
                      </h4>
                      <div className='date'>
                        <span className='posted-on'>
                          <Link to='#' rel='bookmark'>
                            14 January, 2022
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='widget-post ultraland-widget-recent-posts'>
                    <div className='recent-posts-image_wrapper'>
                      <img src='media/blog/recent2.jpg' alt='Rercent Post' />
                    </div>

                    <div className='recent-posts-content_wrapper'>
                      <h4 className='post-title'>
                        <Link to='#'>
                          How to scale Facebook ads the right way
                        </Link>
                      </h4>
                      <div className='date'>
                        <span className='posted-on'>
                          <Link to='#' rel='bookmark'>
                            14 January, 2022
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-2 col-sm-6'>
                <div className='widget widget-footer-menu'>
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

              <div className='col-md-2 col-sm-6'>
                <div className='widget widget-footer-menu'>
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
            </div>
          </div>

          <div className='site-info'>
            <p className='copy-right'>
              © 2021 Ultraland Rights Reserved. Designed By{' '}
              <Link to='https://themetags.com' target='_blank'>
                ThemeTags
              </Link>
            </p>
          </div>
        </div>

        <ul className='footer-shape-element'>
          <li className='element-left'>
            <img src='media/footer/leaf.png' alt='Footer Element' />
          </li>
          <li className='element-right'>
            <img src='media/footer/leaf_2.png' alt='Footer Element' />
          </li>
          <li className='element'>
            <img src='media/footer/right_element.png' alt='Footer Element' />
          </li>
        </ul>
      </footer>
    </>
  );
};

export default FooterTwo;
