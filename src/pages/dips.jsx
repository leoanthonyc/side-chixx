import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const DipsStyles = styled.div`
  ul {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2rem;
    row-gap: 3rem;
  }


  li {
    list-style-type: none;
    text-align: center;
  }

  .gatsby-image-wrapper {
    height: 400px;
  }

  h3 {
    padding-top: 1rem;
  }

  @media (max-width: 400px) {
    ul {
      grid-template-columns: auto;
      row-gap: 1rem;
    }
  }
`;

export default function Dips({ data }) {
  const dips = data.allSanityDip.nodes;

  return (
    <Layout>
      <SEO title="Dips" />
      <h2>
        Sauce up!
        <span role="img" aria-label="tongue"> 👅</span>
      </h2>
      <DipsStyles>
        <ul>
          {dips.map((dip) => (
            <li key={`dip-${dip.id}`}>
              <Img fluid={dip.photo?.asset?.fluid} alt={dip.name} />
              <h3>{dip.name}</h3>
            </li>
          ))}
        </ul>
      </DipsStyles>
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
        id
        name
        photo {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
