import React from 'react';
import ServiceOne from '../../components/Services/ServiceOne';
import ServiceTwo from '../../components/Services/ServiceTwo';
import TabTwo from '../../components/Tabs/TabTwo';
import HeroTwo from './HeroTwo';
import AboutThree from '../../components/About/AboutThree';
import ServiceSeven from '../../components/Services/ServiceSeven';
import DashboardPreview from '../../components/Others/DashboardPreview';
import ProcessBox from '../../components/Process/ProcessBox';
import IntroOne from '../../components/IntroVideo/IntroOne';
import TabThree from '../../components/Tabs/TabThree';
import TestimonialOne from '../../components/Testimonial/TestimonialOne';
import NewsLetterTwo from '../../components/NewsLetter/NewsLetterTwo';
import RecentBlog from '../../components/Blogs/RecentBlog';
// import LargeCarousel from '../../components/LogoCarousel/LargeCarousel';
import ImageContentThree from '../../components/ImageContent/ImageContentThree';
import ImageContentFour from '../../components/ImageContent/ImageContentFour';
import Layout from '../../layout';
import PriceOne from '../../components/Pricing/PriceOne';
import PageMeta from '../../components/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import NavRightTwo from '../../components/NavRight/NavRightTwo';
import DownloadCta from '../../components/CallToAction/DownloadCta';
import Navbar from '../../layout/Header/Navbar';
import ServiceThree from '../../components/Services/ServiceSeven';
import FeatureSeven from '../../components/Features/FeatureSeven';
import TabSix from '../../components/Tabs/TabSix';
import SecurityFeature from '../../components/Features/SecurityFeature';
import HeroOne from '../index1/HeroOne';
import HeroTen from '../index10/HeroTen';
// import NavRightTwo from '../../components/NavRight/NavRightOne';
const HomeSass = () => {
  return (
    <Layout>
      <PageMeta title='Servly | ERP Engine' />
      <Navbar navRight={<NavRightTwo />} />

      <div id='main_content'>
        {/* <HeroOne /> */}
        <HeroTen />
        <SecurityFeature />
        {/* <TabSix /> */}
        <FeatureSeven />
        {/* <ServiceSeven /> */}
        {/* <TabTwo />
         <AboutThree />
        <AboutThree /> */}{' '}
        {/* <AboutThree /> */}
        {/* <ImageContentFour /> */}
        {/* <ImageContentThree /> */}
        {/* <ProcessBox />
        > */}
        {/* <DashboardPreview /> */}
        {/* <ServiceOne /> */}
        <TabThree />
        {/* <PriceOne /> */}
        {/* <LargeCarousel /> */}
        {/* <TestimonialOne /> */}
        {/* <RecentBlog /> */}
        {/* <NewsLetterTwo /> */}
        {/* <DownloadCta /> */}
        <FooterOne />
      </div>
    </Layout>
  );
};

export default HomeSass;
