import React, { Component } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
class ServiceThree extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="service-three area">
          <div className="container">
            <SectionTitle
              // firstTitle="Baboon"
              lastTitle="A Solution Built to Scale"
              description="So I said knees up cuppa such a fibber jeffrey a bit of how's
                your."
            />
            <div className="row">
              <div className="col-md-4">
                <div
                  className="tt-icon-box style-three wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="icon-container">
                    <img
                      src="media/feature/trending-up.svg"
                      alt="Direct Access"
                    />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <Link to="/service">Reduce downtime and costs</Link>
                    </h4>

                    <p className="description">
                      Naff buggered I Eaton grub cheers show off show off pick
                      your nose and blow off give us a bell.
                    </p>
                    <Link to="/service" className="tt-more-link">
                      Read More<i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="tt-icon-box style-three wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <div className="icon-container color__two">
                    <img src="media/feature/bell.svg" alt="Push Notification" />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <Link to="service">
                        Optimize maintenance work processes
                      </Link>
                    </h4>

                    <p className="description">
                      Naff buggered I Eaton grub cheers show off show off pick
                      your nose and blow off give us a bell.
                    </p>

                    <Link to="/service" className="tt-more-link">
                      Read More<i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="tt-icon-box style-three wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <div className="icon-container color__three">
                    <img
                      src="media/feature/tablet.svg"
                      alt="Mobile Capability"
                    />
                  </div>

                  <div className="box-content">
                    <h4 className="box-title">
                      <Link to="service">Extend asset lifecycles</Link>
                    </h4>

                    <p className="description">
                      Naff buggered I Eaton grub cheers show off show off pick
                      your nose and blow off give us a bell.
                    </p>

                    <Link to="/service" className="tt-more-link">
                      Read More<i className="feather-arrow-right"></i>
                    </Link>
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

export default ServiceThree;
