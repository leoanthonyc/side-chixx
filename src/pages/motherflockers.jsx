import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PersonStyles = styled.div`
  ul {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1rem;
  }

  li {
    list-style-type: none;
    text-align: center;
  }

  .gatsby-image-wrapper {
    height: 600px;
  }

  h3 {
    padding-top: 1rem;
  }

  @media (max-width: 400px) {
    ul {
      grid-template-columns: auto;
    }
  }
`;

export default function Motherflockers({ data }) {
  const persons = data.allSanityPerson.nodes;

  return (
    <Layout>
      <SEO title="Chics" />
      <h2>
        Who&apos;s cooking?
        <span role="img" aria-label="man cook"> 👨‍🍳</span>
      </h2>
      <PersonStyles>
        <ul>
          {persons.map((person) => (
            <li key={`mf-${person.id}`}>
              <Img fluid={person.photo.asset.fluid} alt={person.name} />
              <h3>{person.name}</h3>
              <p>{person.description}</p>
            </li>
          ))}
        </ul>
      </PersonStyles>
    </Layout>
  );
}

Motherflockers.defaultProps = {
  data: {},
};

Motherflockers.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
};

export const query = graphql`
  query People {
    allSanityPerson {
      nodes {
        id
        name
        description
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
