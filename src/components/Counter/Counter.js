import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='funfact-section'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <h3
                  className='title text-center wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  Over 1400+
                  <br />
                  completed work & Still counting.
                </h3>

                <div className='tt-counter wow fadeInUp' data-wow-delay='0.5s'>
                  <div className='tt-counter__item'>
                    <h2 className='tt-counter__count color__one'>
                      <span className='counter' data-counter='845'>
                        845
                      </span>
                      <span className='suffix'>k</span>
                    </h2>

                    <p className='tt-counter__title'>Happy Clients</p>
                  </div>

                  <div className='tt-counter__item'>
                    <h2 className='tt-counter__count color__two'>
                      <span className='counter' data-counter='765'>
                        765
                      </span>
                      <span className='suffix'>k</span>
                    </h2>

                    <p className='tt-counter__title'>App Downloads</p>
                  </div>

                  <div className='tt-counter__item'>
                    <h2 className='tt-counter__count color__three'>
                      <span className='counter' data-counter='2.4'>
                        2
                      </span>
                      <span className='suffix'>M</span>
                    </h2>

                    <p className='tt-counter__title'>Our Users</p>
                  </div>

                  <div className='tt-counter__item'>
                    <h2 className='tt-counter__count color__four'>
                      <span className='counter' data-counter='37'>
                        37
                      </span>
                      <span className='suffix'>+</span>
                    </h2>

                    <p className='tt-counter__title'>Experience</p>
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
export default Counter;
