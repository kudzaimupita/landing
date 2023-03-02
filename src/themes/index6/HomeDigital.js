import React from 'react';
import FeatureFive from '../../components/Features/FeatureFive';
import CounterFour from '../../components/Counter/CounterFour';
import FooterTwo from '../../layout/Footer/FooterTwo';
import HeroSix from './HeroSix';
import NewsLetterFour from '../../components/NewsLetter/NewsLetterFour';
import ServiceFive from '../../components/Services/ServiceFive';
import IntroThree from '../../components/IntroVideo/IntroThree';
import FeaturedWork from '../../components/Features/FeaturedWork';
import PromoBox from '../../components/PromoSection/PromoBox';
import Layout from '../../layout';
import PageMeta from '../../components/PageMeta';
import NavRightTwo from '../../components/NavRight/NavRightTwo';
import Navbar from '../../layout/Header/Navbar';

const HomeDigital = () => {
  return (
    <Layout>
      <PageMeta title='Digtal Marketing — Software &amp; App Startup HTML Template' />
      <Navbar logoDark navRight={<NavRightTwo warningBtn />} />
      <div id='main_content'>
        <HeroSix />
        <FeatureFive />
        <CounterFour />
        <ServiceFive />
        <IntroThree />
        <FeaturedWork />
        <PromoBox />
        <NewsLetterFour />
        <FooterTwo />
      </div>
    </Layout>
  );
};

export default HomeDigital;
