import React from 'react';
import CounterTwo from '../../components/Counter/CounterTwo';
import FeatureSlide from '../../components/Features/FeatureSlide';
import FooterTwo from '../../layout/Footer/FooterTwo';
import HeroFour from './HeroFour';
import ImageContentFour from '../../components/ImageContent/ImageContentFour';
import IntroTwo from '../../components/IntroVideo/IntroTwo';
import NewsLetterThree from '../../components/NewsLetter/NewsLetterThree';
import PageMeta from '../../components/PageMeta';
import ServiceFour from '../../components/Services/ServiceFour';
import SkillOne from '../../components/Skills/SkillOne';
import TeamOne from '../../components/Team/TeamOne';
import TestimonialThree from '../../components/Testimonial/TestimonialThree';
import NavNumber from '../../components/NavRight/NavNumber';
import Layout from '../../layout';
import Navbar from '../../layout/Header/Navbar';
import ImageContentFive from '../../components/ImageContent/ImageContentFive';

const HomeSeo = () => {
  return (
    <Layout>
      <PageMeta title='SEO — Software &amp; App Startup HTML Template' />
      <Navbar sticky navRight={<NavNumber />} />
      <div id='main_content'>
        <HeroFour />
        <ServiceFour />
        <ImageContentFive />
        <ImageContentFour />
        <IntroTwo />
        <SkillOne />
        <NewsLetterThree />
        <FeatureSlide />
        <CounterTwo />
        <TeamOne />
        <TestimonialThree />
        <FooterTwo />
      </div>
    </Layout>
  );
};

export default HomeSeo;
