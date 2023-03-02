import React from 'react';
import FooterOne from '../layout/Footer/FooterOne';
import LoginScreen from '../components/Others/LoginScreen';
import PageMeta from '../components/PageMeta';
import Layout from '../layout';
import NavRightOne from '../components/NavRight/NavRightOne';
import Navbar from '../layout/Header/Navbar';

const Login = () => {
  return (
    <Layout>
      <PageMeta title='Login — Software &amp; App Startup HTML Template' />
      <Navbar logoDark navRight={<NavRightOne />} />
      <div id='main_content'>
        <LoginScreen />
        <FooterOne dark />
      </div>
    </Layout>
  );
};

export default Login;
