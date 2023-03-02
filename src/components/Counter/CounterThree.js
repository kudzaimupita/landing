import React, { Component } from 'react';

class CounterThree extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='counter-area-two'>
          <div className='container'>
            <div
              className='tt-counter style-three wow fadeInUp'
              data-wow-delay='0.3s'
            >
              <div className='tt-counter__item style-three'>
                <h2 className='tt-counter__count color__one'>
                  <span className='counter' data-counter='207'>
                    207
                  </span>
                  <span className='suffix'>+</span>
                </h2>

                <p className='tt-counter__title'>Succeeded Projects</p>
              </div>

              <div className='tt-counter__item color-two'>
                <h2 className='tt-counter__count'>
                  <span className='counter' data-counter='4206'>
                    4206
                  </span>
                  <span className='suffix'>+</span>
                </h2>

                <p className='tt-counter__title'>Working hours were spent</p>
              </div>

              <div className='tt-counter__item color-theree'>
                <h2 className='tt-counter__count'>
                  <span className='counter' data-counter='2700'>
                    2700
                  </span>
                  <span className='suffix'>+</span>
                </h2>

                <p className='tt-counter__title'>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CounterThree;
