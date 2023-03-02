import React, { Component } from 'react';

class CounterFour extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='counter-area-three'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='counter-image-wrap'>
                  <img
                    src='media/image-content/counter_image.png'
                    alt='Counter'
                  />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='counter-content-wrap'>
                  <div className='section-heading'>
                    <h2
                      className='section-title wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      Blast ahead your
                      <br />
                      Competition with SEO
                    </h2>

                    <p className='description'>
                      The bee's knees I barney fantastic bum bag quaint geeza
                      spiffing such a fibber what a plonker off his nut only a
                      quid, my good sir james bond.
                    </p>
                  </div>

                  <div
                    className='tt-counter style-four wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    <div className='tt-counter__item style-four'>
                      <h2 className='tt-counter__count color__one'>
                        <span className='counter' data-counter='97'>
                          97
                        </span>
                      </h2>

                      <p className='tt-counter__title'>Projects</p>
                    </div>

                    <div className='tt-counter__item color-two'>
                      <h2 className='tt-counter__count'>
                        <span className='counter' data-counter='23'>
                          23
                        </span>
                      </h2>

                      <p className='tt-counter__title'>Awards</p>
                    </div>

                    <div className='tt-counter__item color-theree'>
                      <h2 className='tt-counter__count'>
                        <span className='counter' data-counter='15'>
                          15
                        </span>
                      </h2>

                      <p className='tt-counter__title'>Years</p>
                    </div>

                    <div className='tt-counter__item color-theree'>
                      <h2 className='tt-counter__count'>
                        <span className='counter' data-counter='42'>
                          42
                        </span>
                      </h2>

                      <p className='tt-counter__title'>People</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CounterFour;
