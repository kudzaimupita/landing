import React from "react";
import ServiceOne from "../../components/Services/ServiceOne";
import ServiceTwo from "../../components/Services/ServiceTwo";
import TabTwo from "../../components/Tabs/TabTwo";
import HeroTwo from "./HeroTwo";
import IntroOne from "../../components/IntroVideo/IntroOne";
import TabThree from "../../components/Tabs/TabThree";
import TestimonialOne from "../../components/Testimonial/TestimonialOne";
import NewsLetterTwo from "../../components/NewsLetter/NewsLetterTwo";
import RecentBlog from "../../components/Blogs/RecentBlog";
// import LargeCarousel from '../../components/LogoCarousel/LargeCarousel';
import ImageContentThree from "../../components/ImageContent/ImageContentThree";
import ImageContentFour from "../../components/ImageContent/ImageContentFour";
import Layout from "../../layout";
import PriceOne from "../../components/Pricing/PriceOne";
import PageMeta from "../../components/PageMeta";
import FooterOne from "../../layout/Footer/FooterOne";
import NavRightTwo from "../../components/NavRight/NavRightTwo";
import DownloadCta from "../../components/CallToAction/DownloadCta";
import Navbar from "../../layout/Header/Navbar";
import ServiceThree from "../../components/Services/ServiceThree";
const HomeSass = () => {
  return (
    <Layout>
      <PageMeta title="Baboon — Home &amp; Asset and Work Management" />
      <Navbar navRight={<NavRightTwo />} />
      <div id="main_content">
        <HeroTwo />
        <ServiceThree />
        <TabTwo />
        <ImageContentThree />
        <ImageContentFour />
        <ServiceOne />
        <ServiceTwo />
        <IntroOne />
        <TabThree />
        <PriceOne />
        {/* <LargeCarousel /> */}
        {/* <TestimonialOne /> */}
        {/* <RecentBlog /> */}
        {/* <NewsLetterTwo /> */}
        <DownloadCta />
        <FooterOne />
      </div>
    </Layout>
  );
};

export default HomeSass;
