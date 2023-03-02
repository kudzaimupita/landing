import React from 'react';
import { Link } from 'react-router-dom';

const Teachers = () => {
  return (
    <React.Fragment>
      <section className='team-section-five'>
        <div className='container'>
          <div className='section-heading style-one text-center'>
            <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
              Our Best Teacher
            </h2>

            <p className='description wow fadeInUp' data-wow-delay='0.5s'>
              The his nut say faf about excusesloshed is matie boy hip shop nice
              one blow..
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-team style-five team-box wow fadeInRight'
                data-wow-delay='0.5s'
              >
                <div className='tt-team__avater-wrap'>
                  <div className='tt-team__avater'>
                    <img src='media/team/team1.jpg' alt='Joss Sticks' />
                  </div>

                  <div className='tt-team__info-top'>
                    <h5 className='tt-team__name'>Joss Sticks</h5>
                    <h6 className='tt-team__designation'>Sumo founder</h6>
                  </div>

                  <div className='tt-team__info'>
                    <h5 className='tt-team__name'>Joss Sticks</h5>
                    <h6 className='tt-team__designation'>Sumo founder</h6>

                    <ul className='tt-team__social-two'>
                      <li>
                        <a href='#/'>
                          <i
                            aria-hidden='true'
                            className='fab fa-facebook-f'
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href='#/'>
                          <i aria-hidden='true' className='fab fa-twitter'></i>
                        </a>
                      </li>

                      <li>
                        <a href='#/'>
                          <i aria-hidden='true' className='fab fa-vimeo-v'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-team style-five team-box wow fadeInRight'
                data-wow-delay='0.7s'
              >
                <div className='tt-team__avater-wrap'>
                  <div className='tt-team__avater'>
                    <img src='media/team/team6.jpg' alt='Joss Sticks' />
                  </div>

                  <div className='tt-team__info-top'>
                    <h5 className='tt-team__name'>Lance Bogrol </h5>
                    <h6 className='tt-team__designation'>Product Designer </h6>
                  </div>

                  <div className='tt-team__info'>
                    <h5 className='tt-team__name'>Lance Bogrol </h5>
                    <h6 className='tt-team__designation'>Product Designer </h6>

                    <ul className='tt-team__social-two'>
                      <li>
                        <a href='#/'>
                          <i
                            aria-hidden='true'
                            className='fab fa-facebook-f'
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href='#/'>
                          <i aria-hidden='true' className='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#/'>
                          <i aria-hidden='true' className='fab fa-vimeo-v'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-team style-five team-box wow fadeInRight'
                data-wow-delay='0.7s'
              >
                <div className='tt-team__avater-wrap'>
                  <div className='tt-team__avater'>
                    <img src='media/team/team3.jpg' alt='Joss Sticks' />
                  </div>

                  <div className='tt-team__info-top'>
                    <h5 className='tt-team__name'> Penny Tool </h5>
                    <h6 className='tt-team__designation'>Analyst </h6>
                  </div>

                  <div className='tt-team__info'>
                    <h5 className='tt-team__name'> Penny Tool </h5>
                    <h6 className='tt-team__designation'>Analyst </h6>

                    <ul className='tt-team__social-two'>
                      <li>
                        <a href='#/'>
                          <i
                            aria-hidden='true'
                            className='fab fa-facebook-f'
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href='#/'>
                          <i aria-hidden='true' className='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#/'>
                          <i aria-hidden='true' className='fab fa-vimeo-v'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-team style-five team-box wow fadeInRight'
                data-wow-delay='0.9s'
              >
                <div className='tt-team__avater-wrap'>
                  <div className='tt-team__avater'>
                    <img src='media/team/team4.jpg' alt='Joss Sticks' />
                  </div>

                  <div className='tt-team__info-top'>
                    <h5 className='tt-team__name'>Ravi Leigh </h5>
                    <h6 className='tt-team__designation'>Manager </h6>
                  </div>

                  <div className='tt-team__info'>
                    <h5 className='tt-team__name'>Ravi Leigh </h5>
                    <h6 className='tt-team__designation'>Manager </h6>

                    <ul className='tt-team__social-two'>
                      <li>
                        <a href='#/'>
                          <i
                            aria-hidden='true'
                            className='fab fa-facebook-f'
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href='#/'>
                          <i aria-hidden='true' className='fab fa-twitter'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='btn-container text-center mt-5'>
            <Link to='/team' className='tt__btn btn-outline btn-sqr'>
              Explore All Teacher
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Teachers;
