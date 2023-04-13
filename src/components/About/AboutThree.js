import React from "react";

const AboutThree = () => {
  return (
    <React.Fragment>
      <section className="about-doctor">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="tt-parallax__image tt-parallax__image--eight">
                <div className="parallax-image">
                  <div
                    className="image-one wow ttfadeInUp animated"
                    data-wow-dealy="0.5s"
                  >
                    <img src="media/image-content/dts1.png" alt="Shape" />
                  </div>

                  <div className="image-two">
                    <img
                      src="media/image-content/dts2.png"
                      className="wow fadeIn"
                      data-parallax='{"x": -50}'
                      alt="Shape"
                    />
                  </div>

                  <div className="image-three">
                    <img
                      src="media/image-content/dts3.png"
                      className="wow fadeIn"
                      data-parallax='{"y": -50}'
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="about-science-content">
                <div className="section-heading">
                  <h2
                    className="section-title wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Smart Scheduling System
                  </h2>
                  {/* <p className="lead">
                    Looking for a solution to a confusing
                    <br />
                    Analysis problem.
                  </p> */}

                  <p className="description">
                    With our advanced job scheduler you can easily schedule
                    events for anytime. With our advanced module system, you
                    schedule the creation of any resource for later.
                  </p>
                </div>

                <ul
                  className="tt-list style-four wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <li className="list-item">
                    <span className="list-text">Work Orders</span>
                  </li>

                  <li className="list-item">
                    <span className="list-text">Reminders/Alerts</span>
                  </li>
                  <li className="list-item">
                    <span className="list-text">Reports and Audits</span>
                  </li>

                  <li className="list-item">
                    <span className="list-text">Purchase Orders</span>
                  </li>

                  <li className="list-item">
                    <span className="list-text">Or any custom module</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-220">
            <div className="col-lg-4 tt-order-2">
              <div className="about-science-content">
                <div className="section-heading">
                  <h2
                    className="section-title wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Fully customizable
                    <br />
                  </h2>

                  <p className="description">
                    Add custom fields to your resources and choose from our many
                    supported field types. Organizations can also asset types
                    which means any industry specific assets are supported
                  </p>
                </div>

                <ul className="list-with-icon">
                  <li>
                    <div className="list-icon">
                      <img src="media/feature/list-icon1.png" alt="list icon" />
                    </div>

                    <h6 className="list-title">20 different field types</h6>
                  </li>

                  <li>
                    <div className="list-icon color-two">
                      <img src="media/feature/list-icon2.png" alt="list icon" />
                    </div>

                    <h6 className="list-title">Apply custom validations</h6>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="tt-parallax__image tt-parallax__image--nine">
                <div className="parallax-image">
                  <div
                    className="image-one wow ttfadeInUp animated"
                    data-wow-dealy="0.5s"
                  >
                    <img src="media/image-content/dts4.png" alt="Shape" />
                  </div>

                  <div className="image-two">
                    <img
                      src="media/image-content/dts5.png"
                      className="wow fadeIn"
                      data-parallax='{"x": -50}'
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutThree;
