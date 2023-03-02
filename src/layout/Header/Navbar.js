import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ navRight, logoDark, right }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".site-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <nav
        className={`site-header navbar navbar-expand-lg ${
          logoDark ? "dark" : "light"
        }  ${scroll > headerTop ? "showed" : ""}`}
      >
        <div className="container">
          <div className="site-logo">
            <Link className="logo" to="/">
              <img
                style={{ maxWidth: "80px" }}
                className="main-logo"
                src="assets/img/logo1.png"
                alt="UltraLand"
              />
              <img
                style={{ height: "50px" }}
                className="sticky-logo"
                src="assets/img/logo1.png"
                alt="UltraLand"
              />
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="collapse navbar-collapse basic-nav"
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav ${right ? "ml-auto" : "mx-auto"}`}>
              <li className="nav-item submenu-li dropdown">
                <Link className="nav-link dropdown-toggle" to="/">
                  Home
                </Link>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <Link className="nav-link " to="">
                      Home Classic
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home-sass">
                      Home Modern Saas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home-app-showcase">
                      Home App Showcase
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home-seo">
                      Home SEO
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home-corporate">
                      Home Corporate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home-digital">
                      Home Digital Marketing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home-medical">
                      Home Medical
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home-education">
                      Home Education
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home-data-science">
                      Home Data Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home-security">
                      Home Security
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/company">
                  Industries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Solutions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  About
                </Link>
              </li>
              <li className="nav-item submenu-li dropdown">
                <Link className="nav-link dropdown-toggle" to="#">
                  Resources
                </Link>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/company">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/price">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/team">
                      Our Team
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/testimonial">
                      Testimonial
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/portfolio-single">
                      Portfolio Details
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login Page
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup Page
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/error">
                      404 Page
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item submenu-li dropdwon">
                {/* <Link className="nav-link dropdown-toggle" to="#">
                  Blog
                </Link> */}
                <ul className="sub-menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/blogs">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog-single">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {navRight}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
