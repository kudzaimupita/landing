import React, { Component } from 'react';
import CallToActionOne from '../../components/CallToAction/CallToActionOne';
import FeatureOne from '../../components/Features/FeatureOne';
import HeroOne from './HeroOne';
import ImageContentOne from '../../components/ImageContent/ImageContentOne';
import ImageContentTwo from '../../components/ImageContent/ImageContentTwo';
import NavRightOne from '../../components/NavRight/NavRightOne';
import NewsLetterOne from '../../components/NewsLetter/NewsLetterOne';
import PageMeta from '../../components/PageMeta';
import PriceOne from '../../components/Pricing/PriceOne';
import PromoOne from '../../components/PromoSection/PromoOne';
import Support from '../../components/Support/Support';
import TabOne from '../../components/Tabs/TabOne';
import Layout from '../../layout';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';

class HomeClassic extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <PageMeta title='Home Classic — Software &amp; App Startup HTML Template' />
          <Navbar logoDark navRight={<NavRightOne />} />
          <div id='main_content'>
            <HeroOne />
            <FeatureOne />
            <ImageContentOne />
            <ImageContentTwo />
            <CallToActionOne />
            <TabOne />
            <PriceOne hasSectionTitle />
            <Support />
            <PromoOne />
            <NewsLetterOne />
            <FooterOne />
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default HomeClassic;
