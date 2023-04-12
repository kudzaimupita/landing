import React from "react";
import AboutThree from "../../components/About/AboutThree";
import CallToActionThree from "../../components/CallToAction/CallToActionThree";
import NavRightTwo from "../../components/NavRight/NavRightTwo";
import NewsLetterFive from "../../components/NewsLetter/NewsLetterFive";
import DashboardPreview from "../../components/Others/DashboardPreview";
import PageMeta from "../../components/PageMeta";
import PriceThree from "../../components/Pricing/PriceThree";
import ProcessBox from "../../components/Process/ProcessBox";
import ServiceSeven from "../../components/Services/ServiceSeven";
import TestimonialSeven from "../../components/Testimonial/TestimonialSeven";
import FooterSix from "../../layout/Footer/FooterSix";
import Layout from "../../layout";
import Navbar from "../../layout/Header/Navbar";
import HeroNine from "./HeroNine";

const HomeDataScience = () => {
  return (
    <Layout>
      <PageMeta title="Data Science — Software &amp; App Startup HTML Template" />
      <Navbar logoLight navRight={<NavRightTwo />} />
      <div id="main_content">
        <HeroNine />
        <ServiceSeven />
        <NewsLetterFive />
        <AboutThree />
        <TestimonialSeven />
        <ProcessBox />
        <DashboardPreview />
        <PriceThree />
        <CallToActionThree />
        <FooterSix />
      </div>
    </Layout>
  );
};

export default HomeDataScience;
