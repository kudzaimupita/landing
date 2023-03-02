import { Link } from 'react-router-dom';

import React from 'react';

const SignupScreen = () => {
  return (
    <>
      <section className='login-form-area'>
        <div className='container pr'>
          <div className='tt-form-heading text-center'>
            <h2 className='form-title'>Create a free Account</h2>
            <p>I'm a subhead that goes with a story.</p>
          </div>
          <div className='tt-form-wrapper'>
            <div className='facebook-login'>
              <Link to='#'>
                <i className='ei ei-social_facebook'></i>Sign Up with Facebook
              </Link>
            </div>
            <span className='switch-access text-center'>
              ........ Or, sign in with your email ........
            </span>

            <form action='#' className='tt-form'>
              <div className='input-wrap'>
                <label>Your Name</label>
                <div className='input-field'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    required=''
                  />
                  <i className='feather-user'></i>
                </div>
              </div>

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
                  <span>I agree to the Terms & Conditions</span>
                </div>
              </div>

              <button className='tt__btn btn-round' type='button'>
                Sign Up
              </button>

              <p className='more-info'>
                Already have an account? <a href='login'>Sign in</a>
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

export default SignupScreen;
