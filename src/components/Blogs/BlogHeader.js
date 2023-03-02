import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='page-header single-post-header-bg'>
          <div className='overlay-bg'></div>

          <div className='container'>
            <div className='single-post-header'>
              <div className='post-meta-wrapper'>
                <Link
                  to='#'
                  className='tt-blog-meta-category'
                  rel='category tag'
                >
                  Marketing
                </Link>
              </div>

              <h2 className='single-post-title'>
                Google Ads certifications: Are they worth it?
              </h2>

              <ul className='post-meta'>
                <li>
                  <span className='author vcard'>
                    <Link className='post-author' to='#'>
                      <img
                        alt='author'
                        src='media/blog/auth.jpg'
                        className='avatar avatar-36'
                      />
                      John Doe
                    </Link>
                  </span>
                </li>
                <li>
                  <span className='posted-on'>
                    <Link to='#' rel='bookmark'>
                      April 5, 2021
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BlogHeader;
