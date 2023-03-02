import React from 'react';
import { Link } from 'react-router-dom';

const AboutOne = () => {
  return (
    <>
      <section className='about-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='about-content-left'>
                <div className='section-heading'>
                  <h3 className='subtitle wow fadeInUp'>Corporate</h3>
                  <h2
                    className='section-title wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    We work with
                    <br />
                    the most successful
                    <br />
                    companies.
                  </h2>

                  <Link
                    to='/service'
                    className='tt__btn btn-outline btn-light btn-round wow fadeInUp'
                    data-wow-delay='0.5s'
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='about-content-right'>
          <div className='section-heading'>
            <h3 className='subtitle wow fadeInUp'>What we do</h3>

            <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
              How we
              <br />
              start business with no
              <br />
              money in dad’s garage.
            </h2>

            <Link
              to='/service'
              className='tt__btn btn-round wow fadeInUp'
              data-wow-delay='0.3s'
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOne;
