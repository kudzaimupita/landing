import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

const PriceOne = ({ hasSectionTitle }) => {
  return (
    <>
      <section className="pricing">
        <div className="container">
          {hasSectionTitle ? (
            <SectionTitle
              firstTitle="Choose the offer"
              lastTitle="That suits you"
              description="So I said knees up cuppa such a fibber jeffrey a bit of hows
                your"
              classOption="text-center"
            />
          ) : (
            ""
          )}

          <div className="priceing-tab">
            <nav className="mb-5">
              <div
                className="nav nav-pills justify-content-center pricing-tab-list"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Monthly
                </a>
                <a
                  disabled
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Annually
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="row advanced-pricing-table">
                  <div
                    className="col-xl-3 col-lg-6 col-md-6"
                    data-wow-dealy="0.4s"
                  >
                    <div className="pricing-table" id="pric-886-0">
                      <div className="price-content-wrapper">
                        <div className="pricing-header pricing-amount">
                          <h2 className="price-title">Basic</h2>
                          <div className="monthly-price">
                            <h3 className="price">
                              $89<span className="period">/month</span>
                            </h3>
                          </div>
                          <h3 className="price-subtitle">
                            14-day trial subscription
                          </h3>
                        </div>
                        <ul className="price-feture">
                          <li>1 site</li>
                          <li>2 teams</li>
                          <li>2 modules</li>
                          <li>5 users </li>
                          <li>10 asset types</li>
                          <li>10 schedule jobs</li>
                          <li>80 locations</li>

                          <li>200 Assets</li>
                          <li>Unlimited Work Orders</li>
                          <li>Unlimited Documents</li>
                          <li>Basic reports</li>
                          <li>5 Checklists/Forms/Procedures</li>
                        </ul>
                        <div className="action">
                          <div className="btn-month monthly-price">
                            <Link to="/contact" className="tt__btn btn-outline">
                              Subscription{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow pixFadeUp animated"
                    data-wow-dealy="0.4s"
                  >
                    <div className="pricing-table">
                      <div className="price-content-wrapper">
                        <div className="pricing-header pricing-amount">
                          <h2 className="price-title">Advanced Plan</h2>
                          <div className="monthly-price">
                            <h3 className="price">
                              $199<span className="period">/month</span>
                            </h3>
                          </div>
                          <h3 className="price-subtitle">14-day free trial</h3>
                        </div>
                        <ul className="price-feture">
                          <li>5 sites</li>
                          <li>50 teams</li>
                          <li>10 modules</li>
                          <li> users </li>
                          <li>10 asset types</li>
                          <li>10 schedule jobs</li>
                          <li>80 locations</li>

                          <li>200 Assets</li>
                          <li>Unlimited Work Orders</li>
                          <li>Unlimited Documents</li>
                          <li>Basic reports</li>
                          <li>5 Checklists/Forms/Procedures</li>
                        </ul>
                        <div className="action">
                          <div className="btn-month monthly-price">
                            <Link to="/contact" className="tt__btn btn-outline">
                              Get Started{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow pixFadeUp animated"
                    data-wow-dealy="0.4s"
                  >
                    <div className="pricing-table">
                      <div className="price-content-wrapper">
                        <div className="pricing-header pricing-amount">
                          <h2 className="price-title">Premium Plan</h2>
                          <div className="monthly-price">
                            <h3 className="price">
                              $499<span className="period">/month</span>
                            </h3>
                          </div>
                          <h3 className="price-subtitle">
                            Simple email management
                          </h3>
                        </div>
                        <ul className="price-feture">
                          <li>10 sites</li>
                          <li>50 teams</li>
                          <li>10 modules</li>
                          <li>100 users </li>
                          <li>100 asset types</li>
                          <li>Unlimited scheduler</li>
                          <li>Unlimited locations</li>
                          <li>10000 Assets</li>
                          <li>Unlimited Work Orders</li>
                          <li>Unlimited Documents</li>
                          <li>Advanced reports</li>
                        </ul>

                        <div className="action">
                          <div className="btn-month monthly-price">
                            <Link to="/contact" className="tt__btn ">
                              Buy Now{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="pricing-table">
                      <div className="price-content-wrapper">
                        <div className="pricing-header pricing-amount">
                          <h2 className="price-title">Enterprise Plan</h2>

                          {/* <div className="monthly-price">
                            <h3 className="price">
                              $499<span className="period">/month</span>
                            </h3>
                          </div> */}

                          <h3 className="price-subtitle">Contact Us</h3>
                        </div>
                        <ul className="price-feture">
                          <li>Custom Domain </li>
                          <li> Weekly Sentiment</li>
                          <li> Data History</li>
                          <li> Increased Number of</li>
                          <li> Users Unlimited</li>
                          <li> Projects Downgrade</li>
                        </ul>

                        <div className="action">
                          <div className="btn-month monthly-price">
                            <Link to="/contact" className="tt__btn btn-outline">
                              Buy Now{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="row advanced-pricing-table">
                  <div
                    className="col-xl-3 col-lg-6 col-md-6"
                    data-wow-dealy="0.4s"
                  >
                    <div className="pricing-table">
                      <div className="price-content-wrapper">
                        <div className="pricing-header pricing-amount">
                          <h2 className="price-title">Free Plan</h2>
                          <div className="yearly-price">
                            <h3 className="price">
                              $29 <span className="period">/month</span>
                            </h3>
                          </div>
                          <h3 className="price-subtitle">
                            14-day trial subscription
                          </h3>
                        </div>
                        <ul className="price-feture">
                          <li>Product Training </li>
                          <li>Advanced Analytics</li>
                          <li>Weekly Sentiment</li>
                          <li>White label</li>
                          <li>Users Unlimited</li>
                          <li>Downgrade</li>
                        </ul>
                        <div className="action">
                          <div className="btn-annual yearly-price">
                            <Link to="/contact" className="tt__btn btn-outline">
                              Subscription{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow pixFadeUp animated"
                    data-wow-dealy="0.4s"
                  >
                    <div className="pricing-table">
                      <div className="price-content-wrapper">
                        <div className="pricing-header pricing-amount">
                          <h2 className="price-title">Basic Plan</h2>

                          <div className="yearly-price">
                            <h3 className="price">
                              $56 <span className="period">/month</span>
                            </h3>
                          </div>
                          <h3 className="price-subtitle">7-day free trial</h3>
                        </div>
                        <ul className="price-feture">
                          <li>Basic reports</li>
                          <li> Weekly Sentiment</li>
                          <li> Data History</li>
                          <li> Increased Number of</li>
                          <li> Users Unlimited</li>
                          <li> Basic Reports</li>
                        </ul>
                        <div className="action">
                          <div className="btn-annual yearly-price">
                            <Link to="/contact" className="tt__btn btn-outline">
                              Get Started{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 "
                    data-wow-dealy="0.4s"
                  >
                    <div className="pricing-table featured">
                      <div className="price-content-wrapper">
                        <div className="pricing-header pricing-amount">
                          <h2 className="price-title">Advanced Plan</h2>
                          <div className="yearly-price">
                            <h3 className="price">
                              $60<span className="period">/month</span>
                            </h3>
                          </div>
                          <h3 className="price-subtitle">
                            Simple email management
                          </h3>
                        </div>
                        <ul className="price-feture">
                          <li>Collaboration Tools</li>
                          <li> Weekly Sentiment</li>
                          <li> Data History</li>
                          <li> Increased Number of</li>
                          <li> Users Unlimited</li>
                          <li> Projects Downgrade</li>
                        </ul>

                        <div className="action">
                          <div className="btn-annual yearly-price">
                            <Link to="/contact" className="tt__btn ">
                              Buy Now{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="pricing-table">
                      <div className="price-content-wrapper">
                        <div className="pricing-header pricing-amount">
                          <h2 className="price-title">Premium Plan</h2>
                          <div className="yearly-price">
                            <h3 className="price">
                              $130 <span className="period">/month</span>
                            </h3>
                          </div>
                          <h3 className="price-subtitle">
                            Ticketing system for teams
                          </h3>
                        </div>
                        <ul className="price-feture">
                          <li>Custom Domain </li>
                          <li> Weekly Sentiment</li>
                          <li> Data History</li>
                          <li> Increased Number of</li>
                          <li> Users Unlimited</li>
                          <li> Projects Downgrade</li>
                        </ul>

                        <div className="action">
                          <div className="btn-annual yearly-price">
                            <Link to="/contact" className="tt__btn btn-outline">
                              Buy Now{" "}
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
