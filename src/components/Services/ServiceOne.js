import React, { Component } from 'react';

class ServiceOne extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='service-list-area'>
          <div className='container'>
            <div className='service-list-wrap'>
              <div className='row'>
                <div className='col-md-5'>
                  <div className='section-heading style-one'>
                    <h2
                      className='section-title wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      Integrate everything
                      <br />
                      {/* for your metered fields */}
                    </h2>
                    <p
                      className='description wow fadeInUp'
                      data-wow-delay='0.6s'
                    >
                      Our Data Engine offers seamless integration capabilities,
                      allowing you to connect and consolidate data from a
                      variety of sources. Whether it's databases, APIs, cloud
                      storage, or file formats, our integration feature ensures
                      a smooth and efficient data integration process.
                    </p>

                    <a
                      href='about.html'
                      className='tt__btn btn-round wow fadeInUp'
                      data-wow-delay='0.7s'
                    >
                      Read More<i className='feather-arrow-right'></i>
                    </a>
                  </div>
                </div>

                <div className='col-md-7'>
                  <div
                    className='service-list-image text-right wow fadeInUp'
                    data-wow-delay='0.5s'
                  >
                    <img src='media/tabs/ff.png' alt='service' />
                  </div>
                </div>
              </div>

              <ul className='tt-list style-two inline-flex'>
                <li
                  className='list_item style_disk wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <span className='desk'></span>
                  <div className='list-content'>
                    <h3 className='list-text'>
                      Data Transformation and Mapping
                    </h3>
                    <p>
                      Transform and map data from different sources to a unified
                      format within the Data Engine. Our integration feature
                      includes powerful data transformation capabilities,
                      enabling you to cleanse, normalize, and enrich your data
                      as needed.
                    </p>
                  </div>
                </li>
                <li
                  className='list_item style_disk wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <span className='desk'></span>
                  <div className='list-content'>
                    <h3 className='list-text'>API Connectivity</h3>
                    <p>
                      Connect and integrate with external systems and services
                      using APIs. Our Data Engine supports a wide range of APIs,
                      allowing you to easily exchange data with third-party
                      applications, platforms, and services.
                    </p>
                  </div>
                </li>
                <li
                  className='list_item style_disk wow fadeInUp'
                  data-wow-delay='1.1s'
                >
                  <span className='desk'></span>
                  <div className='list-content'>
                    <h3 className='list-text'>Pre-built & Custom Connectors</h3>
                    <p>
                      Leverage our extensive library of pre-built connectors to
                      popular systems, databases, and applications. Our
                      integration feature includes ready-to-use connectors that
                      simplify and accelerate the integration process, saving
                      you time and effort.
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
