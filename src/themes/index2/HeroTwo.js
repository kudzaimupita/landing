import React from "react";
import { Link } from "react-router-dom";

const HeroTwo = () => {
  return (
    <>
      <section className="banner banner--two ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 tt-order-lg-2">
              <div className="banner__content">
                {/* <h3 className="banner__subtitle wow fadeInUp">
                  Welcome To Baboon Pro
                </h3>
                <h4
                  className="banner__title wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Next Generation Asset & Work Management
                </h4> */}

                <h4
                  className="banner__title wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  {/* <span>Next Generation </span> */}
                  Pro® Application Suite
                </h4>
                <p
                  className="wow fadeInUp banner__description"
                  data-wow-delay=".5s"
                >
                  Scale with the right tools Security. Compliance. Manage your
                  organisations asset life cycle. Fine grained operator
                  security. Aquisition to Disposal. Customization.
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
                      Monitor remote
                      <br />
                      assets
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
                <h3 className="banner__subtitle wow fadeInUp">
                  6 months free for early adopters
                </h3>
                <div className="banner__btns">
                  <a
                    href="https://main.d2rjth5qw0o0qm.amplifyapp.com/sign-up"
                    className="tt__btn btn-round btn-outline btn-light banner-btn wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    Start Free Trial- Beta
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner__feature-image wow fadeIn">
                <img
                  className="wow fadeInUp"
                  src="media/banner/banner-two/banner2.png"
                  alt="banner"
                />
                <svg
                  className="banner__shape"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="100%"
                  height="100%"
                  viewBox="0 0 757 535"
                >
                  <image
                    id="down_shape"
                    data-name="down / shape"
                    width="757"
                    height="535"
                    xlinkHref="data:img/png;base64,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"
                  ></image>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <ul className="animate-element banner-two-element parallax-element">
          <li className="layer" data-depth="0.02">
            <div className="inner">
              <img src="media/banner/banner-two/element1.png" alt="element" />
            </div>
          </li>
          <li className="layer" data-depth="0.03">
            <div className="inner">
              <img src="media/banner/banner-two/element2.png" alt="element" />
            </div>
          </li>
          <li className="layer" data-depth="0.01">
            <div className="inner">
              <img src="media/banner/banner-two/element3.png" alt="element" />
            </div>
          </li>
          <li className="layer" data-depth="0.02">
            <div className="inner">
              <img src="media/banner/banner-two/element4.png" alt="element" />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HeroTwo;
