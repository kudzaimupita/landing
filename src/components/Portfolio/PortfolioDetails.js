import React from 'react';

const PortfolioDetails = () => {
  return (
    <>
      <div className='portfolio-feature-image'>
        <img src='media/portfolio/single-main.png' alt='Portfolio single' />
      </div>
      <div className='portfolio-content'>
        <div className='container'>
          <div className='content-wrap'>
            <p>
              Matie boy blatant young delinquent cheeky bugger barney cheesed
              off, jolly good car boot nancy boy pear shaped cockup, it’s your
              round cack bloke naff. Brilliant pardon you arse over tit say nice
              one mufty don’t get shirty with me, no biggie lurgy hanky panky
              Harry mush Why, old codswallop horse play argy-bargy starkers.
              Porkies my lady cheesed off a load of old tosh gutted mate blatant
              nancy boy grub bubble and squeak, the full monty brolly cheeky
              Queen’s English baking cakes I bog cup of tea, well blimey are you
              taking the piss loo spiffing good time he legged it blow off.
              Burke brilliant bog bleeding Charles pear shaped vagabond skive
              off morish, twit cockup is faff about boot bloke cor blimey
              guvnor.
            </p>

            <p className='lead'>
              Cracking goal cheers absolutely bladdered wind up spiffing good
              time codswallop crikey dropped a clanger hanky panky on your bike
              mate bodge.
            </p>
          </div>

          <div className='row'>
            <div className='col-md-6 tt-md-3'>
              <img src='media/portfolio/single1.png' alt='' />
            </div>

            <div className='col-md-6'>
              <img src='media/portfolio/single2.png' alt='' />
            </div>

            <div className='col-md-12 mt-30'>
              <img src='media/portfolio/single3.png' alt='' />
            </div>
          </div>
        </div>

        <div className='portfolio-share'>
          <div className='share_social-wpapper'>
            <ul className='social-share-link'>
              <li>
                <a
                  className='share_post share_facebook'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.facebook.com/share.php?u=https://ultraland.themetags.com/portfolio/web-design/'
                >
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a
                  className='share_post share_twitter'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://twitter.com/intent/tweet?text=Web%20Design&amp;url=https://ultraland.themetags.com/portfolio/web-design/'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a
                  className='share_post share_pinterest'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://pinterest.com/pin/create/button/?url=https://ultraland.themetags.com/portfolio/web-design/&amp;media=media/portfolio/img_03.jpg'
                >
                  <i className='fab fa-pinterest-p'></i>
                </a>
              </li>
              <li>
                <a
                  className='share_post share_linkedin'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='http://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fultraland.themetags.com%2Fportfolio%2Fweb-design%2F&amp;title=Web+Design'
                >
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
            </ul>
          </div>

          <span className='share-title'>Share</span>
        </div>
      </div>

      <div className='container related-portfolio'>
        <div className='section-heading text-center'>
          <h3 className='subtitle'>Related Work </h3>
          <h2 className='section-title'>Our more projects </h2>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div className='tt-portfolio__item portfolio-related-post'>
                  <div className='tt-portfolio__thumbnail-wrapper'>
                    <div className='tt-portfolio__topinfo'>
                      <a
                        href='media/portfolio/rel1.jpg'
                        className='popup-modal'
                      >
                        <i className='ei ei-icon_search'></i>
                      </a>
                      <a href='/'>
                        <i className='ei ei-icon_link_alt'></i>
                      </a>
                    </div>

                    <div className='tt-portfolio__post-thumbnail'>
                      <img src='media/portfolio/rel1.jpg' alt='related post' />
                    </div>

                    <div className='tt-portfolio__info'>
                      <h3 className='tt-portfolio__title'>Web Application</h3>
                      <div className='tt-portfolio__cat'>
                        <span>Branding</span>
                      </div>
                    </div>
                  </div>

                  <div className='tt-portfolio__info-bottom'>
                    <h3 className='tt-portfolio__title-bottom'>
                      <span>Web Application</span>
                    </h3>

                    <div className='tt-portfolio__cat-bottom'>
                      <span className='cat'>Branding</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4 col-sm-6'>
                <div className='tt-portfolio__item portfolio-related-post'>
                  <div className='tt-portfolio__thumbnail-wrapper tilt-effect'>
                    <div className='tt-portfolio__topinfo'>
                      <a
                        href='media/portfolio/rel2.jpg'
                        className='popup-modal'
                      >
                        <i className='ei ei-icon_search'></i>
                      </a>

                      <a href='/'>
                        <i className='ei ei-icon_link_alt'></i>
                      </a>
                    </div>

                    <div className='tt-portfolio__post-thumbnail'>
                      <img src='media/portfolio/rel2.jpg' alt='Releted Post' />
                    </div>

                    <div className='tt-portfolio__info'>
                      <h3 className='tt-portfolio__title'>
                        Stunning Interface
                      </h3>
                      <div className='tt-portfolio__cat'>
                        <span>Branding</span>
                      </div>
                    </div>
                  </div>

                  <div className='tt-portfolio__info-bottom'>
                    <h3 className='tt-portfolio__title-bottom'>
                      <span>Stunning Interface</span>
                    </h3>

                    <div className='tt-portfolio__cat-bottom'>
                      <span className='cat'>Branding</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4 col-sm-6'>
                <div className='tt-portfolio__item portfolio-related-post'>
                  <div className='tt-portfolio__thumbnail-wrapper tilt-effect'>
                    <div className='tt-portfolio__topinfo'>
                      <a
                        href='media/portfolio/rel3.jpg'
                        className='popup-modal'
                      >
                        <i className='ei ei-icon_search'></i>
                      </a>
                      <a href='/'>
                        <i className='ei ei-icon_link_alt'></i>
                      </a>
                    </div>

                    <div className='tt-portfolio__post-thumbnail'>
                      <img src='media/portfolio/rel3.jpg' alt='Releted Post' />
                    </div>

                    <div className='tt-portfolio__info'>
                      <h3 className='tt-portfolio__title'>Awesome Website</h3>
                      <div className='tt-portfolio__cat'>
                        <span>Branding</span>
                        <span>Ecommerce</span>
                      </div>
                    </div>
                  </div>

                  <div className='tt-portfolio__info-bottom'>
                    <h3 className='tt-portfolio__title-bottom'>
                      <span>Awesome Website</span>
                    </h3>

                    <div className='tt-portfolio__cat-bottom'>
                      <span className='cat'>Branding</span>
                      <span className='cat'>Ecommerce</span>
                    </div>
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

export default PortfolioDetails;
