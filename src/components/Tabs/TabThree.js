import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';

class TabThree extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='feature-tabs-three'>
          <div className='container'>
            <SectionTitle
              firstTitle='A multifunctional and'
              lastTitle='safe business'
              description="So I said knees up cuppa such a fibber Jeffrey a bit of how's
                yours."
              classOption='text-center'
            />
            <div
              className='tt-feature-tab-two wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <nav>
                <div
                  className='nav nav-pills tt-tabs-navigation feature-tab-two-nav'
                  id='nav-tab'
                  role='tablist'
                >
                  <a
                    className='nav-link tab-nav-item feature-tab-two-nav__item active'
                    id='nav-home-tab'
                    data-toggle='tab'
                    href='#nav-home'
                    role='tab'
                    aria-controls='nav-home'
                    aria-selected='true'
                  >
                    <div className='tab-icon'>
                      <img src='media/feature/tab1.svg' alt='tab' />
                    </div>
                    <div className='nav_content'>
                      <h4 className='feature-tab-two-nav__title'>
                        Easy online builder
                      </h4>
                    </div>
                  </a>
                  <a
                    className='nav-link tab-nav-item feature-tab-two-nav__item'
                    id='nav-profile-tab'
                    data-toggle='tab'
                    href='#nav-profile'
                    role='tab'
                    aria-controls='nav-profile'
                    aria-selected='false'
                  >
                    <div className='tab-icon'>
                      <img src='media/feature/tab2.svg' alt='tab' />
                    </div>

                    <div className='nav_content'>
                      <h4 className='feature-tab-two-nav__title'>
                        Remote Testing
                      </h4>
                    </div>
                  </a>
                </div>
              </nav>
              <div
                className='tab-content tt-tabs-content feature-tab-two'
                id='nav-tabContent'
              >
                <div
                  className='tab-pane tt-tab-item feature-tab-two__item fade show active'
                  id='nav-home'
                  role='tabpanel'
                  aria-labelledby='nav-home-tab'
                >
                  <div className='ultraland-tabs-contents feature-tab-two__content-wrap'>
                    <h3 className='feature-tab-two__title'>
                      Say hello to your
                      <br /> Modern Learning Platform
                    </h3>

                    <p className='feature-tab-two__description'>
                      Lurgy Eaton wind up butty barmy burke twit naff what a
                      plonker, Oxford chancer spiffing good time pardon me hunky
                      dory.
                    </p>

                    <Link to='/about' className='tt__btn btn-outline btn-round'>
                      Read More
                      <i className='ei ei-arrow_right'></i>
                    </Link>
                  </div>
                  <div className='feature-tab-two__image'>
                    <img
                      src='media/tabs/tab_image3.png'
                      alt='Say hello to your<br> Modern Learning Platform'
                    />
                  </div>
                </div>
                <div
                  className='tab-pane tt-tab-item feature-tab-two__item fade'
                  id='nav-profile'
                  role='tabpanel'
                  aria-labelledby='nav-profile-tab'
                >
                  <div className='ultraland-tabs-contents feature-tab-two__content-wrap'>
                    <h3 className='feature-tab-two__title'>
                      Say hello to yourr
                      <br /> Modern Learning Platform
                    </h3>

                    <p className='feature-tab-two__description'>
                      Lurgy Eaton wind up butty barmy burke twit naff what a
                      plonker, Oxford chancer spiffing good time pardon me hunky
                      dory.
                    </p>

                    <Link to='/about' className='tt__btn btn-outline btn-round'>
                      Read More
                      <i className='ei ei-arrow_right'></i>
                    </Link>
                  </div>
                  <div className='feature-tab-two__image'>
                    <img
                      src='media/tabs/tab_image4.png'
                      alt='Say hello to your<br> Modern Learning Platform'
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
export default TabThree;
