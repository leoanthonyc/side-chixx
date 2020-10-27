import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Dips({ data }) {
  const dips = data.allSanityDip.nodes;
  console.log(dips);

  return (
    <Layout>
      <SEO title="Dips" />
      <h1>Dips</h1>
      <ul>
        {dips.map((dip) => (
          <li key={`dip-${dip.name}`}>
            <h2>{dip.name}</h2>
            <Img fluid={dip.photo?.asset?.fluid} alt={dip.name} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

Dips.defaultProps = {
  data: {},
};

Dips.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
};

export const query = graphql`
  query DipQuery {
    allSanityDip {
      nodes {
        name
        photo {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
