import React from 'react';
import { Helmet } from 'react-helmet';

const PageMeta = ({ title }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='robots' content='noindex, follow' />
    </Helmet>
  );
};

PageMeta.defaultProps = {
  title: 'Software &amp; App Startup HTML Template',
};

export default PageMeta;
