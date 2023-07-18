import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

class TabTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='feature-tabs-two'>
          <div className='container'>
            {/* <SectionTitle
              firstTitle='Data Model Customization:'
              // lastTitle='less friction'
              // description="So I said knees up cuppa such a fibber jeffrey a bit of how's
              //     your."
            /> */}
            <div className='tt-feature-tab wow fadeInUp' data-wow-delay='0.7s'>
              <div className='row no-gutters align-items-center'>
                <div className='col-lg-6'>
                  <div
                    className='tab-content tt-tabs-content feature-tab'
                    id='v-pills-tabContent'
                  >
                    <div
                      className='tab-pane fade show active tt-tab-item feature-tab__item'
                      id='v-pills-home'
                      role='tabpanel'
                      aria-labelledby='v-pills-home-tab'
                    >
                      <div className='ultraland-tabs-contents feature-tab__content-wrap'>
                        <div className='feature-tab__image'>
                          <img
                            src='https://img.freepik.com/free-vector/spreadsheets-concept-illustration_114360-736.jpg?w=900&t=st=1681242648~exp=1681243248~hmac=ed00c5e96750b11f571a193576bdf560a4d19579334ac0bb970559ecb06cf69e'
                            alt='Scale Your Team Quickly '
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade tt-tab-item feature-tab__item '
                      id='v-pills-profile'
                      role='tabpanel'
                      aria-labelledby='v-pills-profile-tab'
                    >
                      <div className='ultraland-tabs-contents feature-tab__content-wrap'>
                        <div className='feature-tab__image'>
                          <img
                            src='media/tabs/tab_two.png'
                            alt='Scale Your Team Quickly '
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade tt-tab-item feature-tab__item '
                      id='v-pills-messages'
                      role='tabpanel'
                      aria-labelledby='v-pills-messages-tab'
                    >
                      <div className='ultraland-tabs-contents feature-tab__content-wrap'>
                        <div className='feature-tab__image'>
                          <img
                            src='media/tabs/tab_one.png'
                            alt='Scale Your Team Quickly '
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade tt-tab-item feature-tab__item'
                      id='v-pills-settings'
                      role='tabpanel'
                      aria-labelledby='v-pills-settings-tab'
                    >
                      <div className='ultraland-tabs-contents feature-tab__content-wrap'>
                        <div className='feature-tab__image'>
                          <img
                            src='media/tabs/tab_one.png'
                            alt='Scale Your Team Quickly '
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div
                    className='nav flex-column nav-pills tt-tabs-navigation feature-tab-nav'
                    id='v-pills-tab'
                    role='tablist'
                    aria-orientation='vertical'
                  >
                    <a
                      className='nav-link active'
                      id='v-pills-home-tab'
                      data-toggle='pill'
                      href='#v-pills-home'
                      role='tab'
                      aria-controls='v-pills-home'
                      aria-selected='true'
                    >
                      <div className='feature_progress'></div>
                      <h3 className='feature-tab-nav__title'>
                        Industry-Specific Templates and Modules:
                      </h3>
                      <p className='feature-tab-nav__description'>
                        Flexible data modeling capabilities to accommodate
                        industry-specific data structures.
                      </p>
                    </a>
                    <a
                      className='nav-link'
                      id='v-pills-profile-tab'
                      data-toggle='pill'
                      href='#v-pills-profile'
                      role='tab'
                      aria-controls='v-pills-profile'
                      aria-selected='false'
                    >
                      <div className='feature_progress'></div>
                      <h3 className='feature-tab-nav__title'>
                        Data Model Customization:
                      </h3>
                      <p className='feature-tab-nav__description'>
                        Configurable fields, entities, and relationships for
                        data management. Dynamic schema adjustments to adapt to
                        evolving business needs.
                      </p>
                    </a>
                    <a
                      className='nav-link'
                      id='v-pills-messages-tab'
                      data-toggle='pill'
                      href='#v-pills-messages'
                      role='tab'
                      aria-controls='v-pills-messages'
                      aria-selected='false'
                    >
                      <div className='feature_progress'></div>
                      <h3 className='feature-tab-nav__title'>
                        Workflow Automation:
                      </h3>

                      <p className='feature-tab-nav__description'>
                        - Industry-specific workflow templates and automation
                        tools.
                      </p>
                      <p className='feature-tab-nav__description'>
                        - Rule-based triggers and actions to streamline
                        processes.
                      </p>
                      <p className='feature-tab-nav__description'>
                        - Escalation and notification features for efficient
                        task management.
                      </p>
                    </a>
                    <a
                      className='nav-link'
                      id='v-pills-settings-tab'
                      data-toggle='pill'
                      href='#v-pills-settings'
                      role='tab'
                      aria-controls='v-pills-settings'
                      aria-selected='false'
                    >
                      <div className='feature_progress'></div>
                      <h3 className='feature-tab-nav__title'>
                        Scalability and Performance:
                      </h3>

                      <p className='feature-tab-nav__description'>
                        - Scalable architecture to handle large data volumes and
                        user loads.
                      </p>
                      <p className='feature-tab-nav__description'>
                        - Performance optimization for industry-specific data
                        processing requirements.
                      </p>
                      <p className='feature-tab-nav__description'>
                        - High availability and fault tolerance to ensure
                        uninterrupted operations.
                      </p>
                    </a>
                    <a
                      className='nav-link'
                      id='v-pills-settings-tab'
                      data-toggle='pill'
                      href='#v-pills-settings'
                      role='tab'
                      aria-controls='v-pills-settings'
                      aria-selected='false'
                    >
                      <div className='feature_progress'></div>
                      <h3 className='feature-tab-nav__title'>
                        Training and Support:
                      </h3>

                      <p className='feature-tab-nav__description'>
                        - Industry-specific training materials and documentation
                      </p>
                      <p className='feature-tab-nav__description'>
                        - Dedicated support channels for industry-specific
                        challenges
                      </p>
                      <p className='feature-tab-nav__description'>
                        - User community and knowledge base for
                        industry-specific best practices
                      </p>
                    </a>
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
export default TabTwo;
