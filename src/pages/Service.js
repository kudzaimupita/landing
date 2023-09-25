import React, { Component } from 'react';
import NewsLetterOne from '../components/NewsLetter/NewsLetterOne';
import PageMeta from '../components/PageMeta';
import ServiceOne from '../components/Services/ServiceOne';
import ServiceTwo from '../components/Services/ServiceTwo';
import TabTwo from '../components/Tabs/TabTwo';
import Layout from '../layout';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import FooterOne from '../layout/Footer/FooterOne';
import FeatureOne from '../components/Features/FeatureOne';
import NavRightTwo from '../components/NavRight/NavRightTwo';
import Navbar from '../layout/Header/Navbar';

class Service extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title='Service — Software &amp; App Startup HTML Template' />
        <Navbar logoLight navRight={<NavRightTwo />} />
        <div id='main_content'>
          {/* <ServiceTwo /> */}
          {/* <BreadCrumb breadCrumbTitle='Service' pageName='Service' /> */}
          <FeatureOne />
          <ServiceOne />
          {/* <TabTwo /> */}
          {/* <NewsLetterOne /> */}
          <FooterOne />
        </div>
      </Layout>
    );
  }
}
export default Service;
