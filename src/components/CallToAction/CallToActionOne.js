import React, { Component } from 'react';

class CallToActionOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='call-to-action'>
          <div className='container'>
            <div className='actions-content'>
              <h2 className='action-title wow fadeInUp'>
                Find out what Servly
                <br />
                can do for your API spend
              </h2>

              <p className='description wow fadeInUp' data-wow-delay='0.3s'>
                Such a fibber the full monty knees up wellies bog blimey mush at
                public school up the kyver cockup, what a plonker daft bits and
                bobs.
              </p>

              <div className='button-wrapper'>
                <a
                  href='contact'
                  className='tt__btn wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  Book a Demo
                </a>
              </div>

              <div
                className='author-info-box wow fadeInUp'
                data-wow-delay='0.7s'
              >
                <div className='avatar'>
                  <img src='media/testimonial/author.png' alt='Author' />
                </div>

                <h3 className=' author-info'>
                  You’ll be talking with Gated, our Co-founder.
                </h3>
              </div>
            </div>
          </div>

          <ul className='animated-bg-shap parallax-element'>
            <li className='layer' data-depth='0.08'>
              <div className='image-wrap'>
                <img src='media/element/shape_one.png' alt='animated shape' />
              </div>
            </li>
            <li className='layer' data-depth='0.03'>
              <div className='image-wrap'>
                <img src='media/element/shape_two.png' alt='animated shape' />
              </div>
            </li>
            <li className='layer' data-depth='0.04'>
              <div className='image-wrap'>
                <img src='media/element/shape_three.png' alt='animated shape' />
              </div>
            </li>
            <li className='layer' data-depth='0.07'>
              <div className='image-wrap'>
                <img src='media/element/shape_four.png' alt='animated shape' />
              </div>
            </li>
            <li className='layer' data-depth='0.05'>
              <div className='image-wrap'>
                <img src='media/element/shape_five.png' alt='animated shape' />
              </div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default CallToActionOne;
