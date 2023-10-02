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
                      Tailor-Made Solutions for Your Unique Needs
                      <br />
                      {/* for your metered fields */}
                    </h2>
                    <p
                      className='description wow fadeInUp'
                      style={{ fontSize: '14px', lineHeight: '18px' }}
                      data-wow-delay='0.6s'
                    >
                      In today's dynamic business landscape, flexibility is the
                      key to success. Our ERP software empowers you to customize
                      and adapt, ensuring that your business operates at its
                      best, no matter the industry or size.
                    </p>

                    <a
                      href='/request-demo'
                      className='tt__btn btn-round wow fadeInUp'
                      data-wow-delay='0.7s'
                    >
                      Get Started<i className='feather-arrow-right'></i>
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
                    <h3 className='list-text'>Module Customization</h3>
                    <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                      Customize your ERP by selecting only the modules that
                      align with your business needs. Scale up or down as your
                      requirements change, avoiding unnecessary costs.
                    </p>
                  </div>
                </li>
                <li
                  className='list_item style_disk wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <span className='desk'></span>
                  <div className='list-content'>
                    <h3 className='list-text'>Configurable Workflows</h3>
                    <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                      Craft workflows that match your specific business
                      processes, making operations more efficient. Reduce manual
                      work, improve accuracy, and enhance productivity.
                    </p>
                  </div>
                </li>
                <li
                  className='list_item style_disk wow fadeInUp'
                  data-wow-delay='1.1s'
                >
                  <span className='desk'></span>
                  <div className='list-content'>
                    <h3 className='list-text'>Scalability</h3>
                    <p style={{ fontSize: '14px', lineHeight: '18px' }}>
                      Grow your business confidently, knowing your ERP scales
                      seamlessly. No disruptions, no compromises - just the
                      flexibility you need to expand
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
