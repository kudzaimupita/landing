import React from "react";
import { Link } from "react-router-dom";
const HeroTen = () => {
  return (
    <>
      <section className="banner banner--ten d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 tt-order-lg-2">
              <div className="banner__content">
                <h2
                  className="banner__title wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <span>Next Generation</span>
                  Asset Management
                </h2>

                <p
                  className="wow fadeInUp banner__description"
                  data-wow-delay=".5s"
                >
                  Enterprise level cloud asset management
                </p>

                <div
                  className="banner__feature-wrap wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="banner__feature-item">
                    <div className="banner__feature-icon">
                      <img src="media/banner/banner-ten/pc.png" alt="pc" />
                    </div>

                    <h4 className="banner__feature-title">
                      Cloud
                      <br />
                      Explore
                    </h4>
                  </div>

                  <div className="banner__feature-item">
                    <div className="banner__feature-icon">
                      <img src="media/banner/banner-ten/laptop.png" alt="pc" />
                    </div>

                    <h4 className="banner__feature-title">
                      IOS
                      <br />
                      Explore
                    </h4>
                  </div>

                  <div className="banner__feature-item">
                    <div className="banner__feature-icon">
                      <img
                        src="media/banner/banner-ten/smartphone.png"
                        alt="pc"
                      />
                    </div>

                    <h4 className="banner__feature-title">
                      Android
                      <br />
                      Explore
                    </h4>
                  </div>
                </div>

                <ul
                  className="banner__feature wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <li>
                    <i className="ei ei-icon_check"></i>Monthly subscription
                  </li>
                  <li>
                    <i className="ei ei-icon_check"></i>Free to get started
                  </li>
                </ul>

                <div className="banner__btns">
                  <Link
                    to="/contact"
                    className="tt__btn btn-round banner-btn wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner__feature-image wow fadeIn">
                <img
                  className="wow fadeInUp"
                  src="media/banner/banner-ten/banner-ten.png"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTen;
