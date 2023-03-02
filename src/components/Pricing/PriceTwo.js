import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PriceTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='pricing-two-area'>
          <div className='container'>
            <div className='priceing-tab'>
              <nav className='mb-5'>
                <div
                  className='nav nav-pills justify-content-center pricing-tab-list list-two'
                  id='nav-tab'
                  role='tablist'
                >
                  <a
                    className='active'
                    id='nav-home-tab'
                    data-toggle='tab'
                    href='#nav-home'
                    role='tab'
                    aria-controls='nav-home'
                    aria-selected='true'
                  >
                    Monthly
                  </a>
                  <a
                    id='nav-profile-tab'
                    data-toggle='tab'
                    href='#nav-profile'
                    role='tab'
                    aria-controls='nav-profile'
                    aria-selected='false'
                  >
                    Annualy
                  </a>
                </div>
              </nav>

              <div className='tab-content tt-pricing-plan' id='nav-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='nav-home'
                  role='tabpanel'
                  aria-labelledby='nav-home-tab'
                >
                  <div className='tt-price-info'>
                    <h4 className='price-title'>Small business</h4>
                    <h2 className='tt-price'>
                      <div className='monthly-price'>
                        <span className='suffix'>$</span>24
                        <span className='cent'>.99</span>
                      </div>
                    </h2>
                    <p className='period'>Per month, per channel</p>
                    <Link to='/contact' className='tt__btn btn-round'>
                      Read more about
                    </Link>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='nav-profile'
                  role='tabpanel'
                  aria-labelledby='nav-profile-tab'
                >
                  <div className='tt-price-info'>
                    <h4 className='price-title'>Small business</h4>

                    <h2 className='tt-price'>
                      <div className='yearly-price'>
                        <span className='suffix'>$</span>49
                        <span className='cent'>.99</span>
                      </div>
                    </h2>
                    <p className='period'>Per month, per channel</p>
                    <Link to='/contact' className='tt__btn btn-round'>
                      Read more about
                    </Link>
                  </div>
                </div>
                <div className='price-feature-info'>
                  <div className='feature-list-wrapper'>
                    <h3 className='tt-price-feature-title'>
                      Start Selling More Today
                    </h3>

                    <ul className='feature-list'>
                      <li>
                        <i className='ei ei-icon_check'></i>Marketing Strategy
                      </li>
                      <li>
                        <i className='ei ei-icon_check'></i>Free Hosting
                      </li>
                      <li>
                        <i className='ei ei-icon_check'></i>Free Hosting
                      </li>
                      <li>
                        <i className='ei ei-icon_check'></i>Social media Audit
                      </li>
                      <li>
                        <i className='ei ei-icon_check'></i>40MB Storage Space
                      </li>
                      <li>
                        <i className='ei ei-icon_check'></i>Own Analytics
                        Platform
                      </li>
                      <li>
                        <i className='ei ei-icon_check'></i>Chat Support
                      </li>
                      <li>
                        <i className='ei ei-icon_check'></i>Number of Users
                      </li>
                    </ul>
                  </div>
                  <div className='pricing-content'>
                    <p>* All fees are billed in US dollars.</p>
                    <p>* A minimum of 2 sales channels is required.</p>
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
export default PriceTwo;
