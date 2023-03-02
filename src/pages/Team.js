import React from 'react';
import PageMeta from '../components/PageMeta';
import TeamTwo from '../components/Team/TeamTwo';
import Layout from '../layout';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import FooterOne from '../layout/Footer/FooterOne';
import NavRightTwo from '../components/NavRight/NavRightTwo';
import Navbar from '../layout/Header/Navbar';

const Team = () => {
  return (
    <Layout>
      <PageMeta title='Our Team — Software &amp; App Startup HTML Template' />
      <Navbar navRight={<NavRightTwo />} />
      <div id='main_content'>
        <BreadCrumb breadCrumbTitle='Our Team' pageName='Our Team' />
        <TeamTwo />
        <FooterOne />
      </div>
    </Layout>
  );
};

export default Team;
