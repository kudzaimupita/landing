import React, { Component } from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/data';

class PortfolioAll extends Component {
  state = {
    activeItem: '*',
  };
  componentDidMount() {
    var imgLoad = new ImagesLoaded('#portfolio');

    imgLoad.on('progress', function (instance, image) {
      this.iso = new Isotope('#portfolio', {
        itemSelector: '.tt-portfolio__item',
        layoutMode: 'masonry',
      });
    });
  }
  onFilterChange = (newFilter) => {
    this.setState({ activeItem: newFilter });
    if (this.iso === undefined) {
      this.iso = new Isotope('#portfolio', {
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
        <section className='portfolio-section'>
          <div className='container'>
            <div className='tt-portfolio__filter-wrapper'>
              <ul className='tt-portfolio__filter tab-swipe'>
                <li className='current site-info'>
                  <Link
                    to='#'
                    data-filter='*'
                    className={`${this.onActive('*')}`}
                    onClick={() => {
                      this.onFilterChange('*');
                    }}
                  >
                    All Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    data-filter='branding'
                    className={`${this.onActive('branding')}`}
                    onClick={() => {
                      this.onFilterChange('branding');
                    }}
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    data-filter='digitalApp'
                    className={`${this.onActive('digitalApp')}`}
                    onClick={() => {
                      this.onFilterChange('digitalApp');
                    }}
                  >
                    Digital App
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    data-filter='ecommerce'
                    className={`${this.onActive('ecommerce')}`}
                    onClick={() => {
                      this.onFilterChange('ecommerce');
                    }}
                  >
                    Ecommerce
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    data-filter='uxDesign'
                    className={` ${this.onActive('uxDesign')}`}
                    onClick={() => {
                      this.onFilterChange('uxDesign');
                    }}
                  >
                    UX Design
                  </Link>
                </li>
              </ul>
            </div>

            <div className='tt-portfolio__wrapper style-grid'>
              <div
                className='tt-portfolio row'
                id='portfolio'
                style={{ position: 'relative', height: '1363.55px' }}
              >
                <div className='grid-sizer'></div>
                {portfolioData.map((data) => (
                  <div
                    className={`tt-portfolio__item col-lg-3 col-md-4 col-sm-6 ${data.catNameForFilter}`}
                    key={data._id}
                  >
                    <div
                      className='tt-portfolio__post-wrapper tilt-effect dtZoom wow'
                      data-wow-delay='0.3s'
                    >
                      <div className='tt-portfolio__thumbnail-wrapper'>
                        <div className='tt-portfolio__topinfo'>
                          <Link to={data.poThumbnail} className='popup-modal'>
                            <i className='ei ei-icon_search'></i>
                          </Link>
                          <Link to='/portfolio-single'>
                            <i className='ei ei-icon_link_alt'></i>
                          </Link>
                        </div>

                        <div className='tt-portfolio__post-thumbnail'>
                          <img src={data.poThumbnail} alt={data.poTitle} />
                        </div>

                        <div className='tt-portfolio__info'>
                          <h3
                            className='tt-portfolio__title'
                            data-wow-delay='0.3s'
                            data-hover='Web Design'
                          >
                            <span>{data.poTitle}</span>
                          </h3>

                          <div
                            className='tt-portfolio__cat'
                            data-wow-delay='0.3s'
                          >
                            <span className='cat'>{data.poCategory}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='tt-portfolio__info-bottom'>
                      <h3
                        className='tt-portfolio__title-bottom'
                        data-wow-delay='0.3s'
                        data-hover='Web Design'
                      >
                        <span>{data.poTitle}</span>
                      </h3>

                      <div
                        className='tt-portfolio__cat-bottom'
                        data-wow-delay='0.3s'
                      >
                        <span className='cat'>{data.poCategory}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PortfolioAll;
