import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogMedical extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='blog-grid-three'>
          <div className='container'>
            <div className='section-heading style-two text-center'>
              <h3 className='section-subtitle wow fadeInUp'>Read our latest</h3>
              <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
                News and Advices
              </h2>
              <p className='description  wow fadeInUp' data-wow-delay='0.5s'>
                So I said knees up cuppa such a fibber jeffrey a bit of how's
                your.
              </p>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div
                  className='recent-post wow fadeInLeft'
                  data-wow-delay='0.3s'
                >
                  <div className='tt-blog-grid style-three'>
                    <div className='feature-image'>
                      <Link to='/blog-single'>
                        <img src='media/blog/5.jpg' alt='blog' />
                      </Link>

                      <div className='blog-content'>
                        <ul className='post-meta'>
                          <li className='author-simple'>
                            <i className='feather-user'></i>
                            <span>Author</span>
                          </li>
                          <li className='meta-date'>
                            <i className='feather-clock'></i>
                            <span>Feb 24, 2021</span>
                          </li>
                        </ul>

                        <div className='entry-header'>
                          <h3 className='entry-title'>
                            <Link to='/blog-single'>
                              What are some of the most common problems?
                            </Link>
                          </h3>

                          <p className='entry-content'>
                            Mush is it's all gone to pot bog-standard baking
                            cakes arse brown bread cuppa hanky pankynicked.
                          </p>

                          <Link to='/blog-single' className='tt__btn-link'>
                            Read More <i className='feather-arrow-right'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='tt-blog-grid style-four wow fadeInUp'>
                  <div className='blog-content'>
                    <div className='entry-header'>
                      <ul className='post-meta'>
                        <li className='author-simple'>
                          <i className='feather-user'></i>
                          <span>Author</span>
                        </li>
                        <li className='meta-date'>
                          <i className='feather-clock'></i>
                          <span>Feb 24, 2021</span>
                        </li>
                      </ul>

                      <h3 className='entry-title'>
                        <Link to='/blog-single'>Blogging Complete Guide.</Link>
                      </h3>

                      <p>
                        Lavatory such a fibber chip shop brilliant bog lost the
                        plot it's your.
                      </p>

                      <Link to='/blog-single' className='tt__btn-link'>
                        Read More <i className='feather-arrow-right'></i>
                      </Link>
                    </div>
                  </div>

                  <div className='feature-image'>
                    <a href='https://wp.gptheme.com/marco/how-to-become-best-sale-marketer-in-years/'>
                      <img src='media/blog/6.jpg' alt='blog ' />
                    </a>
                  </div>
                </div>
                <div
                  className='tt-blog-grid style-four  wow fadeInUp'
                  data-wow-dealy='0.5s'
                >
                  <div className='blog-content'>
                    <div className='entry-header'>
                      <ul className='post-meta'>
                        <li className='author-simple'>
                          <i className='feather-user'></i>
                          <span>Author</span>
                        </li>
                        <li className='meta-date'>
                          <i className='feather-clock'></i>
                          <span>Feb 24, 2021</span>
                        </li>
                      </ul>

                      <h3 className='entry-title'>
                        <Link to='/blog-single'>
                          I need more medical tests?
                        </Link>
                      </h3>

                      <p>
                        Lavatory such a fibber chip shop brilliant bog lost the
                        plot it's your.
                      </p>

                      <Link to='/blog-single' className='tt__btn-link'>
                        Read More <i className='feather-arrow-right'></i>
                      </Link>
                    </div>
                  </div>

                  <div className='feature-image'>
                    <Link to='/blog-single'>
                      <img src='media/blog/7.jpg' alt='blog' />
                    </Link>
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
export default BlogMedical;
