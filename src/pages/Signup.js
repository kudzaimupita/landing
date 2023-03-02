import React from 'react';
import FooterOne from '../layout/Footer/FooterOne';
import SignupScreen from '../components/Others/SignupScreen';
import PageMeta from '../components/PageMeta';
import Layout from '../layout';
import NavRightOne from '../components/NavRight/NavRightOne';
import Navbar from '../layout/Header/Navbar';

const Signup = () => {
  return (
    <Layout>
      <PageMeta title='Sign Up — Software &amp; App Startup HTML Template' />
      <Navbar logoDark navRight={<NavRightOne />} />

      <div id='main_content'>
        <SignupScreen />
        <FooterOne dark />
      </div>
    </Layout>
  );
};

export default Signup;
