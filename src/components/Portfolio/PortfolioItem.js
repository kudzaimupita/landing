import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ poThumbnail, poTitle, poCategory }) => {
  return (
    <>
      <div className='tt-portfolio__item col-lg-3 col-md-4 col-sm-6  portfolio_cat-branding'>
        <div
          className='tt-portfolio__post-wrapper tilt-effect dtZoom wow'
          data-wow-delay='0.3s'
        >
          <div className='tt-portfolio__thumbnail-wrapper'>
            <div className='tt-portfolio__topinfo'>
              <Link to={poThumbnail}>
                <i className='ei ei-icon_search'></i>
              </Link>
              <Link to='/portfolio-single'>
                <i className='ei ei-icon_link_alt'></i>
              </Link>
            </div>

            <div className='tt-portfolio__post-thumbnail'>
              <img src={poThumbnail} alt={poTitle} />
            </div>

            <div className='tt-portfolio__info'>
              <h3
                className='tt-portfolio__title'
                data-wow-delay='0.3s'
                data-hover='Web Design'
              >
                <span>{poTitle}</span>
              </h3>

              <div className='tt-portfolio__cat' data-wow-delay='0.3s'>
                <span className='cat'>{poCategory}</span>
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
            <span>{poTitle}</span>
          </h3>

          <div className='tt-portfolio__cat-bottom' data-wow-delay='0.3s'>
            <span className='cat'>{poCategory}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
