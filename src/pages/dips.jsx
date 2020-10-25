import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import JSONData from '../../content/dips.json'

export default function Motherflockers() {
  return (
    <Layout>
      <SEO title="Dips" />
      <h1>Dips</h1>
      <ul>
        {JSONData.content.map((data) => (<li key={`dip-${data.name}`}>{data.name}</li>))}
      </ul>
    </Layout>
  );
}
