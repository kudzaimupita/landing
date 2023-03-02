import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

class HeroSeven extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <section className='banner banner--seven d-flex align-items-center'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 tt-order-lg-2'>
                <div className='banner__content'>
                  <h2
                    className='banner__title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    <span>We are providing</span>
                    Best and Affordable Health Care.
                  </h2>

                  <p
                    className='wow fadeInUp banner__description'
                    data-wow-delay='.5s'
                  >
                    Online learning is the future of education, and it is right
                    <br /> now all around us.
                  </p>
                  <div className='banner__btns'>
                    <Link
                      to='contact'
                      className='tt__btn banner-btn wow fadeInUp'
                      data-wow-delay='.7s'
                    >
                      Contact Us
                    </Link>
                    <a
                      href='#/'
                      className='tt__btn btn-outline banner-btn wow fadeInUp'
                      onClick={this.openModal}
                    >
                      <i className='fas fa-play'></i>
                      Watch videos
                    </a>
                  </div>
                </div>
              </div>
              <ModalVideo
                channel='youtube'
                isOpen={this.state.isOpen}
                videoId='L61p2uyiMSo'
                onClose={() => this.setState({ isOpen: false })}
              />

              <div className='col-lg-6'>
                <div className='banner__feature-image wow fadeIn'>
                  <img
                    className='wow fadeInUp'
                    src='media/banner/banner-seven/main-image.png'
                    alt='banner'
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className='banner-bg-shape'>
            <li>
              <img
                src='media/banner/banner-seven/shape-one.png'
                alt='banner shape'
              />
            </li>
            <li>
              <img
                src='media/banner/banner-seven/shape-two.png'
                alt='banner shape'
              />
            </li>
            <li>
              <img
                src='media/banner/banner-seven/shape-three.png'
                alt='banner shape'
              />
            </li>
            <li>
              <img
                src='media/banner/banner-seven/shape-four.png'
                alt='banner shape'
              />
            </li>
            <li>
              <img
                src='media/banner/banner-seven/shape-five.png'
                alt='banner shape'
              />
            </li>
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default HeroSeven;
