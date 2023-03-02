import React from 'react';

const SectionTitle = ({
  firstTitle,
  lastTitle,
  description,
  classOption,
  descriptionTwo,
  descriptionThree,
}) => {
  return (
    <div className={`section-heading ${classOption}`}>
      <h2 className='section-title wow fadeInUp' data-wow-delay='0.3s'>
        {firstTitle}
        <br />
        {lastTitle}
      </h2>
      <div className='description wow fadeInUp' data-wow-delay='0.5s'>
        <p>
          {description} <br /> {descriptionTwo} <br />
          {descriptionThree}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
