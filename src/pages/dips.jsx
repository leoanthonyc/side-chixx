import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const DipsStyles = styled.div`
  li {
    list-style-type: none;
    display: inline-block;
  }
`;

export default function Dips({ data }) {
  const dips = data.allSanityDip.nodes;

  return (
    <Layout>
      <SEO title="Dips" />
      <DipsStyles>
        <h2>Sauce up!</h2>
        <ul>
          {dips.map((dip) => (
            <li key={`dip-${dip.id}`}>
              <h3>{dip.name}</h3>
              <Img fluid={dip.photo?.asset?.fluid} alt={dip.name} />
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
