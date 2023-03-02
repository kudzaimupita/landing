import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import recentBlogData from '../../data/BlogData';
class RecentBlog extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='recent-blog'>
          <div className='container'>
            <SectionTitle
              firstTitle='From the'
              lastTitle='always learning blog'
              description="So I said knees up cuppa such a fibber Jeffrey a bit of how's
                yours."
              classOption='text-center'
            />
            <div className='row'>
              {recentBlogData.map((singleBlog) => (
                <div
                  className='col-md-6 col-lg-4 recent-post'
                  key={singleBlog._id}
                >
                  <div
                    className='tt-blog-grid wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    <div className='post_content'>
                      <div className='feature-image'>
                        <img
                          src={singleBlog.featureImg}
                          alt={singleBlog.postTag}
                        />
                      </div>

                      <div className='entry-content'>
                        <div className='entry-meta'>
                          <a
                            href={singleBlog.postDeatailsLink}
                            className='color__one'
                          >
                            {singleBlog.postTag}
                          </a>
                        </div>

                        <h3 className='entry-title'>
                          <a
                            href={singleBlog.postDeatailsLink}
                            className='post-title'
                          >
                            Google Ads certifications: Are they worth it?
                          </a>
                        </h3>

                        <p>{singleBlog.postExerp}</p>

                        <ul className='post-meta'>
                          <li className='author'>
                            <Link
                              className='post-author'
                              to={singleBlog.postDeatailsLink}
                            >
                              <img
                                src={singleBlog.authorImg}
                                alt={singleBlog.authorName}
                                className='avatar'
                              />
                              {singleBlog.authorName}
                            </Link>
                          </li>
                          <li className='meta-date'>{singleBlog.postDate}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default RecentBlog;
