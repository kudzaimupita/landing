import React, { Component } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

class TabTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="feature-tabs-two">
          <div className="container">
            <SectionTitle
              firstTitle="Work together with"
              lastTitle="less friction"
              description="So I said knees up cuppa such a fibber jeffrey a bit of how's
                  your."
            />
            <div className="tt-feature-tab wow fadeInUp" data-wow-delay="0.7s">
              <div className="row no-gutters align-items-center">
                <div className="col-lg-6">
                  <div
                    className="tab-content tt-tabs-content feature-tab"
                    id="v-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active tt-tab-item feature-tab__item"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="ultraland-tabs-contents feature-tab__content-wrap">
                        <div className="feature-tab__image">
                          <img
                            src="media/tabs/tab_one.png"
                            alt="Scale Your Team Quickly "
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade tt-tab-item feature-tab__item "
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="ultraland-tabs-contents feature-tab__content-wrap">
                        <div className="feature-tab__image">
                          <img
                            src="media/tabs/tab_two.png"
                            alt="Scale Your Team Quickly "
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade tt-tab-item feature-tab__item "
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div className="ultraland-tabs-contents feature-tab__content-wrap">
                        <div className="feature-tab__image">
                          <img
                            src="media/tabs/tab_one.png"
                            alt="Scale Your Team Quickly "
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade tt-tab-item feature-tab__item"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="ultraland-tabs-contents feature-tab__content-wrap">
                        <div className="feature-tab__image">
                          <img
                            src="media/tabs/tab_one.png"
                            alt="Scale Your Team Quickly "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="nav flex-column nav-pills tt-tabs-navigation feature-tab-nav"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <div className="feature_progress"></div>
                      <h3 className="feature-tab-nav__title">
                        No Spreadsheets
                      </h3>
                      <p className="feature-tab-nav__description">
                        I only a quid me old mucker bambo zled bender chinwag
                        pardon.
                      </p>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <div className="feature_progress"></div>
                      <h3 className="feature-tab-nav__title">
                        Ease Audit Trail
                      </h3>
                      <p className="feature-tab-nav__description">
                        I only a quid me old mucker bambo zled bender chinwag
                        pardon.
                      </p>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <div className="feature_progress"></div>
                      <h3 className="feature-tab-nav__title">
                        No Unauthorized Changes
                      </h3>

                      <p className="feature-tab-nav__description">
                        I only a quid me old mucker bambo zled bender chinwag
                        pardon.
                      </p>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <div className="feature_progress"></div>
                      <h3 className="feature-tab-nav__title">
                        Centralised System
                      </h3>

                      <p className="feature-tab-nav__description">
                        I only a quid me old mucker bambo zled bender chinwag
                        pardon.
                      </p>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <div className="feature_progress"></div>
                      <h3 className="feature-tab-nav__title">
                        Advanced Reporting
                      </h3>

                      <p className="feature-tab-nav__description">
                        I only a quid me old mucker bambo zled bender chinwag
                        pardon.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default TabTwo;
