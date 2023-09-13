import React from 'react';
import { Link } from 'react-router-dom';
import { RiHealthBookFill, RiGovernmentLine } from 'react-icons/ri';
import { TbBuildingBank } from 'react-icons/tb';
import {
  MdOutlineCastForEducation,
  MdOutlineGasMeter,
  MdPrecisionManufacturing,
} from 'react-icons/md';

const HeroTen = () => {
  return (
    <>
      <section className='banner banner--ten d-flex align-items-center'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 tt-order-lg-2'>
              <div className='banner__content'>
                <h2
                  className='banner__title wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  <span>Next-gen Adaptive</span>
                  ERP Suite
                </h2>

                <p
                  className='wow fadeInUp banner__description'
                  data-wow-delay='.5s'
                >
                  Our ERP engine is your transformational tool. Unify disparate
                  processes, achieve heightened efficiency, and navigate your
                  business toward success using the intelligence of data-driven
                  insights.
                </p>
                <div
                  className='banner__feature-wrap wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='banner__feature-item'>
                    <div className='banner__feature-icon'>
                      <RiHealthBookFill />
                    </div>

                    <h4 className='banner__feature-title'>
                      Healthcare
                      {/* <br />
                      Solution */}
                    </h4>
                  </div>

                  <div className='banner__feature-item'>
                    <div className='banner__feature-icon'>
                      <MdPrecisionManufacturing />
                    </div>

                    <h4 className='banner__feature-title'>
                      Manufacturing
                      {/* <br />
                      Solution */}
                    </h4>
                  </div>
                  <div className='banner__feature-item'>
                    <div className='banner__feature-icon'>
                      <RiGovernmentLine />
                    </div>

                    <h4 className='banner__feature-title'>
                      Public Sector
                      {/* <br />
                      Solution */}
                    </h4>
                  </div>
                  {/* <div className='banner__feature-item'>
                    <div className='banner__feature-icon'>
                      <img
                        src='media/banner/banner-ten/smartphone.png'
                        alt='pc'
                      />
                    </div>

                    <h4 className='banner__feature-title'>
                      Android
                      <br />
                      Explore
                    </h4>
                  </div> */}
                </div>
                <div
                  className='banner__feature-wrap wow fadeInUp'
                  data-wow-delay='0.7s'
                >
                  <div className='banner__feature-item'>
                    <div className='banner__feature-icon'>
                      <MdOutlineGasMeter />
                    </div>

                    <h4 className='banner__feature-title'>
                      Energy
                      {/* <br />
                      Solution */}
                    </h4>
                  </div>

                  <div className='banner__feature-item'>
                    <div className='banner__feature-icon'>
                      <MdOutlineCastForEducation />
                    </div>

                    <h4 className='banner__feature-title'>
                      Education
                      {/* <br />
                      Solution */}
                    </h4>
                  </div>
                  <div className='banner__feature-item'>
                    <div className='banner__feature-icon'>
                      <TbBuildingBank />
                    </div>

                    <h4 className='banner__feature-title'>
                      Finance
                      {/* <br />
                      Solution */}
                    </h4>
                  </div>
                  {/* <div className='banner__feature-item'>
                    <div className='banner__feature-icon'>
                      <img
                        src='media/banner/banner-ten/smartphone.png'
                        alt='pc'
                      />
                    </div>

                    <h4 className='banner__feature-title'>
                      Android
                      <br />
                      Explore
                    </h4>
                  </div> */}
                </div>

                <ul
                  className='banner__feature wow fadeInUp'
                  data-wow-delay='0.9s'
                >
                  <li>
                    <i className='ei ei-icon_check'></i>Monthly subscription
                  </li>
                  <li>
                    <i className='ei ei-icon_check'></i>Free to get started
                  </li>
                </ul>

                {/* <div className='banner__btns'>
                  <Link
                    to='/contact'
                    className='tt__btn btn-round banner-btn wow fadeInUp'
                    data-wow-delay='.7s'
                  >
                    Start Free Trial
                  </Link>
                </div> */}
              </div>
              <form
                style={{ marginBottom: '20px' }}
                action='php/subscribe.php'
                method='post'
                className='banner__newsletter-form wow fadeInUp'
                data-wow-delay='0.7s'
                data-tt-form='newsletter-subscribe'
              >
                <div className='newsletter-inner'>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    id='newsletter-form-email'
                    placeholder='Enter your Email'
                    required=''
                  />

                  <button
                    // type="submit"
                    // name="submit"
                    // id="newsletter-submit"
                    className='tt__btn newsletter-submit'
                  >
                    {/* <a
                        href="https://app.servly.app/sign-up"
                        // className="tt__btn btn-round btn-outline btn-light banner-btn wow fadeInUp"
                        data-wow-delay=".7s"
                      > */}{' '}
                    <span>Try It Now</span>
                    <i className='fas fa-spinner fa-spin'></i> {/* </a> */}
                  </button>
                </div>
                <div className='form-result alert'>
                  <div className='content'></div>
                </div>
              </form>
            </div>

            <div className='col-lg-6'>
              <div className='banner__feature-image wow fadeIn'>
                <img
                  className='wow fadeInUp'
                  src='media/banner/banner-ten/banner-ten.png'
                  alt='banner'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTen;
