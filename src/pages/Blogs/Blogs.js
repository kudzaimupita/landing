import React, { Component } from 'react';
import BlogAll from '../../components/Blogs/BlogAll';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Layout from '../../layout';
import PageMeta from '../../components/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import NavRightTwo from '../../components/NavRight/NavRightTwo';
import Navbar from '../../layout/Header/Navbar';
import TabFour from '../../components/Tabs/TabFour';

class Blogs extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <PageMeta title='FAQs — Servly App' />
          <Navbar logoLight navRight={<NavRightTwo />} />
          <div id='main_content'>
            <TabFour />

            {/* <BreadCrumb breadCrumbTitle='Blogs' pageName='Blogs' /> */}
            {/* <BlogAll /> */}
            <FooterOne />
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}
export default Blogs;
