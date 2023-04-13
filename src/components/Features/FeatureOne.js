import React, { Component } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

class FeatureOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="service">
          <div className="container">
            <SectionTitle
              // firstTitle="Baboon"
              lastTitle="Feature overview"
              description="
              What are you looking for?"
              classOption="text-center"
            />
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div
                  className="tt-icon-box style-one wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="icon-container">
                    <img src="media/feature/profile.svg" alt="" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <a href="service.html">Asset Management</a>
                    </h4>

                    <p className="description">
                      – Increase asset uptime with more accurate alerts and
                      anomaly detection on your assets and their current health.
                      Also track asset lice cycles
                      {/* <br /> led bender chinwag pardon. */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 offset-md-1">
                <div
                  className="tt-icon-box style-one wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="icon-container">
                    <img src="media/feature/copy.svg" alt="" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <a href="service.html">Work Order Management</a>
                    </h4>

                    <p className="description">
                      -Ensure production downtime with our real-time and
                      efficient system which has access to all the system and
                      custom resources
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 offset-md-1">
                <div
                  className="tt-icon-box style-one wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <div className="icon-container">
                    <img src="media/feature/bulb.svg" alt="" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <a href="service.html">Custom Fields & Modules</a>
                    </h4>

                    <p className="description">
                      Customize your experience for your use-case in accordance
                      to your business language. We can never entirely speak
                      your language hence we've added custom modules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div
                  className="tt-icon-box style-one wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <div className="icon-container">
                    <img src="media/feature/analytics.svg" alt="" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <a href="service.html">Schedule Management</a>
                    </h4>

                    <p className="description">
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 offset-md-1">
                <div
                  className="tt-icon-box style-one wow fadeInUp"
                  data-wow-delay="1.3s"
                >
                  <div className="icon-container">
                    <img src="media/feature/hand_shake.svg" alt="" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <a href="service.html">Push Notifications</a>
                    </h4>

                    <p className="description">
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 offset-md-1">
                <div
                  className="tt-icon-box style-one wow fadeInUp"
                  data-wow-delay="1.5s"
                >
                  <div className="icon-container">
                    <img src="media/feature/folder.svg" alt="" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <a href="service.html">Mobile Capability</a>
                    </h4>

                    <p className="description">
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div
                  className="tt-icon-box style-one wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="icon-container">
                    <img src="media/feature/profile.svg" alt="" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <a href="service.html">Procedure/Checklist library</a>
                    </h4>

                    <p className="description">
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 offset-md-1">
                <div
                  className="tt-icon-box style-one wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <div className="icon-container">
                    <img src="media/feature/bulb.svg" alt="" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <a href="service.html">Advanced Reporting & analytics</a>
                    </h4>

                    <p className="description">
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 offset-md-1">
                <div
                  className="tt-icon-box style-one wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="icon-container">
                    <img src="media/feature/copy.svg" alt="" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <a href="service.html">Event Triggers</a>
                    </h4>

                    <p className="description">
                      I only a quid me old mucker Bambo
                      <br /> led bender chinwag pardon.
                    </p>
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

export default FeatureOne;
