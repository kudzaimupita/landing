import React from 'react';
import DownloadCtaTwo from '../../components/CallToAction/DownloadCtaTwo';
import FeatureSeven from '../../components/Features/FeatureSeven';
import SecurityFeature from '../../components/Features/SecurityFeature';
import SecurityFeatureTwo from '../../components/Features/SecurityFeatureTwo';
import HeroTen from './HeroTen';
import PageMeta from '../../components/PageMeta';
import TabSix from '../../components/Tabs/TabSix';
import TestimonialEight from '../../components/Testimonial/TestimonialEight';
import FooterSix from '../../layout/Footer/FooterSix';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout';
import NavRight from '../../components/NavRight/NavRight';

const HomeSecurity = () => {
  return (
    <Layout>
      <PageMeta title='Home Seceurity — Software &amp; App Startup HTML Template' />
      <Navbar logoDark navRight={<NavRight square />} />
      <div id='main_content'>
        <HeroTen />
        <TabSix />
        <FeatureSeven />
        <SecurityFeature />
        <TestimonialEight />
        <SecurityFeatureTwo />
        <DownloadCtaTwo />
        <FooterSix />
      </div>
    </Layout>
  );
};

export default HomeSecurity;
