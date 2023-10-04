import React from 'react';
import { Link } from 'react-router-dom';

const BlogAll = () => {
  return (
    <>
      <div className='blog-post-archive'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='post-wrapper'>
                <article className='post'>
                  <div className='feature-image'>
                    <Link to='#'>
                      <img src='media/blog/1.jpg' alt='' />
                    </Link>
                  </div>
                  <div className='blog-content'>
                    <div className='post-meta-tags'>
                      <Link to='#'>Tutorial</Link>
                    </div>

                    <h3 className='entry-title'>
                      <Link to='blog-single'>
                        Google Ads certifications: Are they worth it?
                      </Link>
                    </h3>

                    <p>
                      Twit pear shaped a excuse my French plastered arse it's
                      all gone to pot easy peasy so I said matie boy cheers, I
                      chancer bugger don't get shirty[...]
                    </p>

                    <div className='blog-footer'>
                      <ul className='post-meta'>
                        <li className='author'>
                          <img src='media/blog/auth.jpg' alt='author' />
                          <Link to='#' className='author-link'>
                            John Doe
                          </Link>
                        </li>

                        <li>April 24, 2022</li>
                      </ul>

                      <Link to='blog-single' className='read-more'>
                        Read More <i className='feather-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </article>

                <article className='post video-post'>
                  <div className='feature-image'>
                    <Link to='blog-signle'>
                      <img src='media/blog/2.jpg' alt='' />
                    </Link>

                    <Link
                      to='https://www.youtube.com/watch?v=9No-FiEInLA'
                      className='video-btn popup-video'
                    >
                      <i className='fas fa-play'></i>
                    </Link>
                  </div>
                  <div className='blog-content'>
                    <div className='post-meta-tags'>
                      <Link to='#'>Tutorial</Link>
                    </div>

                    <h3 className='entry-title'>
                      <Link to='blog-single'>
                        IOS 14 and Facebook ads: All you need to know
                      </Link>
                    </h3>

                    <p>
                      Twit pear shaped a excuse my French plastered arse it's
                      all gone to pot easy peasy so I said matie boy cheers, I
                      chancer bugger don't get shirty[...]
                    </p>

                    <Link to='#' className='read-more'>
                      Read More <i className='feather-arrow-right'></i>
                    </Link>

                    <div className='blog-footer'>
                      <ul className='post-meta'>
                        <li className='author'>
                          <img src='media/blog/auth.jpg' alt='author' />
                          <Link to='#' className='author-link'>
                            John Doe
                          </Link>
                        </li>

                        <li>April 24, 2022</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className='post quote-post'>
                  <blockquote className='wp-block-quote'>
                    <p>
                      So I said tosser boot twit lurgy eaton bloke public school
                      arse bleeding chimney pot lost.
                    </p>

                    <cite>Lance Bogrol</cite>

                    <img src='media/blog/quote.png' alt='quote' />
                  </blockquote>
                </article>

                <article className='post'>
                  <div className='feature-image'>
                    <Link to='blog-signle'>
                      <img src='media/blog/3.jpg' alt='' />
                    </Link>
                  </div>
                  <div className='blog-content'>
                    <div className='post-meta-tags'>
                      <Link to='#'>Tutorial</Link>
                    </div>

                    <h3 className='entry-title'>
                      <Link to='blog-single'>
                        Google Ads certifications: Are they worth it?
                      </Link>
                    </h3>

                    <p>
                      Twit pear shaped a excuse my French plastered arse it's
                      all gone to pot easy peasy so I said matie boy cheers, I
                      chancer bugger don't get shirty[...]
                    </p>

                    <div className='blog-footer'>
                      <ul className='post-meta'>
                        <li className='author'>
                          <img src='media/blog/auth.jpg' alt='author' />
                          <Link to='#' className='author-link'>
                            John Doe
                          </Link>
                        </li>

                        <li>April 24, 2022</li>
                      </ul>

                      <Link to='blog-single' className='read-more'>
                        Read More <i className='feather-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </article>

                <article className='post link-post'>
                  <i className='feather-link link-left'></i>
                  <div className='blog-content'>
                    <p>
                      <Link to='blog-single'>
                        What a plonker the full monty it's your round matie boy
                        jolly good my lady Jeffrey pukka hunky.
                      </Link>
                    </p>
                  </div>
                  <i className='feather-link link-right'></i>
                </article>

                <article className='post'>
                  <div className='feature-image'>
                    <Link to='blog-signle'>
                      <img src='media/blog/4.jpg' alt='' />
                    </Link>
                  </div>
                  <div className='blog-content'>
                    <div className='post-meta-tags'>
                      <Link to='#'>Tutorial</Link>
                    </div>

                    <h3 className='entry-title'>
                      <Link to='blog-single'>
                        Letter of Interest: Purpose, Example & Tips
                      </Link>
                    </h3>

                    <p>
                      Twit pear shaped a excuse my French plastered arse it's
                      all gone to pot easy peasy so I said matie boy cheers, I
                      chancer bugger don't get shirty[...]
                    </p>

                    <div className='blog-footer'>
                      <ul className='post-meta'>
                        <li className='author'>
                          <img src='media/blog/auth.jpg' alt='author' />
                          <Link to='blog-single' className='author-link'>
                            John Doe
                          </Link>
                        </li>

                        <li>April 24, 2022</li>
                      </ul>

                      <Link to='blog-single' className='read-more'>
                        Read More <i className='feather-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </article>

                <ul className='post-navigation'>
                  <li className='active'>1</li>
                  <li>
                    <Link to='#'>2</Link>
                  </li>
                  <li className='next'>
                    <Link to='#'>
                      Next<i className='feather-arrow-right'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='sidebar'>
                <div className='widget'>
                  <form
                    role='search'
                    method='get'
                    action='#'
                    className='search-form'
                  >
                    <input
                      type='text'
                      className='search-field'
                      placeholder='Search …'
                      name='s'
                    />
                    <button type='submit' className='search-submit'>
                      <i className='feather-search'></i>
                    </button>
                  </form>
                </div>

                <div className='widget ultraland_widget ultraland-recent-posts'>
                  <h3 className='widget-title'>Recent Post</h3>
                  <div className='widget-post ultraland-widget-recent-posts'>
                    <div className='recent-posts-image_wrapper'>
                      <img src='media/blog/recent1.jpg' alt='Recent Post' />
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

                  <div className='widget-post ultraland-widget-recent-posts'>
                    <div className='recent-posts-image_wrapper'>
                      <img src='media/blog/recent3.jpg' alt='Rercent Post' />
                    </div>

                    <div className='recent-posts-content_wrapper'>
                      <h4 className='post-title'>
                        <Link to='#'>
                          Designers who changed the web with Saas
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
                <div className='widget ultraland_widget widget_categories'>
                  <h3 className='widget-title'>Categories</h3>
                  <ul className='blog-category'>
                    <li>
                      <Link to='#'>Website </Link>
                    </li>
                    <li>
                      <Link to='#'>App & Saas</Link>
                    </li>
                    <li>
                      <Link to='#'>Why Servly</Link>
                    </li>
                    <li>
                      <Link to='#'>Business</Link>
                    </li>
                    <li>
                      <Link to='#'>UX Design</Link>
                    </li>
                    <li>
                      <Link to='#'>Servly Saas</Link>
                    </li>
                  </ul>
                </div>
                <div className='widget ultraland_widget ultraland-tags'>
                  <h3 className='widget-title'>Tags</h3>

                  <ul className='tag-list'>
                    <li>
                      <Link to='#'>App & Saas</Link>
                    </li>
                    <li>
                      <Link to='#'>Software</Link>
                    </li>
                    <li>
                      <Link to='#'>UX/UI</Link>
                    </li>
                    <li>
                      <Link to='#'>Startup</Link>
                    </li>
                    <li>
                      <Link to='#'>WordPress</Link>
                    </li>
                    <li>
                      <Link to='#'>Services</Link>
                    </li>
                    <li>
                      <Link to='#'>Tuotrials</Link>
                    </li>
                    <li>
                      <Link to='#'>Marketing</Link>
                    </li>
                  </ul>
                </div>

                <div className='widget ultraland_widget ultraland-add'>
                  <div className='add-image'>
                    <img src='media/blog/add.jpg' alt='blog add' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAll;
