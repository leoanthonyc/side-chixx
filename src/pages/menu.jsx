import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Menu({ data }) {
  const chickens = data.allSanityChicken.nodes;

  return (
    <Layout>
      <SEO title="Menu" />
      <h1>Menu</h1>
      <ul>
        {chickens.map((chicken) => (
          <li key={`chic-${chicken.name}`}>
            <h2>{chicken.name}</h2>
            <Img fluid={chicken.photo.asset.fluid} alt={chicken.name} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

Menu.defaultProps = {
  data: {},
};

Menu.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
};

export const query = graphql`
  query ChickenQuery {
    allSanityChicken {
      nodes {
        id
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
