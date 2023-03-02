import React from 'react';

const Doctors = () => {
  return (
    <React.Fragment>
      <section className='doctors'>
        <div className='container'>
          <div className='section-heading style-two text-center'>
            <h3 className='section-subtitle wow fadeInUp'>Highly</h3>
            <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
              Qualified Docters
            </h2>
            <p className='description wow fadeInUp' data-wow-delay='0.5s'>
              So I said knees up cuppa such a fibber jeffrey a bit of how's
              your.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-team style-three team-box wow fadeInRight'
                data-wow-delay='0.5s'
              >
                <div className='tt-team__avater-wrap'>
                  <div className='tt-team__avater'>
                    <img src='media/team/doctor1.jpg' alt='Joss Sticks' />
                  </div>

                  <div className='social-wrap'>
                    <a href='tel:+155886644' className='phone-number'>
                      <i className='ei ei-icon_phone'></i>
                    </a>
                  </div>
                </div>

                <div className='tt-team__info'>
                  <h5 className='tt-team__name'>Lurch Schpellchek</h5>
                  <h6 className='tt-team__designation'>CEO & Founder</h6>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-team style-three team-box wow fadeInRight'
                data-wow-delay='0.7s'
              >
                <div className='tt-team__avater-wrap'>
                  <div className='tt-team__avater'>
                    <img src='media/team/doctor2.jpg' alt='Joss Sticks' />
                  </div>

                  <div className='social-wrap'>
                    <a href='tel:+155886644' className='phone-number'>
                      <i className='ei ei-icon_phone'></i>
                    </a>
                  </div>
                </div>

                <div className='tt-team__info'>
                  <h5 className='tt-team__name'>Indigo Violet</h5>
                  <h6 className='tt-team__designation'>Traumatology</h6>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-team style-three team-box wow fadeInRight'
                data-wow-delay='0.7s'
              >
                <div className='tt-team__avater-wrap'>
                  <div className='tt-team__avater'>
                    <img src='media/team/doctor3.jpg' alt='Joss Sticks' />
                  </div>

                  <div className='social-wrap'>
                    <a href='tel:+155886644' className='phone-number'>
                      <i className='ei ei-icon_phone'></i>
                    </a>
                  </div>
                </div>

                <div className='tt-team__info'>
                  <h5 className='tt-team__name'>Joss Sticks</h5>
                  <h6 className='tt-team__designation'>Pediatrician</h6>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div
                className='tt-team style-three team-box wow fadeInRight'
                data-wow-delay='0.9s'
              >
                <div className='tt-team__avater-wrap'>
                  <div className='tt-team__avater'>
                    <img src='media/team/doctor4.jpg' alt='Joss Sticks' />
                  </div>

                  <div className='social-wrap'>
                    <a href='tel:+155886644' className='phone-number'>
                      <i className='ei ei-icon_phone'></i>
                    </a>
                  </div>
                </div>

                <div className='tt-team__info'>
                  <h5 className='tt-team__name'>Samuel Serif</h5>
                  <h6 className='tt-team__designation'>Cardiology</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Doctors;
