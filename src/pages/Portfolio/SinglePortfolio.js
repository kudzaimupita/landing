import React from 'react';
import NavRightOne from '../../components/NavRight/NavRightOne';
import PageMeta from '../../components/PageMeta';
import PortfolioDetails from '../../components/Portfolio/PortfolioDetails';
import PortfolioHeader from '../../components/Portfolio/PortfolioHeader';
import Layout from '../../layout';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';

const SinglePortfolio = () => {
  return (
    <Layout>
      <PageMeta title='Portlfolio Single — Software &amp; App Startup HTML Template' />
      <Navbar logoDark navRight={<NavRightOne />} />
      <div id='main_content'>
        <PortfolioHeader />
        <PortfolioDetails />
        <FooterOne />
      </div>
    </Layout>
  );
};

export default SinglePortfolio;
