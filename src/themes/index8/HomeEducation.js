import React from 'react';
import BlogEdu from '../../components/Blogs/BlogEdu';
import CallToActionTwo from '../../components/CallToAction/CallToActionTwo';
import Courses from '../../components/Courses/Courses';
import Events from '../../components/Events/Events';
import Category from '../../components/Features/Category';
import NavRight from '../../components/NavRight/NavRight';
import ImageContentSeven from '../../components/ImageContent/ImageContentSeven';
import PageMeta from '../../components/PageMeta';
import Teachers from '../../components/Team/Teachers';
import TestimonialSix from '../../components/Testimonial/TestimonialSix';
import Layout from '../../layout';
import FooterFour from '../../layout/Footer/FooterFour';
import Navbar from '../../layout/Header/Navbar';
import HeroEight from './HeroEight';

const HomeEducation = () => {
  return (
    <Layout>
      <PageMeta title='Education — Software &amp; App Startup HTML Template' />
      <Navbar logoDark navRight={<NavRight square />} />
      <div id='main_content'>
        <HeroEight />
        <Category />
        <ImageContentSeven />
        <Courses />
        <Events />
        <Teachers />
        <TestimonialSix />
        <BlogEdu />
        <CallToActionTwo />
        <FooterFour />
      </div>
    </Layout>
  );
};

export default HomeEducation;
