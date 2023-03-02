import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PromoOne extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='promo-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='tt-promo wow fadeInLeft' data-wow-delay='0.3s'>
                  <div className='tt-promo__content'>
                    <h3 className='tt-promo__title'>Creative Ideas</h3>

                    <p className='tt-promo__description'>
                      Up the duff hunky-dory blow off mufty owt to do.
                    </p>

                    <Link
                      to='/about'
                      className='tt__btn btn-outline tt-promo__btn'
                    >
                      Learn More
                    </Link>
                  </div>

                  <div className='tt-promo__image'>
                    <img src='media/feature/promo.png' alt='Creative Ideas' />
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div
                  className='tt-promo color-two wow fadeInRight'
                  data-wow-delay='0.3s'
                >
                  <div className='tt-promo__content'>
                    <h3 className='tt-promo__title'>Marketing Toolbox</h3>

                    <p className='tt-promo__description'>
                      Up the duff hunky-dory blow off mufty owt to do.
                    </p>

                    <Link
                      to='/about'
                      className='tt__btn btn-outline tt-promo__btn'
                    >
                      Learn More
                    </Link>
                  </div>

                  <div className='tt-promo__image'>
                    <img
                      src='media/feature/promo2.png'
                      alt='Marketing Toolbox'
                    />
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

export default PromoOne;
