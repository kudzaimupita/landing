import React from 'react';
import { Link } from 'react-router-dom';
const FeatureSeven = () => {
  return (
    <React.Fragment>
      <div className='service-ten-area'>
        <div className='container'>
          <div className='section-heading style-four header-light text-center'>
            <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
              Precision, Performance, Profit
              <br /> with Servly
            </h2>

            <p className='description wow fadeInUp' data-wow-delay='0.5s'>
              In the world of business, precision is the cornerstone of success.
              It encompasses the ability to operate with accuracy, attention to
              detail, and a commitment to getting things right the first time.
              In the context of Servly, precision means ensuring that every
              transaction, every piece of data, and every decision is made with
              meticulous care.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='tt-icon-box style-twelve wow fadeInUp'
                data-wow-delay='0.7s'
              >
                <div className='icon-container'>
                  <img src='media/feature/hs1.png' alt='Direct Access' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='/service'>
                      Intelligent
                      <br />
                      Automation
                    </Link>
                  </h4>

                  <p className='description'>
                    Our ERP system doesn't just handle your business processes;
                    it transforms them into efficient, self-driven workflows
                    that save you time, reduce errors, and increase
                    productivity.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div
                className='tt-icon-box style-twelve wow fadeInUp'
                data-wow-delay='0.9s'
              >
                <div className='icon-container color__two'>
                  <img src='media/feature/hs2.png' alt='Push Notification' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='service.html'>
                      Intelligent
                      <br />
                      Data Capture
                    </Link>
                  </h4>

                  <p className='description'>
                    Say goodbye to manual data entry. Our ERP system can
                    intelligently capture data from various sources, such as
                    invoices, receipts, and forms. This not only saves time but
                    also reduces data entry errors.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div
                className='tt-icon-box style-twelve wow fadeInUp'
                data-wow-delay='1.1s'
              >
                <div className='icon-container color__three'>
                  <img src='media/feature/hs3.png' alt='Mobile Capability' />
                </div>

                <div className='box-content'>
                  <h4 className='box-title'>
                    <Link to='/service'>
                      Robust
                      <br />
                      Security
                    </Link>
                  </h4>

                  <p className='description'>
                    Fortified by encryption, access controls, and vigilant
                    monitoring, Servly ensures the utmost data security. We
                    follow strict compliance standards, safeguarding your
                    business against threats."
                  </p>

                  {/* <Link to='service.' className='tt-more-link'>
                    Read More<i className='feather-arrow-right'></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeatureSeven;
