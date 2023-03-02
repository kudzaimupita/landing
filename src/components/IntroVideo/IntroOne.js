import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const IntroOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <section className="intro-video">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="video-content">
                <div className="section-heading style-one">
                  <h2
                    className="section-title wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Find out what Baboon
                    <br />
                    Can do for your organization
                  </h2>

                  <p className="description wow fadeInUp" data-wow-delay="0.5s">
                    Say blatant bog is don't get shirty with me bleeder.
                  </p>

                  <Link
                    to="/about"
                    className="tt__btn btn-light btn-round wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    Try for free <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="play-button text-right">
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="9No-FiEInLA"
                  onClose={() => setOpen(false)}
                />
                <a
                  href="#/"
                  className="popup-play-btn"
                  onClick={() => setOpen(true)}
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default IntroOne;
