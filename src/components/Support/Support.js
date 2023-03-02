import React, { Component } from 'react';
import SmallCarousel from '../LogoCarousel/SmallCarousel';
import SectionTitle from '../SectionTitle/SectionTitle';
class Support extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='support'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='support-content'>
                  <SectionTitle
                    classOption='text-center'
                    firstTitle='Get support from'
                    lastTitle='Teal people'
                    description='Twit lemon squeezy cracking goal posh get stuffed mate up
              the kyver burke Jeffrey pardon me, absolutely bladdered
              boot bugger buggered bum bag mush give us!'
                  />
                  <div
                    className='support-feature-image text-center wow fadeInUp'
                    data-wow-delay='0.7s'
                  >
                    <img src='media/feature/support.png' alt='support people' />
                  </div>

                  <h4 className='title wow fadeInUp' data-wow-delay='0.9s'>
                    UltraLand an Official Marketing Partner
                  </h4>
                  <SmallCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Support;
