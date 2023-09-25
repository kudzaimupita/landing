import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

class FeatureOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='service'>
          <div className='container'>
            <SectionTitle
              // firstTitle="Servly"
              lastTitle='Explore the Versatility of Servly'
              description='
              Unleash Efficiency, Flexibility, and Growth with Our Customizable Features'
              classOption='text-center'
            />
            <div className='row'>
              <div className='col-md-3 col-sm-6'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/profile.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Customizable Dashboards</a>
                    </h4>

                    <p className='description'>
                      Create personalized dashboards that display the data and
                      metrics most relevant to your role and responsibilities.
                      Drag-and-drop widgets, charts, and reports to design a
                      dashboard that helps you monitor key performance
                      indicators (KPIs) effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/copy.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'> Access Control</a>
                    </h4>

                    <p className='description'>
                      Define user roles and permissions to control who can
                      access and modify data within the ERP system. Customize
                      access levels to ensure data security and compliance with
                      your organization's hierarchy.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/bulb.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Workflow Automation</a>
                    </h4>

                    <p className='description'>
                      Automate repetitive tasks and processes by designing
                      custom workflows. Define triggers, actions, and conditions
                      to streamline operations and reduce manual effort.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='1.1s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/analytics.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Custom Reports and Analytics</a>
                    </h4>

                    <p className='description'>
                      Build custom reports and analytics dashboards to gain
                      insights specific to your business. Select data fields,
                      set filters, and choose visualization options that suit
                      your reporting needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='1.5s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/folder.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Custom Fields and Data Models</a>
                    </h4>

                    <p className='description'>
                      Extend the ERP system's data structure by adding custom
                      fields and data models. Capture unique data points, track
                      specialized information, and tailor data entry forms to
                      match your requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='1.3s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/hand_shake.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>
                        Custom Templates and Document Management
                      </a>
                    </h4>

                    <p className='description'>
                      Design custom document templates for invoices, purchase
                      orders, contracts, and more. Maintain a structured
                      document repository and automate document generation based
                      on predefined templates.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/profile.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Custom Integrations</a>
                    </h4>

                    <p className='description'>
                      Integrate the ERP system with other software applications,
                      third-party services, or APIs that are specific to your
                      business processes. Create seamless data flows and
                      communication channels between systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/bulb.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Data Migration and Import Tools</a>
                    </h4>

                    <p className='description'>
                      Create custom data migration scripts and import tools to
                      transfer historical data from legacy systems into the ERP
                      database. Ensure a seamless transition when implementing
                      the ERP system.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 offset-md-1'>
                <div
                  className='tt-icon-box style-one wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='icon-container'>
                    <img src='media/feature/copy.svg' alt='' />
                  </div>

                  <div className='box-content'>
                    <h4 className='box-title'>
                      <a href='service.html'>Custom Alerts and Notifications</a>
                    </h4>

                    <p className='description'>
                      Description: Set up custom alerts and notifications to
                      keep users informed about critical events and actions
                      within the ERP system. Configure notifications based on
                      your unique business processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeatureOne;
