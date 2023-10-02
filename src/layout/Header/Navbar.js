import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ navRight, logoDark, right }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.site-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <nav
        className={`site-header navbar navbar-expand-lg ${
          true ? 'dark' : 'light'
        }  ${scroll > headerTop ? 'showed' : ''}`}
      >
        <div className='container'>
          <div className='site-logo'>
            <Link className='logo' to='/'>
              <img
                style={{ height: '50px', marginRight: '20px' }}
                className='mt-12'
                src='assets/img/8083535-ai.png'
                alt='UltraLand'
              />
              {/* <img
                style={{ height: "50px" }}
                className="sticky-logo"
                src="assets/img/Servly-logo.png"
                alt="UltraLand"
              /> */}
            </Link>
          </div>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars'></i>
          </button>

          <div
            className='collapse navbar-collapse basic-nav'
            id='navbarSupportedContent'
          >
            <ul className={`navbar-nav ${right ? 'ml-auto' : 'mx-auto'}`}>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item submenu-li dropdown'>
                <ul className='sub-menu'>
                  <li className='nav-item'>
                    <Link className='nav-link ' to=''>
                      Home Classic
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home-sass'>
                      Home Modern Saas
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home-app-showcase'>
                      Home App Showcase
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home-seo'>
                      Home SEO
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home-corporate'>
                      Home Corporate
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home-digital'>
                      Home Digital Marketing
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home-medical'>
                      Home Medical
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home-education'>
                      Home Education
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home-data-science'>
                      Home Data Science
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home-security'>
                      Home Security
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className='nav-item submenu-li dropdown'>
                <Link className='nav-link dropdown-toggle' to='#'>
                  Use Cases
                </Link>
                <ul className='sub-menu'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/company'>
                      Retail Industry
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/price'>
                      Healthcare Industry
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/team'>
                      Financial Services Industry
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/testimonial'>
                      Manufacturing Industry
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/portfolio'>
                      Marketing and Advertising Industry
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/portfolio-single'>
                      Real-Estate
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/login'>
                      Education
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/signup'>
                      Hospitality
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/error'>
                      Others
                    </Link>
                  </li>
                </ul>
              </li>{' '} */}
              <li className='nav-item'>
                <Link className='nav-link' to='/industries'>
                  Industries
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/features'>
                  Product
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/faqs'>
                  FAQs
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link className='nav-link' to='/industries'>
                  Templates
                </Link>
              </li> */}
              {/* 
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='https://documentation.servly.app/'
                >
                  Documentation
                </a>
              </li> */}
              <li className='nav-item'>
                <Link className='nav-link' to='/pricing'>
                  Pricing
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li> */}
              <li className='nav-item submenu-li dropdwon'>
                {/* <Link className="nav-link dropdown-toggle" to="#">
                  Blog
                </Link> */}
                <ul className='sub-menu'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/blogs'>
                      Blog
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/blog-single'>
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
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
