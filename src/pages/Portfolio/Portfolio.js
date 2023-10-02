import React from 'react';
import PortfolioAll from '../../components/Portfolio/PortfolioAll';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Layout from '../../layout/index';
import PageMeta from '../../components/PageMeta/index';
import FooterTwo from '../../layout/Footer/FooterTwo';
import NavRightTwo from '../../components/NavRight/NavRightTwo';
import Navbar from '../../layout/Header/Navbar';
import ServiceTwo from '../../components/Services/ServiceTwo';

const Portfolio = () => {
  return (
    <>
      <Layout>
        <PageMeta title='Portfolios — Software &amp; App Startup HTML Template' />
        <Navbar logoLight navRight={<NavRightTwo />} />
        <div id='main_content'>
          {/* <BreadCrumb breadCrumbTitle='Portfolio' pageName='Portfolio ' /> */}
          <ServiceTwo />
          <FooterTwo />
        </div>
      </Layout>
    </>
  );
};

export default Portfolio;
