import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { message } from 'antd';

const SignupScreen = () => {
  // function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
    companyName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    message.info('Sending....');
    // Send the form data to the server using fetch or axios
    fetch(
      'https://05qc9nufsi.execute-api.us-east-1.amazonaws.com/v1/auth/request-demo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )
      .then((data) => {
        setLoading(false);
        message.success('Message Sent');
        setFormData({ name: '', email: '', content: '', companyName: '' });
        // Handle the server response here, e.g., display a success message
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
        message.error('Error sending message');
        // Handle any errors from the server
        // console.error(error);
      });
  };
  return (
    <>
      <section className='login-form-area'>
        <div className='container pr'>
          <div className='tt-form-heading text-center'>
            <h2 className='form-title'>Request A demo</h2>
            <p>
              Experience the power of our ERP solution. Fill out the form below
              to request a demo
            </p>
          </div>
          <div className='tt-form-wrapper'>
            <form onSubmit={handleSubmit} className='tt-form'>
              <div className='input-wrap'>
                <label>Your Name</label>
                <div className='input-field'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <i className='feather-user'></i>
                </div>
              </div>
              <div className='input-wrap'>
                <label>Company Name</label>
                <div className='input-field'>
                  <input
                    type='text'
                    name='companyName'
                    placeholder='Name'
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                  <i className='feather-book'></i>
                </div>
              </div>
              <div className='input-wrap'>
                <label>Work email</label>

                <div className='input-field'>
                  <input
                    value={formData.workemail}
                    onChange={handleChange}
                    type='email'
                    placeholder='e-mail address'
                    required
                    name='email'
                  />
                  <i className='feather-mail'></i>
                </div>
              </div>

              <div className='input-wrap mb--5'>
                <label>Message</label>
                <div className='input-field message-field'>
                  <textarea
                    name='content'
                    placeholder='Type your message'
                    value={formData.content}
                    onChange={handleChange}
                    // required
                  ></textarea>
                  <i className='feather-message-square'></i>
                </div>
              </div>

              {/* <div className='condition-wrap'>
                <div className='input-checkbox'>
                  <input type='checkbox' />
                  <span>I agree to the Terms & Conditions</span>
                </div>
              </div> */}

              <button
                disabled={loading}
                type='submit'
                className='tt__btn submit-btn'
              >
                Send
              </button>

              {/* <p className='more-info'>
                Already have an account? <a href='login'>Sign in</a>
              </p> */}
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
