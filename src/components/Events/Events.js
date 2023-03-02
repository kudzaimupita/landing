import React from 'react';

const Events = () => {
  return (
    <React.Fragment>
      <section className='event-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8'>
              <div className='section-heading style-one'>
                <h2
                  className='section-title wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  Join our
                  <br />
                  Upcoming Events
                </h2>

                <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                  The his nut say faf about excusesloshed is matie boy hip shop
                  one.
                </p>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='btn-container text-right'>
                <a href='#/' className='tt__btn btn-outline btn-sqr'>
                  Explore All Events
                </a>
              </div>
            </div>
          </div>

          <div className='tt-event'>
            <div className='tt-event__thumbnail'>
              <img src='media/event/1.jpg' alt='event' />
            </div>

            <div className='tt-event__contents'>
              <h3 className='tt-event__title'>
                <a href='#/'>American Teachings of the event for ultraland</a>
              </h3>
              <p className='tt-event__content'>
                Bender cobblers no biggie knees up do one at public school you
                mug, a load of old tosh on your bike mate Jeffrey.
              </p>

              <div className='tt-event__info-wrap'>
                <div className='tt-event__info'>
                  <div className='tt-event__info-left'>
                    <p>
                      <i className='feather-calendar'></i>
                      May 6, 2021
                    </p>

                    <p>
                      <i className='feather-clock'></i>
                      10:00 – 12:30 am
                    </p>
                  </div>

                  <div className='tt-event__info-right'>
                    <p>
                      <i className='feather-map-pin'></i>
                      Coronie 6349 Boston Petite
                      <br />
                      Ravine, GF 63594
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='tt-event'>
            <div className='tt-event__thumbnail'>
              <img src='media/event/2.jpg' alt='event' />
            </div>

            <div className='tt-event__contents'>
              <h3 className='tt-event__title'>
                <a href='#/'>Our excellence partner France Pavilion</a>
              </h3>
              <p className='tt-event__content'>
                Bender cobblers no biggie knees up do one at public school you
                mug, a load of old tosh on your bike mate Jeffrey.
              </p>

              <div className='tt-event__info-wrap'>
                <div className='tt-event__info'>
                  <div className='tt-event__info-left'>
                    <p>
                      <i className='feather-calendar'></i>
                      May 6, 2021
                    </p>

                    <p>
                      <i className='feather-clock'></i>
                      10:00 – 12:30 am
                    </p>
                  </div>

                  <div className='tt-event__info-right'>
                    <p>
                      <i className='feather-map-pin'></i>
                      Coronie 6349 Boston Petite
                      <br />
                      Ravine, GF 63594
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Events;
