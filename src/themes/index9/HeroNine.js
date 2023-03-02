import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

class HeroNine extends Component {
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
      <>
        <section className='banner banner--nine d-flex align-items-center'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-7 tt-order-lg-2'>
                <div className='banner__content'>
                  <h2
                    className='banner__title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    <span>We are the data</span>
                    Analysis and
                    <br />
                    science
                  </h2>
                  <p
                    className='wow fadeInUp banner__description'
                    data-wow-delay='.5s'
                  >
                    He lost his bottle twit cracking goal cack the oxford
                    <br /> zonked on your bike mate.
                  </p>
                  <div className='banner__btns'>
                    <Link
                      to='/contact'
                      className='tt__btn btn-round banner-btn'
                    >
                      Explore Features
                    </Link>
                    <a href='#/' className='video-btn' onClick={this.openModal}>
                      <i className='fas fa-play'></i>See how It Works
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
              <div className='col-lg-5'>
                <div className='banner__feature-image wow fadeIn'>
                  <img
                    className='wow fadeInUp'
                    src='media/banner/banner-nine/banner-nine.png'
                    alt='banner'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HeroNine;
