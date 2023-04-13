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
                      your language hence we've added custom modules and fields.
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
                      Whether creation of a weekly report, daily inspection or
                      monthly work order, with our advanced scheduler you can
                      schedule for the creation any module item or reminder.
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
                      <a href="service.html">Fine Grained Permissions</a>
                    </h4>

                    <p className="description">
                      Add system permissions to individuals or user groups to
                      minimize access to sensitive data.{" "}
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
                      Get notified if any event is triggered. Users get
                      unlimited notifications. Email and in-app alerts are
                      supported only.
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
                      Store any procedures, forms and checklist in your own
                      central repository. These can can be assigned to modules
                      like work orders or inspections
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
                      Using the power of aggregation, you have the power build
                      complex aggregation pipeline to get the best report data
                      for your business.
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
                      Having the ability for users to add modules means nothing
                      if we can't define behaviors based on criteria. Hence we
                      have actions, triggers and events which is basically
                      configuring the system to trigger actions based on your
                      definition.
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
