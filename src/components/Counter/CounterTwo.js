import React, { Component } from 'react';

class CounterTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='counter-area'>
          <div className='container'>
            <div className='tt-counter wow fadeInUp' data-wow-delay='0.3s'>
              <div className='tt-counter__item style-two'>
                <h2 className='tt-counter__count color__one'>
                  <span className='counter' data-counter='406'>
                    406
                  </span>
                  <span className='suffix'>+</span>
                </h2>

                <p className='tt-counter__title'>Successful Projects</p>
              </div>

              <div className='tt-counter__item style-two'>
                <h2 className='tt-counter__count'>
                  <span className='counter' data-counter='706'>
                    706
                  </span>
                  <span className='suffix'>+</span>
                </h2>

                <p className='tt-counter__title'>API Accsess</p>
              </div>

              <div className='tt-counter__item style-two'>
                <h2 className='tt-counter__count'>
                  <span className='counter' data-counter='512'>
                    512
                  </span>
                  <span className='suffix'>+</span>
                </h2>

                <p className='tt-counter__title'>Active clients</p>
              </div>

              <div className='tt-counter__item style-two'>
                <h2 className='tt-counter__count'>
                  <span className='counter' data-counter='97'>
                    97
                  </span>
                  <span className='suffix'>%</span>
                </h2>

                <p className='tt-counter__title'>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CounterTwo;
