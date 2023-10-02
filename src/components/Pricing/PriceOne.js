import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';

const PriceOne = ({ hasSectionTitle }) => {
  return (
    <>
      <section className='pricing'>
        <div className='container'>
          {hasSectionTitle ? (
            <SectionTitle
              firstTitle='Choose the offer'
              lastTitle='That suits you'
              description='So I said knees up cuppa such a fibber jeffrey a bit of hows
                your'
              classOption='text-center'
            />
          ) : (
            ''
          )}

          <div className='priceing-tab'>
            <nav className='mb-5'>
              <div
                className='nav nav-pills justify-content-center pricing-tab-list'
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
                  disabled
                  id='nav-profile-tab'
                  data-toggle='tab'
                  href='#nav-profile'
                  role='tab'
                  aria-controls='nav-profile'
                  aria-selected='false'
                >
                  Annually
                </a>
              </div>
            </nav>
            <div className='tab-content' id='nav-tabContent'>
              <div
                className='tab-pane fade show active'
                id='nav-home'
                role='tabpanel'
                aria-labelledby='nav-home-tab'
              >
                <div className='row advanced-pricing-table'>
                  <div
                    className='col-xl-3 col-lg-6 col-md-6'
                    data-wow-dealy='0.4s'
                  >
                    <div className='pricing-table' id='pric-886-0'>
                      <div className='price-content-wrapper'>
                        <div className='pricing-header pricing-amount'>
                          <h2 className='price-title'>Basic</h2>
                          <div className='monthly-price'>
                            <h3 className='price'>
                              $59<span className='period'>/month</span>
                            </h3>
                          </div>
                          <h3 className='price-subtitle'>Per Seat</h3>
                        </div>
                        <ul className='price-feture'>
                          <li>1 site</li>
                          <li>5 User Groups</li>
                          <li>10 modules</li>
                          {/* <li>20 Portal Users </li> */}
                          <li>5 Data Capture Forms</li>
                          <li>5 Task Automations</li>
                          <li>Unlimited Document Builder</li>
                          <li>No Virtual Fields</li>
                          <li>5 Insights Per Module</li>
                          <li>5 Hook Actions Per Module</li>
                          <li>3 Header Analytics Per Module</li>
                          <li>1GB Storage Per Module</li>
                          <li>3000 Alerts Per Month</li>
                          <li>14 Day Log Retention</li>
                          <li>No Field Level Security</li>
                          <li>No Broadcasts</li>
                          <li>No Document Restore</li>
                          <li>Basic reports</li>
                          <li>12 Hour Free System Setup</li>

                          <li>No Feed</li>
                        </ul>
                        <div className='action'>
                          <div className='btn-month monthly-price'>
                            <Link to='/contact' className='tt__btn btn-outline'>
                              Subscription{' '}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-xl-3 col-lg-6 col-md-6 wow pixFadeUp animated'
                    data-wow-dealy='0.4s'
                  >
                    <div className='pricing-table'>
                      <div className='price-content-wrapper'>
                        <div className='pricing-header pricing-amount'>
                          <h2 className='price-title'>Advanced Plan</h2>
                          <div className='monthly-price'>
                            <h3 className='price'>
                              $89<span className='period'>/month</span>
                            </h3>
                          </div>
                          <h3 className='price-subtitle'>Per Seat</h3>
                        </div>
                        <ul className='price-feture'>
                          <li>5 sites</li>
                          <li>10 User Groups</li>
                          <li>15 modules</li>
                          {/* <li>20 Portal Users </li> */}
                          <li>10 Data Capture Forms</li>
                          <li>15 Task Automations</li>
                          <li>Unlimited Document Builder</li>
                          <li>No Virtual Fields</li>
                          <li>10 Insights Per Module</li>
                          <li>10 Hook Actions Per Module</li>
                          <li>5 Header Analytics Per Module</li>
                          <li>2GB Storage Per Module</li>
                          <li>8000 Alerts Per Month</li>
                          <li>31 Day Log Retention</li>
                          <li>No Field Level Security</li>
                          <li>No Broadcasts</li>
                          <li>Document Restore </li>
                          <li>Basic reports</li>
                          <li>24 Hour Free System Setup</li>

                          <li>Tenant Feed</li>
                        </ul>
                        <div className='action'>
                          <div className='btn-month monthly-price'>
                            <Link
                              to='/request-demo'
                              className='tt__btn btn-outline'
                            >
                              Get Started{' '}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-xl-3 col-lg-6 col-md-6 wow pixFadeUp animated'
                    data-wow-dealy='0.4s'
                  >
                    <div className='pricing-table'>
                      <div className='price-content-wrapper'>
                        <div className='pricing-header pricing-amount'>
                          <h2 className='price-title'>Premium Plan</h2>
                          <div className='monthly-price'>
                            <h3 className='price'>
                              $119<span className='period'>/month</span>
                            </h3>
                          </div>
                          <h3 className='price-subtitle'>Per Seat</h3>
                        </div>
                        <ul className='price-feture'>
                          <li>10 sites</li>
                          <li>20 User Groups</li>
                          <li>20 modules</li>
                          {/* <li>20 Portal Users </li> */}
                          <li>20 Data Capture Forms</li>
                          <li>30 Task Automations</li>
                          <li>Unlimited Document Builder</li>
                          <li>Virtual Fields</li>
                          <li>25 Insights Per Module</li>
                          <li>20 Hook Actions Per Module</li>
                          <li>Unlimited Header Analytics Per Module</li>
                          <li>5GB Storage Per Module</li>
                          <li>15000 Alerts Per Month</li>
                          <li>6 months Log Retention</li>
                          <li>Field Level Security</li>
                          <li>Broadcasts</li>
                          <li>Document Restore </li>
                          <li>Advanced Reporting</li>

                          <li>24 Hour Free System Setup</li>
                          <li>Tenant Feed</li>
                        </ul>

                        <div className='action'>
                          <div className='btn-month monthly-price'>
                            <Link
                              to='/request-demo'
                              className='tt__btn btn-outline'
                            >
                              Get Started{' '}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-6 col-md-6'>
                    <div className='pricing-table'>
                      <div className='price-content-wrapper'>
                        <div className='pricing-header pricing-amount'>
                          <h2 className='price-title'>Enterprise Plan</h2>

                          {/* <div className="monthly-price">
                            <h3 className="price">
                              $499<span className="period">/month</span>
                            </h3>
                          </div> */}

                          <h3 className='price-subtitle'>Contact Us</h3>
                        </div>
                        <ul className='price-feture'>
                          <li>Custom Domain </li>
                          <li>On Prem/Hybrid</li>
                          <li>Dedicated 24/7 premium Support</li>
                          <li>Custom Pricing</li>
                          <li>Custom Auth</li>

                          <li> Tailored customization and development </li>
                          <li>On Prem/Hybrid Infrastructure</li>
                          <li>API access</li>
                          <li>Custom Pricing</li>
                        </ul>

                        <div className='action'>
                          <div className='btn-month monthly-price'>
                            <Link
                              to='/request-demo'
                              className='tt__btn btn-outline'
                            >
                              Get Started{' '}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-profile'
                role='tabpanel'
                aria-labelledby='nav-profile-tab'
              >
                <div className='row advanced-pricing-table'>
                  <div
                    className='col-xl-3 col-lg-6 col-md-6'
                    data-wow-dealy='0.4s'
                  >
                    <div className='pricing-table' id='pric-886-0'>
                      <div className='price-content-wrapper'>
                        <div className='pricing-header pricing-amount'>
                          <h2 className='price-title'>Basic</h2>
                          <div className='monthly-price'>
                            <h3 className='price'>
                              $649<span className='period'>/year</span>
                            </h3>
                          </div>
                          <h3 className='price-subtitle'>Per Seat</h3>
                        </div>
                        <ul className='price-feture'>
                          <li>1 site</li>
                          <li>5 User Groups</li>
                          <li>10 modules</li>
                          {/* <li>20 Portal Users </li> */}
                          <li>5 Data Capture Forms</li>
                          <li>5 Task Automations</li>
                          <li>Unlimited Document Builder</li>
                          <li>No Virtual Fields</li>
                          <li>5 Insights Per Module</li>
                          <li>5 Hook Actions Per Module</li>
                          <li>3 Header Analytics Per Module</li>
                          <li>1GB Storage Per Module</li>
                          <li>3000 Alerts Per Month</li>
                          <li>14 Day Log Retention</li>
                          <li>No Field Level Security</li>
                          <li>No Broadcasts</li>
                          <li>No Document Restore</li>
                          <li>Basic reports</li>
                          <li>12 Hour Free System Setup</li>

                          <li>No Feed</li>
                        </ul>
                        <div className='action'>
                          <div className='btn-month monthly-price'>
                            <Link
                              to='/request-demo'
                              className='tt__btn btn-outline'
                            >
                              Get Started{' '}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-xl-3 col-lg-6 col-md-6 wow pixFadeUp animated'
                    data-wow-dealy='0.4s'
                  >
                    <div className='pricing-table'>
                      <div className='price-content-wrapper'>
                        <div className='pricing-header pricing-amount'>
                          <h2 className='price-title'>Advanced Plan</h2>

                          <div className='yearly-price'>
                            <h3 className='price'>
                              $979 <span className='period'>/year</span>
                            </h3>
                          </div>
                          <h3 className='price-subtitle'>Per Seat</h3>
                        </div>
                        <ul className='price-feture'>
                          <li>5 sites</li>
                          <li>10 User Groups</li>
                          <li>15 modules</li>
                          {/* <li>20 Portal Users </li> */}
                          <li>10 Data Capture Forms</li>
                          <li>15 Task Automations</li>
                          <li>Unlimited Document Builder</li>
                          <li>No Virtual Fields</li>
                          <li>10 Insights Per Module</li>
                          <li>10 Hook Actions Per Module</li>
                          <li>5 Header Analytics Per Module</li>
                          <li>2GB Storage Per Module</li>
                          <li>8000 Alerts Per Month</li>
                          <li>31 Day Log Retention</li>
                          <li>No Field Level Security</li>
                          <li>No Broadcasts</li>
                          <li>Document Restore </li>
                          <li>Basic reports</li>
                          <li>24 Hour Free System Setup</li>

                          <li>Tenant Feed</li>
                        </ul>
                        <div className='action'>
                          <div className='btn-annual yearly-price'>
                            <Link
                              to='/request-demo'
                              className='tt__btn btn-outline'
                            >
                              Get Started{' '}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-xl-3 col-lg-6 col-md-6 '
                    data-wow-dealy='0.4s'
                  >
                    <div className='pricing-table featured'>
                      <div className='price-content-wrapper'>
                        <div className='pricing-header pricing-amount'>
                          <h2 className='price-title'>Premium Plan</h2>
                          <div className='yearly-price'>
                            <h3 className='price'>
                              $1309<span className='period'>/year</span>
                            </h3>
                          </div>
                          <h3 className='price-subtitle'>Per Seat</h3>
                        </div>
                        <ul className='price-feture'>
                          <li>10 sites</li>
                          <li>20 User Groups</li>
                          <li>20 modules</li>
                          {/* <li>20 Portal Users </li> */}
                          <li>20 Data Capture Forms</li>
                          <li>30 Task Automations</li>
                          <li>Unlimited Document Builder</li>
                          <li>Virtual Fields</li>
                          <li>25 Insights Per Module</li>
                          <li>20 Hook Actions Per Module</li>
                          <li>Unlimited Header Analytics Per Module</li>
                          <li>5GB Storage Per Module</li>
                          <li>15000 Alerts Per Month</li>
                          <li>6 months Log Retention</li>
                          <li>Field Level Security</li>
                          <li>Broadcasts</li>
                          <li>Document Restore </li>
                          <li>Advanced Reporting</li>

                          <li>24 Hour Free System Setup</li>
                          <li>Tenant Feed</li>
                        </ul>

                        <div className='action'>
                          <div className='btn-annual yearly-price'>
                            <Link
                              to='/request-demo'
                              className='tt__btn btn-outline'
                            >
                              Get Started{' '}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-6 col-md-6'>
                    <div className='pricing-table'>
                      <div className='price-content-wrapper'>
                        <div className='pricing-header pricing-amount'>
                          <h2 className='price-title'>Enterprise Plan</h2>
                          <div className='yearly-price'>
                            <h3 className='price-subtitle'>Contact Us</h3>
                          </div>
                          {/* <h3 className='price-subtitle'>Custom</h3> */}
                        </div>
                        <ul className='price-feture'>
                          <li>Custom Domain </li>
                          <li>On Prem/Hybrid</li>
                          <li>Dedicated 24/7 premium Support</li>
                          <li>Custom Pricing</li>
                          <li>Custom Auth</li>

                          <li> Tailored customization and development </li>
                          <li>On Prem/Hybrid Infrastructure</li>
                          <li>API access</li>
                          <li>Custom Pricing</li>
                        </ul>

                        <div className='action'>
                          <div className='btn-annual yearly-price'>
                            <Link
                              to='/request-demo'
                              className='tt__btn btn-outline'
                            >
                              Get Started{' '}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceOne;
