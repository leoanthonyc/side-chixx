import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const MenuStyles = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2rem;
  row-gap: 3rem;

  li {
    list-style-type: none;
    text-align: center;
  }

  .gatsby-image-wrapper {
    height: 400px;
  }

  h3 {
    padding-top: 1rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

export default function Menu({ data }) {
  const chickens = data.allSanityChicken.nodes;

  return (
    <Layout>
      <SEO title="Menu" />
      <h2>
        Choose wisely!
        <span role="img" aria-label="eyes"> 👀</span>
      </h2>
      <MenuStyles>
        {chickens.map((chicken) => (
          <li key={`chic-${chicken.id}`}>
            <Img fluid={chicken.photo.asset.fluid} alt={chicken.name} />
            <h3>{chicken.name}</h3>
            <p>{chicken.description}</p>
          </li>
        ))}
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
        description
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
