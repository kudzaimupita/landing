import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Map from '../Map';
import { Spin, message } from 'antd';
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
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
      'https://05qc9nufsi.execute-api.us-east-1.amazonaws.com/v1/auth/send-message',
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
        setFormData({ name: '', email: '', content: '' });
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
    <React.Fragment>
      <section className='contact-page'>
        {/* {loading && } */}
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 pr'>
              <div className='row align-items-center pr'>
                <div className='col-md-6'>
                  <div className='contact-form-wrapper'>
                    <div className='contact-content'>
                      <h2 className='contact-title'>Send us a Message</h2>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className='contact-form'
                      data-tt-form='contact-froms'
                    >
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
                        <label>Email</label>
                        <div className='input-field'>
                          <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
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
                            required
                          ></textarea>
                          <i className='feather-message-square'></i>
                        </div>
                      </div>

                      {/* <div className='input-checkbox'>
                        <input type='checkbox' />
                        <p>
                          I agree to the <a href='#'>Terms & Conditions</a>
                        </p>
                      </div> */}

                      <button
                        disabled={loading}
                        type='submit'
                        className='tt__btn submit-btn'
                      >
                        <span className='btn-text'>Send</span>
                        {<Spin />}
                      </button>

                      <div className='form-result alert'>
                        <div className='content'></div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className='col-md-6'>
                  {/* <div className='google-map'>
                      <Map />
                    </div> */}
                  <div className='tt-parallax__image tt-parallax__image--ten'>
                    <div className='parallax-image'>
                      <div
                        className='image-one wow ttfadeInUp animated'
                        data-wow-dealy='0.5s'
                      ></div>

                      <div className='image-two'>
                        <img
                          src='https://ultraland-react.themetags.com/media/banner/banner-one/main.png'
                          className='wow fadeIn'
                          data-parallax='{"x": -50}'
                          alt='Shape'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className='anemate-element parallax-element'>
                <li className='layer' data-depth='0.05'>
                  <div className='inner'>
                    <img src='media/element/sf1.png' alt='shape' />
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
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ContactForm;
