import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TeamOne extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='team-section-two'>
          <div className='container'>
            <div className='section-heading text-center'>
              <h2 className='section-title wow fadeInUp'>
                The Management Team
              </h2>

              <p className='description wow fadeInUp' data-wow-delay='0.3s'>
                So I said knees up cuppa such a fibber jeffrey a bit of how's
                your.
              </p>
            </div>

            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  className='tt-team style-two wow fadeInRight'
                  data-wow-delay='0.5s'
                >
                  <div className='tt-team__avater-wrap'>
                    <div className='tt-team__avater'>
                      <img src='media/team/team01.png' alt='Joss Sticks' />
                    </div>

                    <div className='social-wrap'>
                      <div className='link-expand'>
                        <i className='ei ei-icon_plus'></i>
                      </div>

                      <ul className='tt-team__social-two'>
                        <li>
                          <Link to='#'>
                            <i
                              aria-hidden='true'
                              className='fab fa-facebook-f'
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to='#'>
                            <i
                              aria-hidden='true'
                              className='fab fa-twitter'
                            ></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='tt-team__info'>
                    <h5 className='tt-team__name'>Joss Sticks</h5>
                    <h6 className='tt-team__designation'>Sumo founder</h6>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  className='tt-team style-two wow fadeInRight'
                  data-wow-delay='0.7s'
                >
                  <div className='tt-team__avater-wrap'>
                    <div className='tt-team__avater'>
                      <img src='media/team/team02.png' alt='Joss Sticks' />
                    </div>

                    <div className='social-wrap'>
                      <div className='link-expand'>
                        <i className='ei ei-icon_plus'></i>
                      </div>

                      <ul className='tt-team__social-two'>
                        <li>
                          <Link to='#'>
                            <i
                              aria-hidden='true'
                              className='fab fa-facebook-f'
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to='#'>
                            <i
                              aria-hidden='true'
                              className='fab fa-twitter'
                            ></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='tt-team__info'>
                    <h5 className='tt-team__name'>Lance Bogrol </h5>
                    <h6 className='tt-team__designation'>Product Designer </h6>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  className='tt-team style-two wow fadeInRight'
                  data-wow-delay='0.7s'
                >
                  <div className='tt-team__avater-wrap'>
                    <div className='tt-team__avater'>
                      <img src='media/team/team03.png' alt='Joss Sticks' />
                    </div>

                    <div className='social-wrap'>
                      <div className='link-expand'>
                        <i className='ei ei-icon_plus'></i>
                      </div>

                      <ul className='tt-team__social-two'>
                        <li>
                          <Link to='#'>
                            <i
                              aria-hidden='true'
                              className='fab fa-facebook-f'
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to='#'>
                            <i
                              aria-hidden='true'
                              className='fab fa-twitter'
                            ></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='tt-team__info'>
                    <h5 className='tt-team__name'> Penny Tool </h5>
                    <h6 className='tt-team__designation'>Analyst </h6>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div
                  className='tt-team style-two wow fadeInRight'
                  data-wow-delay='0.9s'
                >
                  <div className='tt-team__avater-wrap'>
                    <div className='tt-team__avater'>
                      <img src='media/team/team01.png' alt='Joss Sticks' />
                    </div>

                    <div className='social-wrap'>
                      <div className='link-expand'>
                        <i className='ei ei-icon_plus'></i>
                      </div>

                      <ul className='tt-team__social-two'>
                        <li>
                          <Link to='#'>
                            <i
                              aria-hidden='true'
                              className='fab fa-facebook-f'
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to='#'>
                            <i
                              aria-hidden='true'
                              className='fab fa-twitter'
                            ></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='tt-team__info'>
                    <h5 className='tt-team__name'>Ravi Leigh </h5>
                    <h6 className='tt-team__designation'>Manager </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className='btn-container mt-30 text-center'>
              <Link
                to='/team'
                className='tt__btn btn-round wow fadeInUp'
                data-wow-delay='1.1s'
              >
                Join our Team
              </Link>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default TeamOne;
