import React from 'react';

const ErrorScreen = () => {
  return (
    <>
      <section className='error_page'>
        <div className='container pr'>
          <div className='error_page_wrapper text-center'>
            <div className='error-page-content'>
              <div className='error-image'>
                {/* <img src='media/error/404.png' alt='UltraLand' /> */}
              </div>

              <div className='error-info'>
                <h2 className='error-title'>Error 404</h2>

                <p className='lead'>
                  We can’t seem to find the page you’re looking for
                </p>

                <a href='/' className='tt__btn error_btn'>
                  <i className='feather-arrow-left'></i>
                  Go Back to Home
                </a>
              </div>

              {/* <ul className='error-animate-element animate-element'>
                <li className='layer'>
                  <img src='media/error/element1.png' alt='UltraLand' />
                </li>
                <li className='layer'>
                  <img src='media/error/element2.png' alt='UltraLand' />
                </li>
                <li className='layer'>
                  <img src='media/error/element3.png' alt='UltraLand' />
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorScreen;
