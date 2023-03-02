import React from 'react';
import ServiceThree from '../components/Services/ServiceThree';
import TestimonialOne from '../components/Testimonial/TestimonialOne';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import PromoOne from '../components/PromoSection/PromoOne';
import ImageContentSix from '../components/ImageContent/ImageContentSix';
import Layout from '../layout';
import PageMeta from '../components/PageMeta/index';
import LargeCarousel from '../components/LogoCarousel/LargeCarousel';
import FooterOne from '../layout/Footer/FooterOne';
import NavRightTwo from '../components/NavRight/NavRightTwo';
import Navbar from '../layout/Header/Navbar';

const Company = () => {
  return (
    <Layout>
      <PageMeta title='About — Software &amp; App Startup HTML Template' />
      <Navbar logoLight navRight={<NavRightTwo />} />
      <div id='main_content'>
        <BreadCrumb breadCrumbTitle='About Us' pageName='About Us' />
        <ServiceThree />
        <ImageContentSix />
        <LargeCarousel />
        <TestimonialOne />
        <PromoOne />
        <FooterOne />
      </div>
    </Layout>
  );
};

export default Company;
