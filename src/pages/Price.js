import React from 'react';

import PageMeta from '../components/PageMeta';
import PageHeader from '../components/Pricing/PageHeader';
import PriceOne from '../components/Pricing/PriceOne';
import TabFour from '../components/Tabs/TabFour';
import Layout from '../layout';
import FooterTwo from '../layout/Footer/FooterTwo';
import Navbar from '../layout/Header/Navbar';

const Price = () => {
  return (
    <Layout>
      <PageMeta title='Price — Software &amp; App Startup HTML Template' />
      <Navbar />
      <div id='main_content'>
        <PageHeader />
        <PriceOne />
        <TabFour />
        <FooterTwo />
      </div>
    </Layout>
  );
};

export default Price;
