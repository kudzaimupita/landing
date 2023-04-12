import React, { Component } from "react";

class ServiceOne extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="service-list-area">
          <div className="container">
            <div className="service-list-wrap">
              <div className="row">
                <div className="col-md-5">
                  <div className="section-heading style-one">
                    <h2
                      className="section-title wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      Set up triggers
                      <br />
                      for your metered fields
                    </h2>
                    <p
                      className="description wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      Configure pre-defined values, messages and their
                      associated operators to trigger alerts to inform/warn the
                      stakeholders if certain data doesn't meet the defined
                      threshold. Dates, Numbers and Text inputs supported
                    </p>

                    <a
                      href="about.html"
                      className="tt__btn btn-round wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      Read More<i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-md-7">
                  <div
                    className="service-list-image text-right wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <img src="media/tabs/ff.png" alt="service" />
                  </div>
                </div>
              </div>

              <ul className="tt-list style-two inline-flex">
                <li
                  className="list_item style_disk wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <span className="desk"></span>
                  <div className="list-content">
                    <h3 className="list-text">Values within range</h3>
                    <p>
                      This checks if the values are within pre-defined
                      thresholds, if that's met then an alert with a
                      pre-configured message is dispatched.
                    </p>
                  </div>
                </li>
                <li
                  className="list_item style_disk wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <span className="desk"></span>
                  <div className="list-content">
                    <h3 className="list-text">Equality</h3>
                    <p>
                      This checks if the values are equal to pre-defined
                      thresholds, if that's met then an alert with a
                      pre-configured message is dispatched.
                    </p>
                  </div>
                </li>
                <li
                  className="list_item style_disk wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <span className="desk"></span>
                  <div className="list-content">
                    <h3 className="list-text">More...</h3>
                    <p>
                      We support other comparison operators to better suite your
                      business needs when it comes to triggers
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ServiceOne;
