import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BlogOne extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='recent-blog-two'>
          <div className='container'>
            <div className='section-heading style-one text-center'>
              <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
                Latest News
              </h2>

              <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                So I said knees up cuppa such a fibber jeffrey a bit of how's
                your.
              </p>
            </div>

            <div className='row'>
              <div className='col-md-6 col-lg-4 recent-post'>
                <div
                  className='tt-blog-grid style-two wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  <div className='feature-image'>
                    <img src='media/blog/1.png' alt='blog ' />
                  </div>
                  <div className='post_content'>
                    <div className='entry-content'>
                      <div className='entry-meta'>
                        <i className='feather-clock'></i>
                        July 10, 2022
                      </div>

                      <h3 className='entry-title'>
                        <Link to='/blog-single' className='post-title'>
                          Corporate Design Strategy.
                        </Link>
                      </h3>

                      <p>
                        Do one bamboozled cuppa I don't want no agro gosh cras.
                      </p>

                      <Link to='/blog-single' className='read-more'>
                        Read More <i className='feather-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-6 col-lg-4 recent-post'>
                <div
                  className='tt-blog-grid style-two wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <div className='feature-image'>
                    <img src='media/blog/2.png' alt='blog' />
                  </div>

                  <div className='post_content'>
                    <div className='entry-content'>
                      <div className='entry-meta'>
                        <i className='feather-clock'></i>
                        July 10, 2022
                      </div>

                      <h3 className='entry-title'>
                        <Link to='/blog-single' className='post-title'>
                          Blogging Complete Guide.
                        </Link>
                      </h3>

                      <p>
                        Do one bamboozled cuppa I don't want no agro gosh cras.
                      </p>

                      <Link to='/blog-single' className='read-more'>
                        Read More <i className='feather-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-6 col-lg-4 recent-post'>
                <div
                  className='tt-blog-grid style-two wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='feature-image'>
                    <img src='media/blog/3.png' alt='blog' />
                  </div>

                  <div className='post_content'>
                    <div className='entry-content'>
                      <div className='entry-meta'>
                        <i className='feather-clock'></i>
                        July 10, 2022
                      </div>

                      <h3 className='entry-title'>
                        <Link to='/blog-single' className='post-title'>
                          Social Media Strategies.
                        </Link>
                      </h3>

                      <p>
                        Lavatory such a fibber chip shop brilliant bog lost the
                        plot it's your.
                      </p>

                      <Link to='/blog-single' className='read-more'>
                        Read More <i className='feather-arrow-right'></i>
                      </Link>
                    </div>
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
export default BlogOne;
