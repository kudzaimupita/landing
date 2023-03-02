import React from "react";
import ContactFormMap from "../components/Contact/ContactFormMap";
import ContactInfo from "../components/Contact/ContactInfo";
import PageMeta from "../components/PageMeta";
import Layout from "../layout";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import FooterOne from "../layout/Footer/FooterOne";
import NavRightTwo from "../components/NavRight/NavRightTwo";
import Navbar from "../layout/Header/Navbar";

const Contact = () => {
  return (
    <Layout>
      <PageMeta title="Contact — Software &amp; App Startup HTML Template" />
      <Navbar logoLight navRight={<NavRightTwo />} />
      <div id="main_content">
        {/* <BreadCrumb breadCrumbTitle='Contact' pageName='Contact' /> */}
        <ContactFormMap />
        {/* <ContactInfo /> */}
        <FooterOne />
      </div>
    </Layout>
  );
};

export default Contact;
