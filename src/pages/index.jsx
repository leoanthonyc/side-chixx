import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to Side Chixx</p>
    </Layout>
  );
}

export default IndexPage;
