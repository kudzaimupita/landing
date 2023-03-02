import React, { Component } from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import { Link } from 'react-router-dom';

class Courses extends Component {
  state = {
    activeItem: '*',
  };
  componentDidMount() {
    var imgLoad = new ImagesLoaded('.tt-portfolio');

    imgLoad.on('progress', function (instance, image) {
      this.iso = new Isotope('.tt-portfolio', {
        itemSelector: '.tt-portfolio__item',
        layoutMode: 'masonry',
      });
    });
  }
  onFilterChange = (newFilter) => {
    this.setState({ activeItem: newFilter });
    if (this.iso === undefined) {
      this.iso = new Isotope('.tt-portfolio', {
        itemSelector: '.tt-portfolio__item',
        layoutMode: 'masonry',
      });
    }

    // this.iso.arrange({ filter: newFilter });

    if (newFilter === '*') {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };
  onActive = (item) => (item === this.state.activeItem ? 'isActive' : '');
  render() {
    return (
      <React.Fragment>
        <section className='courses-section'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <div className='section-heading style-one'>
                  <h2
                    className='section-title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    Find the Right
                    <br />
                    Our Popular Courses
                  </h2>

                  <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                    The his nut say faf about excusesloshed is matie boy hip
                    shop nic.
                  </p>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='tt-portfolio__filter-wrapper text-right'>
                  <ul className='tt-portfolio__filter tt-course__filter'>
                    <li className=''>
                      <Link
                        to='#'
                        data-filter='*'
                        className={`${this.onActive('*')}`}
                        onClick={() => {
                          this.onFilterChange('*');
                        }}
                      >
                        All
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        data-filter='trending'
                        className={`${this.onActive('trending')}`}
                        onClick={() => {
                          this.onFilterChange('trending');
                        }}
                      >
                        Trending
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        data-filter='design'
                        className={`${this.onActive('design')}`}
                        onClick={() => {
                          this.onFilterChange('design');
                        }}
                      >
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        data-filter='featured'
                        className={`${this.onActive('featured')}`}
                        onClick={() => {
                          this.onFilterChange('featured');
                        }}
                      >
                        Featured
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        data-filter='development'
                        className={`${this.onActive('development')}`}
                        onClick={() => {
                          this.onFilterChange('development');
                        }}
                      >
                        Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='tt-portfolio__wrapper style-grid'>
              <div className='tt-portfolio row'>
                <div className='grid-sizer'></div>

                <div
                  className={`tt-portfolio__item col-lg-4 col-md-6 col-sm-6 trending development`}
                >
                  <div className='tt-course'>
                    <div className='tt-course__post-wrapper'>
                      <div className='tt-course__post-thumbnail'>
                        <img src='media/education/1.jpg' alt='portfolio ' />
                      </div>
                    </div>

                    <div className='tt-course__info'>
                      <div className='tt-course__meta-wrap'>
                        <div className='tt-course__meta-cat'>
                          <a href='#//' className='tt-course__cate'>
                            Data Science
                          </a>
                        </div>

                        <div className='tt-course__rating'>
                          <i className='ei ei-icon_star'></i>
                          <span>24 Votes</span>
                        </div>
                      </div>

                      <h3 className='tt-course__title'>
                        Growth Mindsets for Teachers And Learners
                      </h3>

                      <span className='tt-course__lessons'>
                        <i className='ei ei-icon_book_alt'></i>36 Lessons
                      </span>

                      <div className='tt-course__footer'>
                        <div className='tt-course__price-wrap'>
                          <h4 className='tt-course__price'>
                            $25.00 <span className='old-price'>$38.00</span>
                          </h4>
                        </div>

                        <a href='#/' className='more-link'>
                          <i className='feather-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tt-portfolio__item col-lg-4 col-md-6 col-sm-6 grid-item design featured`}
                >
                  <div className='tt-course'>
                    <div className='tt-course__post-wrapper'>
                      <div className='tt-course__post-thumbnail'>
                        <img src='media/education/2.jpg' alt='portfolio ' />
                      </div>
                    </div>

                    <div className='tt-course__info'>
                      <div className='tt-course__meta-wrap'>
                        <div className='tt-course__meta-cat'>
                          <a href='#/' className='tt-course__cate'>
                            Development
                          </a>
                        </div>

                        <div className='tt-course__rating'>
                          <i className='ei ei-icon_star'></i>
                          <span>30 Votes</span>
                        </div>
                      </div>

                      <h3 className='tt-course__title'>
                        Growth Marketing Build High Converting Funnels
                      </h3>

                      <span className='tt-course__lessons'>
                        <i className='ei ei-icon_book_alt'></i>42 Lessons
                      </span>

                      <div className='tt-course__footer'>
                        <div className='tt-course__price-wrap'>
                          <h4 className='tt-course__price'>
                            $37.00 <span className='old-price'>$50.00</span>
                          </h4>
                        </div>

                        <a href='#/' className='more-link'>
                          <i className='feather-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tt-portfolio__item col-lg-4 col-md-6 col-sm-6 grid-item trending desing`}
                >
                  <div className='tt-course'>
                    <div className='tt-course__post-wrapper'>
                      <div className='tt-course__post-thumbnail'>
                        <img src='media/education/3.jpg' alt='portfolio ' />
                      </div>
                    </div>

                    <div className='tt-course__info'>
                      <div className='tt-course__meta-wrap'>
                        <div className='tt-course__meta-cat'>
                          <a href='#/' className='tt-course__cate'>
                            Art & Design
                          </a>
                        </div>

                        <div className='tt-course__rating'>
                          <i className='ei ei-icon_star'></i>
                          <span>36 Votes</span>
                        </div>
                      </div>

                      <h3 className='tt-course__title'>
                        The Art of Black and White Photography
                      </h3>

                      <span className='tt-course__lessons'>
                        <i className='ei ei-icon_book_alt'></i>58 Lessons
                      </span>

                      <div className='tt-course__footer'>
                        <div className='tt-course__price-wrap'>
                          <h4 className='tt-course__price'>
                            $30.00 <span className='old-price'>$42.00</span>
                          </h4>
                        </div>

                        <a href='#/' className='more-link'>
                          <i className='feather-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tt-portfolio__item col-lg-4 col-md-6 col-sm-6 grid-item design development`}
                >
                  <div className='tt-course'>
                    <div className='tt-course__post-wrapper'>
                      <div className='tt-course__post-thumbnail'>
                        <img src='media/education/4.jpg' alt='portfolio' />
                      </div>
                    </div>

                    <div className='tt-course__info'>
                      <div className='tt-course__meta-wrap'>
                        <div className='tt-course__meta-cat'>
                          <a href='#/' className='tt-course__cate'>
                            UX Design
                          </a>
                        </div>

                        <div className='tt-course__rating'>
                          <i className='ei ei-icon_star'></i>
                          <span>40 Votes</span>
                        </div>
                      </div>

                      <h3 className='tt-course__title'>
                        Video Marketing Learn to Plan &amp; Create Content
                      </h3>

                      <span className='tt-course__lessons'>
                        <i className='ei ei-icon_book_alt'></i>19 Lessons
                      </span>

                      <div className='tt-course__footer'>
                        <div className='tt-course__price-wrap'>
                          <h4 className='tt-course__price'>
                            $54.00 <span className='old-price'>$70.00</span>
                          </h4>
                        </div>

                        <a href='#/' className='more-link'>
                          <i className='feather-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tt-portfolio__item col-lg-4 col-md-6 col-sm-6 grid-item trending`}
                >
                  <div className='tt-course'>
                    <div className='tt-course__post-wrapper'>
                      <div className='tt-course__post-thumbnail'>
                        <img src='media/education/5.jpg' alt='portfolio ' />
                      </div>
                    </div>

                    <div className='tt-course__info'>
                      <div className='tt-course__meta-wrap'>
                        <div className='tt-course__meta-cat'>
                          <a href='#/' className='tt-course__cate'>
                            Management
                          </a>
                        </div>

                        <div className='tt-course__rating'>
                          <i className='ei ei-icon_star'></i>
                          <span>27 Votes</span>
                        </div>
                      </div>

                      <h3 className='tt-course__title'>
                        Digital art for beginners unleash Your creativity
                      </h3>

                      <span className='tt-course__lessons'>
                        <i className='ei ei-icon_book_alt'></i>27 Lessons
                      </span>

                      <div className='tt-course__footer'>
                        <div className='tt-course__price-wrap'>
                          <h4 className='tt-course__price'>
                            $20.00 <span className='old-price'>$36.00</span>
                          </h4>
                        </div>

                        <a href='#/' className='more-link'>
                          <i className='feather-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tt-portfolio__item col-lg-4 col-md-6 col-sm-6 grid-item trending`}
                >
                  <div className='tt-course'>
                    <div className='tt-course__post-wrapper'>
                      <div className='tt-course__post-thumbnail'>
                        <img src='media/education/6.jpg' alt='portfolio ' />
                      </div>
                    </div>

                    <div className='tt-course__info'>
                      <div className='tt-course__meta-wrap'>
                        <div className='tt-course__meta-cat'>
                          <a href='#/' className='tt-course__cate'>
                            Engineering
                          </a>
                        </div>

                        <div className='tt-course__rating'>
                          <i className='ei ei-icon_star'></i>
                          <span>32 Votes</span>
                        </div>
                      </div>

                      <h3 className='tt-course__title'>
                        The right negotiation trick for the Client
                      </h3>

                      <span className='tt-course__lessons'>
                        <i className='ei ei-icon_book_alt'></i>65 Lessons
                      </span>

                      <div className='tt-course__footer'>
                        <div className='tt-course__price-wrap'>
                          <h4 className='tt-course__price'>
                            $69.00 <span className='old-price'>$80.00</span>
                          </h4>
                        </div>

                        <a href='#/' className='more-link'>
                          <i className='feather-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='btn-container course-buttons text-center'>
                <a href='#/' className='tt__btn btn-outline btn-sqr'>
                  Browse More Courses
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Courses;
