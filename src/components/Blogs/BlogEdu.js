import React from 'react';
import { Link } from 'react-router-dom';

const BlogEdu = () => {
  return (
    <>
      <section className='blog-post-four'>
        <div className='container'>
          <div className='section-heading style-one text-center'>
            <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
              Latest news
              <br />
              Are on top all times
            </h2>

            <p className='description wow fadeInUp' data-wow-delay='0.5s'>
              The his nut say faf about excusesloshed is matie boy hip shop nic.
            </p>
          </div>

          <div className='row'>
            <div className='col-md-6 col-lg-4 recent-post'>
              <div
                className='tt-blog-grid style-five wow fadeInUp'
                data-wow-delay='0.3s'
              >
                <div className='feature-image'>
                  <img src='media/blog/8.jpg' alt='blog ' />
                </div>
                <div className='post_content'>
                  <div className='entry-content'>
                    <ul className='post-meta'>
                      <li>
                        <i className='feather-calendar'></i>
                        Nov 10, 2022
                      </li>

                      <li>
                        <i className='feather-eye'></i>
                        265 Views
                      </li>
                    </ul>

                    <h3 className='entry-title'>
                      <Link to='/blog-single' className='post-title'>
                        100 Blended Learning Resources For Teachers
                      </Link>
                    </h3>

                    <Link to='/blog-single' className='read-more'>
                      Read More <i className='feather-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 recent-post'>
              <div
                className='tt-blog-grid style-five wow fadeInUp'
                data-wow-delay='0.5s'
              >
                <div className='feature-image'>
                  <img src='media/blog/9.jpg' alt='blog ' />
                </div>

                <div className='post_content'>
                  <div className='entry-content'>
                    <ul className='post-meta'>
                      <li>
                        <i className='feather-calendar'></i>
                        Nov 10, 2022
                      </li>

                      <li>
                        <i className='feather-eye'></i>
                        265 Views
                      </li>
                    </ul>

                    <h3 className='entry-title'>
                      <Link to='/blog-single' className='post-title'>
                        The evolution of visual design And renaissance
                      </Link>
                    </h3>

                    <Link to='/blog-single' className='read-more'>
                      Read More <i className='feather-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 recent-post'>
              <div
                className='tt-blog-grid style-five wow fadeInUp'
                data-wow-delay='0.7s'
              >
                <div className='feature-image'>
                  <img src='media/blog/10.jpg' alt='blog ' />
                </div>

                <div className='post_content'>
                  <div className='entry-content'>
                    <ul className='post-meta'>
                      <li>
                        <i className='feather-calendar'></i>
                        Nov 10, 2022
                      </li>

                      <li>
                        <i className='feather-eye'></i>
                        265 Views
                      </li>
                    </ul>

                    <h3 className='entry-title'>
                      <a href='/blog-single' className='post-title'>
                        What is the Mlb Summer Slugger Program?
                      </a>
                    </h3>

                    <a href='/blog-single' className='read-more'>
                      Read More <i className='feather-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogEdu;
