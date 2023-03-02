import React from 'react';

const Category = () => {
  return (
    <React.Fragment>
      <section className='category-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8'>
              <div className='section-heading style-one'>
                <h2
                  className='section-title wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  Explore
                  <br />
                  Our Top categories
                </h2>

                <p className='description wow fadeInUp' data-wow-delay='0.5s'>
                  The his nut say faf about excusesloshed is matie boy hip shop
                  one.
                </p>
              </div>
            </div>

            <div className='col-lg-4 text-right'>
              <a href='#/' className='tt__btn btn-outline btn-sqr'>
                Browse All Categories
              </a>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='tt-category-box'>
                <div className='tt-category-box__icon'>
                  <img src='media/category/1.png' alt='category' />
                </div>

                <div className='tt-category-box__content'>
                  <h3 className='tt-category-box__title'>
                    <a href='#/'>Web Development</a>
                  </h3>
                  <p className='tt-category-box__posts'>5 Courses</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='tt-category-box'>
                <div className='tt-category-box__icon'>
                  <img src='media/category/2.png' alt='category' />
                </div>

                <div className='tt-category-box__content'>
                  <h3 className='tt-category-box__title'>
                    <a href='#/'>Business Analysis</a>
                  </h3>
                  <p className='tt-category-box__posts'>14 Courses</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='tt-category-box'>
                <div className='tt-category-box__icon'>
                  <img src='media/category/3.png' alt='category' />
                </div>

                <div className='tt-category-box__content'>
                  <h3 className='tt-category-box__title'>
                    <a href='#/'>Teaching & Academic</a>
                  </h3>
                  <p className='tt-category-box__posts'>6 Courses</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='tt-category-box'>
                <div className='tt-category-box__icon'>
                  <img src='media/category/4.png' alt='category' />
                </div>

                <div className='tt-category-box__content'>
                  <h3 className='tt-category-box__title'>
                    <a href='#/'>Computer Science</a>
                  </h3>
                  <p className='tt-category-box__posts'>9 Courses</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='tt-category-box'>
                <div className='tt-category-box__icon'>
                  <img src='media/category/5.png' alt='category' />
                </div>

                <div className='tt-category-box__content'>
                  <h3 className='tt-category-box__title'>
                    <a href='#/'>Business Study</a>
                  </h3>
                  <p className='tt-category-box__posts'>8 Courses</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='tt-category-box'>
                <div className='tt-category-box__icon'>
                  <img src='media/category/6.png' alt='category' />
                </div>

                <div className='tt-category-box__content'>
                  <h3 className='tt-category-box__title'>
                    <a href='#/'>Personal Development</a>
                  </h3>
                  <p className='tt-category-box__posts'>17 Courses</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='tt-category-box'>
                <div className='tt-category-box__icon'>
                  <img src='media/category/7.png' alt='category' />
                </div>

                <div className='tt-category-box__content'>
                  <h3 className='tt-category-box__title'>
                    <a href='#/'>Artificial Intelligence</a>
                  </h3>
                  <p className='tt-category-box__posts'>12 Courses</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='tt-category-box'>
                <div className='tt-category-box__icon'>
                  <img src='media/category/8.png' alt='category' />
                </div>

                <div className='tt-category-box__content'>
                  <h3 className='tt-category-box__title'>
                    <a href='#/'>Design Architect</a>
                  </h3>
                  <p className='tt-category-box__posts'>3 Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Category;
