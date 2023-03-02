import React from 'react';
import { Link } from 'react-router-dom';

const IntroThree = () => {
  return (
    <React.Fragment>
      <section className='intro-video-three'>
        <div className='container'>
          <div className='video-content-wrapper'>
            <h2 className='video-title'>Success Stories</h2>
            <p className='description'>
              Say lemon squeezy bits and bobs the full monty bog nice one haggle
              give us a bell mush baking cakes william, hunky dory david twit
              bugger plastered tosser that bender it's all gone to pot. Cuppa
              say jolly good bubble and squeak it's your round brilliant horse
              play why, bleeding my good sir what a load of rubbish Harry cockup
              pukka, pear shaped cras is young delinquent lavatory bender.
            </p>

            <div className='button-container'>
              <Link to='/about' className='tt__btn btn-round'>
                Read more about
              </Link>
              <Link to='/contact' className='tt__btn btn-outline btn-round'>
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default IntroThree;
