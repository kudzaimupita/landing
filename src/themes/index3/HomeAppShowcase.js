import React from 'react';
import HeroThree from './HeroThree';
import ServiceThree from '../../components/Services/ServiceThree';
import CenterCarousel from '../../components/LogoCarousel/CenterCarousel';
import ImageContentThree from '../../components/ImageContent/ImageContentThree';
import ImageContentFour from '../../components/ImageContent/ImageContentFour';
import ScreenShot from '../../components/AppScreen/ScreenShot';
import TabFour from '../../components/Tabs/TabFour';
import TestimonialTwo from '../../components/Testimonial/TestimonialTwo';
import Counter from '../../components/Counter/Counter';
import DownloadCta from '../../components/CallToAction/DownloadCta';
import FooterOne from '../../layout/Footer/FooterOne';
import PageMeta from '../../components/PageMeta';
import Layout from '../../layout';
import NavRightTwo from '../../components/NavRight/NavRightTwo';
import Navbar from '../../layout/Header/Navbar';

const HomeAppShowcase = () => {
  return (
    <Layout>
      <PageMeta title='App Showcase — Software &amp; App Startup HTML Template' />
      <Navbar navRight={<NavRightTwo warningBtn />} />
      <div id='main_content'>
        <HeroThree />
        <ServiceThree />
        <CenterCarousel />
        <ImageContentThree />
        <ImageContentFour />
        <ScreenShot />
        <TabFour />
        <TestimonialTwo />
        <Counter />
        <DownloadCta />
        <FooterOne />
      </div>
    </Layout>
  );
};

export default HomeAppShowcase;
