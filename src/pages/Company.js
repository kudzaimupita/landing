import React from 'react';
import ServiceThree from '../components/Services/ServiceThree';
import TestimonialOne from '../components/Testimonial/TestimonialOne';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import PromoOne from '../components/PromoSection/PromoOne';
import ImageContentSix from '../components/ImageContent/ImageContentSix';
import ServiceSeven from '../components/Services/ServiceSeven';
import Layout from '../layout';
import PageMeta from '../components/PageMeta/index';
import LargeCarousel from '../components/LogoCarousel/LargeCarousel';
import FooterOne from '../layout/Footer/FooterOne';
import NavRightTwo from '../components/NavRight/NavRightTwo';
import Navbar from '../layout/Header/Navbar';
import ServiceTwo from '../components/Services/ServiceTwo';

const Company = () => {
  return (
    <Layout>
      <PageMeta title='Industries — Servly App' />
      <Navbar logoLight navRight={<NavRightTwo />} />
      <div id='main_content'>
        <ServiceTwo />
        {/* <BreadCrumb breadCrumbTitle="About Us" pageName="About Us" /> */}
        {/* <ServiceThree /> */}
        {/* <ImageContentSix /> */}
        {/* <LargeCarousel /> */}
        {/* <TestimonialOne /> */}
        {/* <PromoOne /> */}
        <FooterOne />
      </div>
    </Layout>
  );
};

export default Company;
