import React from 'react';

import PageMeta from '../components/PageMeta';
import PageHeader from '../components/Pricing/PageHeader';
import PriceOne from '../components/Pricing/PriceOne';
import TabFour from '../components/Tabs/TabFour';
import Layout from '../layout';
import FooterTwo from '../layout/Footer/FooterTwo';
import Navbar from '../layout/Header/Navbar';
import NavRightTwo from '../components/NavRight/NavRightTwo';
import FooterOne from '../layout/Footer/FooterOne';
const Price = () => {
  return (
    <Layout>
      <PageMeta title='Price — Software &amp; App Startup HTML Template' />
      <Navbar logoLight navRight={<NavRightTwo />} />
      <div id='main_content'>
        {/* <PageHeader /> */}
        <PriceOne />
        {/* <TabFour /> */}
        <FooterOne />
      </div>
    </Layout>
  );
};

export default Price;
