import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <>
      <section className='login-form-area'>
        <div className='container pr'>
          <div className='tt-form-heading text-center'>
            <h2 className='form-title'>Welcome back</h2>
            <p>it you don't have an account you can Register here!</p>
          </div>
          <div className='tt-form-wrapper'>
            <div className='facebook-login'>
              <Link to='#'>
                <i className='ei ei-social_facebook'></i>Sign in with Facebook
              </Link>
            </div>
            <span className='switch-access text-center'>
              ........ Or, sign in with your email ........
            </span>

            <form action='#' className='tt-form'>
              <div className='input-wrap'>
                <label>Work email</label>

                <div className='input-field'>
                  <input type='email' placeholder='e-mail address' />
                  <i className='feather-mail'></i>
                </div>
              </div>

              <div className='input-wrap mb-9'>
                <label>Password</label>
                <div className='input-field'>
                  <input type='password' placeholder='Password' />
                  <i className='feather-lock'></i>
                </div>
              </div>

              <div className='condition-wrap'>
                <div className='input-checkbox'>
                  <input type='checkbox' />
                  <span>Keep me signed in</span>
                </div>

                <Link to='#'>Forgot your password?</Link>
              </div>

              <button className='tt__btn btn-round' type='button'>
                Sign In
              </button>

              <p className='more-info'>
                Don’t have an account? <Link to='signup'>Create for free</Link>
              </p>
            </form>
          </div>

          <ul className='anemate-element parallax-element'>
            <li className='layer' data-depth='0.05'>
              <div className='inner'>
                <img src='media/element/sf1.png' alt='shape' />
              </div>
            </li>

            <li className='layer' data-depth='0.03'>
              <div className='inner'>
                <img src='media/element/sf2.png' alt='shape' />
              </div>
            </li>

            <li className='layer' data-depth='0.02'>
              <div className='inner'>
                <img src='media/element/sf3.png' alt='shape' />
              </div>
            </li>

            <li className='layer' data-depth='0.04'>
              <div className='inner'>
                <img src='media/element/sf4.png' alt='shape' />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default LoginScreen;
