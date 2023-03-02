import React from 'react';
import AboutOne from '../../components/About/AboutOne';
import BlogOne from '../../components/Blogs/BlogOne';
import CounterThree from '../../components/Counter/CounterThree';
import FeatureFour from '../../components/Features/FeatureFour';
import FooterTwo from '../../layout/Footer/FooterTwo';
import HeroFive from './HeroFive';
import PageMeta from '../../components/PageMeta';
import PriceTwo from '../../components/Pricing/PriceTwo';
import SkillTwo from '../../components/Skills/SkillTwo';
import TeamThree from '../../components/Team/TeamThree';
import TestimonialFour from '../../components/Testimonial/TestimonialFour';
import Layout from '../../layout';
import RightBtn from '../../components/NavRight/RightBtn';
import Navbar from '../../layout/Header/Navbar';

const HomeCorporate = () => {
  return (
    <Layout>
      <PageMeta title='Corporate — Software &amp; App Startup HTML Template' />
      <Navbar right navRight={<RightBtn />} />
      <div id='main_content'>
        <HeroFive />
        <FeatureFour />
        <AboutOne />
        <SkillTwo />
        <TeamThree />
        <PriceTwo />
        <TestimonialFour />
        <BlogOne />
        <CounterThree />
        <FooterTwo />
      </div>
    </Layout>
  );
};

export default HomeCorporate;
