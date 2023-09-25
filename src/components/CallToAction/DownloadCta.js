import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class DownloadCta extends Component {
  render() {
    return (
      <div>
        <section className='download-area'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <div className='section-heading style-one'>
                  <h2
                    className='section-title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    Interested
                    <br />
                    Get Started Now
                  </h2>

                  {/* <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                    Loo spiffing it's your round dropped a clanger haggle
                    <br /> say faff about argy bargy.
                  </p> */}
                </div>
              </div>

              <div className='col-md-6'>
                <div className='button-wrapper'>
                  <Link
                    className='tt-app-btn btn-fill wow fadeInUp btn-round btn-active'
                    to='#'
                    data-wow-delay='0.3s'
                  >
                    <span className='btn-icon'>
                      <i aria-hidden='true' className='fab fa-apple'></i>
                    </span>

                    <span className='btn-lebels'>Request Demo</span>
                  </Link>

                  <Link
                    className='tt-app-btn btn-fill wow fadeInUp btn-round btn-active'
                    to='#'
                    data-wow-delay='0.3s'
                  >
                    <span className='btn-icon'>
                      <i aria-hidden='true' className='fab fa-google-play'></i>
                    </span>

                    <span className='btn-lebels'>View Pricing</span>
                  </Link>

                  <Link
                    className='tt-app-btn btn-fill wow fadeInUp btn-round btn-active'
                    to='#'
                    data-wow-delay='0.3s'
                  >
                    <span className='btn-icon'>
                      <i aria-hidden='true' className='fab fa-windows'></i>
                    </span>

                    <span className='btn-lebels'>Explore Features</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default DownloadCta;
