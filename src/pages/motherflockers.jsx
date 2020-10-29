import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PersonStyles = styled.div`
  li {
    list-style-type: none;
    display: inline-block;
  }
`;

export default function Motherflockers({ data }) {
  const persons = data.allSanityPerson.nodes;

  return (
    <Layout>
      <SEO title="Chics" />
      <PersonStyles>
        <h2>Who&apos;s cooking?</h2>
        <ul>
          {persons.map((person) => (
            <li key={`mf-${person.id}`}>
              <h3>{person.name}</h3>
              <Img fluid={person.photo.asset.fluid} alt={person.name} />
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
