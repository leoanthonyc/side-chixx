import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const MenuStyles = styled.div`
  li {
    list-style-type: none;
    display: inline-block;
  }
`;

export default function Menu({ data }) {
  const chickens = data.allSanityChicken.nodes;

  return (
    <Layout>
      <SEO title="Menu" />
      <MenuStyles>
        <h1>Menu</h1>
        <ul>
          {chickens.map((chicken) => (
            <li key={`chic-${chicken.id}`}>
              <h3>{chicken.name}</h3>
              <Img fluid={chicken.photo.asset.fluid} alt={chicken.name} />
            </li>
          ))}
        </ul>
      </MenuStyles>
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
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }

`;
