import React from 'react';
import PageMeta from '../components/PageMeta';
import TestimonialFive from '../components/Testimonial/TestimonialFive';
import Layout from '../layout';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import FooterOne from '../layout/Footer/FooterOne';
import NavRightTwo from '../components/NavRight/NavRightTwo';
import Navbar from '../layout/Header/Navbar';

const Testimonial = () => {
  return (
    <Layout>
      <PageMeta title='Testimonial — Software &amp; App Startup HTML Template' />
      <Navbar logoLight navRight={<NavRightTwo />} />
      <div id='main_content'>
        <BreadCrumb breadCrumbTitle='Testimonial' pageName='Testimonial' />
        <TestimonialFive />
        <FooterOne />
      </div>
    </Layout>
  );
};

export default Testimonial;
