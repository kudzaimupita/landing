import React from 'react';
import FooterOne from '../layout/Footer/FooterOne';
import ErrorScreen from '../components/Others/ErrorScreen';
import Layout from '../layout';
import Navbar from '../layout/Header/Navbar';
import NavRightOne from '../components/NavRight/NavRightOne';

const NotFoundPage = () => {
  return (
    <Layout>
      <Navbar logoDark navRight={<NavRightOne />} />
      <div id='main_content'>
        <ErrorScreen />
        <FooterOne dark />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
