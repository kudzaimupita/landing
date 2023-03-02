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
                      Choose Us
                      <br />
                      lightweight and fast.
                    </h2>
                    <p
                      className="description wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      Tomfoolery do one spiffing arse over tit amongst <br />
                      gosh, golly gosh wireless.
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
                    <img src="media/feature/service-list.png" alt="service" />
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
                    <h3 className="list-text">Top Audiences</h3>
                    <p>
                      I don't want no agro car boot what plonker david vabond.
                    </p>
                  </div>
                </li>
                <li
                  className="list_item style_disk wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <span className="desk"></span>
                  <div className="list-content">
                    <h3 className="list-text">Top Audiences</h3>
                    <p>
                      I don't want no agro car boot what plonker david vabond.
                    </p>
                  </div>
                </li>
                <li
                  className="list_item style_disk wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <span className="desk"></span>
                  <div className="list-content">
                    <h3 className="list-text">Top Audiences</h3>
                    <p>
                      I don't want no agro car boot what plonker david vabond.
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
