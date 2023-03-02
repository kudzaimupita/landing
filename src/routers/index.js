import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogSingle from "../pages/Blogs/BlogSingle";
import Blogs from "../pages/Blogs/Blogs";
import Company from "../pages/Company";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFoundPage from "../themes/NotFoundPage";
import Portfolio from "../pages/Portfolio/Portfolio";
import Price from "../pages/Price";
import Service from "../pages/Service";
import SignUp from "../pages/Signup";
import Team from "../pages/Team";
import Testimonial from "../pages/Testimonial";
// importing all the themes
import HomeClassic from "../themes/index1/HomeClassic";
import HomeSass from "../themes/index2/HomeSass";
import HomeAppShowcase from "../themes/index3/HomeAppShowcase";
import HomeSeo from "../themes/index4/HomeSeo";
import HomeCorporate from "../themes/index5/HomeCorporate";
import HomeDigital from "../themes/index6/HomeDigital";
import SinglePortfolio from "../pages/Portfolio/SinglePortfolio";
import HomeMedical from "../themes/index7/HomeMedical";
import HomeEducation from "../themes/index8/HomeEducation";
import HomeDataScience from "../themes/index9/HomeDataScience";
import HomeSecurity from "../themes/index10/HomeSecurity";
import ScrollToTop from "../components/Others/ScrollToTop";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomeSass} />
          <Route exact path="/home-sass" component={HomeSass} />
          <Route exact path="/home-app-showcase" component={HomeAppShowcase} />
          <Route exact path="/home-seo" component={HomeSeo} />
          <Route exact path="/home-corporate" component={HomeCorporate} />
          <Route exact path="/home-digital" component={HomeDigital} />
          <Route exact path="/home-medical" component={HomeMedical} />
          <Route exact path="/home-education" component={HomeEducation} />
          <Route exact path="/home-data-science" component={HomeDataScience} />
          <Route exact path="/home-security" component={HomeSecurity} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/testimonial" component={Testimonial} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio-single" component={SinglePortfolio} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blog-single" component={BlogSingle} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
