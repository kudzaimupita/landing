import React from 'react';
import AboutTwo from '../../components/About/AboutTwo';
import AppointmentMed from '../../components/Appointment/AppointmentMed';
import BlogMedical from '../../components/Blogs/BlogMedical';
import ContactInfoTwo from '../../components/Contact/ContactInfoTwo';
import Faqs from '../../components/Faqs/Faqs';
import HeroSeven from './HeroSeven';
import IntroFour from '../../components/IntroVideo/IntroFour';
import NavRightThree from '../../components/NavRight/NavRightThree';
import PageMeta from '../../components/PageMeta';
import ServiceSix from '../../components/Services/ServiceSix';
import Doctors from '../../components/Team/Doctors';
import TestimonialNine from '../../components/Testimonial/TestimonialNine';
import FooterThree from '../../layout/Footer/FooterThree';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout';

const HomeMedical = () => {
  return (
    <Layout>
      <PageMeta title='Medical — Software &amp; App Startup HTML Template' />
      <Navbar logoDark navRight={<NavRightThree />} />
      <div id='main_content'>
        <HeroSeven />
        <ServiceSix />
        <IntroFour />
        <Doctors />
        <AboutTwo />
        <TestimonialNine />
        <Faqs /> v
        <BlogMedical />
        <ContactInfoTwo />
        <AppointmentMed />
        <FooterThree />
      </div>
    </Layout>
  );
};

export default HomeMedical;
