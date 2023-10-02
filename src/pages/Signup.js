import React from 'react';
import FooterOne from '../layout/Footer/FooterOne';
import SignupScreen from '../components/Others/SignupScreen';
import PageMeta from '../components/PageMeta';
import Layout from '../layout';
import NavRightOne from '../components/NavRight/NavRightOne';
import Navbar from '../layout/Header/Navbar';
import NavRightTwo from '../components/NavRight/NavRightTwo';

const Signup = () => {
  return (
    <Layout>
      <PageMeta title='Request Demo — Servly App' />
      <Navbar logoDark navRight={<NavRightTwo />} />

      <div id='main_content'>
        <SignupScreen />
        <FooterOne />
      </div>
    </Layout>
  );
};

export default Signup;
