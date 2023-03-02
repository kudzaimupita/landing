import React from "react";
import { Link } from "react-router-dom";

const ImageContentFour = () => {
  return (
    <>
      <section className="parallax-image-content-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="parallax-image-content-two">
                <div className="section-heading style-one">
                  <h2
                    className="section-title wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Easy Customization
                    <br />
                    for Your Industry
                  </h2>

                  <p className="description wow fadeInUp" data-wow-delay="0.5s">
                    Events
                    <br /> tickety boo my good sir nice one lavatory mufty
                    <br />
                    cracking goal my lady wellies.
                  </p>
                </div>

                <ul className="tt-list wow fadeInUp" data-wow-delay="0.7s">
                  <li className="list-item">
                    <i className="feather-check"></i>
                    <span className="list-text">Getting Started</span>
                  </li>

                  <li className="list-item">
                    <i className="feather-check"></i>
                    <span className="list-text">Collection list</span>
                  </li>

                  <li className="list-item">
                    <i className="feather-check"></i>
                    <span className="list-text">Element Hierarchy</span>
                  </li>
                </ul>

                <Link
                  to="/company"
                  className="tt__btn btn-round wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div className="tt-parallax__image tt-parallax__image--four">
                <div className="shape-image">
                  <div
                    className="shape-wrapper wow ttzoomIn"
                    data-wow-dealy="0.3s"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="400px"
                      height="400px"
                    >
                      <path
                        // fill-rule='evenodd'
                        fill="rgb(249, 93, 163)"
                        d="M200.000,-0.000 C310.457,-0.000 400.000,89.543 400.000,200.000 C400.000,310.457 310.457,400.000 200.000,400.000 C89.543,400.000 -0.000,310.457 -0.000,200.000 C-0.000,89.543 89.543,-0.000 200.000,-0.000 Z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="parallax-image">
                  <div
                    className="image-one wow ttfadeInUp"
                    data-wow-dealy="0.5s"
                  >
                    <img src="media/feature/mobile.png" alt="Shape" />
                  </div>

                  <div className="image-two">
                    <img
                      src="media/feature/dash_element.png"
                      className="wow fadeIn"
                      data-parallax='{"y": -80}'
                      alt="Shape "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageContentFour;
