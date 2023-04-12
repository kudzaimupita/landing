import React from "react";
import { Link } from "react-router-dom";

const ImageContentThree = () => {
  return (
    <>
      <>
        <section className="parallax-image-content-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="tt-parallax__image tt-parallax__image--three">
                  <div className="shape-image">
                    <div
                      className="shape-wrapper wow ttzoomIn"
                      data-wow-dealy="0.3s"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 535 528"
                      >
                        <path
                          fillRule="evenodd"
                          opacity="0.2"
                          fill="rgb(247, 156, 11)"
                          d="M368.000,54.000 C518.675,-115.616 586.506,158.439 490.000,279.000 C390.552,403.236 499.264,614.000 303.000,490.000 C197.947,423.627 -152.355,79.974 76.000,109.000 C303.691,137.941 328.895,98.020 368.000,54.000 Z"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="parallax-image">
                    <div
                      className="image-one wow ttfadeInUp"
                      data-wow-dealy="0.5s"
                    >
                      <img
                        src="media/image-content/mobile_screen.png"
                        alt="Shape"
                      />
                    </div>

                    <div className="image-two">
                      <img
                        src="media/image-content/dash_element2.png"
                        className="wow fadeIn"
                        data-parallax='{"y": -50}'
                        alt="Shape"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="parallax-image-content">
                  <div className="section-heading style-one">
                    <h2
                      className="section-title wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      Security
                      <br />
                      And Compliance
                    </h2>

                    <p
                      className="description wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      Data protection and client confidence are our priorities{" "}
                      <br />
                      {/* my good sir nice one lavatory. */}
                    </p>
                  </div>

                  <div
                    className="tt-icon-box style-four wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="icon-container color__one">
                      <i className="ei ei-icon_house_alt"></i>
                    </div>

                    <div className="box-content">
                      <h4 className="box-title">
                        <a href="service.html"> ISO 27001 & POPI</a>
                      </h4>

                      {/* <p className="description">
                        Young delinquent I morish twit amongst
                        <br />A bit of how your father.
                      </p> */}
                    </div>
                  </div>

                  <div
                    className="tt-icon-box style-four wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="icon-container color__two">
                      <i className="ei ei-lightbulb_alt"></i>
                    </div>

                    <div className="box-content">
                      <h4 className="box-title">
                        <a href="service.html"> PCI DSS</a>
                      </h4>

                      {/* <p className="description">
                        Young delinquent I morish twit amongst
                        <br />A bit of how your father.
                      </p> */}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="tt__btn btn-round btn-color-two wow fadeInUp"
                    data-wow-delay="1.1s"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default ImageContentThree;
