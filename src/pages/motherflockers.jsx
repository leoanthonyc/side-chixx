import { format } from 'prettier';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import JSONData from '../../content/motherflockers.json';

export default function Motherflockers() {
  return (
    <Layout>
      <SEO title="Chics" />
      <h1>Chics</h1>
      <ul>
        {JSONData.content.map((data) => (<li key={`mf-${data.name}`}>{data.name}</li>))}
      </ul>
    </Layout>
  );
}
