import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const OrderStyles = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto;

  .gatsby-image-wrapper {
    height: 100%;
  }
`;

function Order({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <OrderStyles>
        <div>
          <Img fluid={data.howto.childImageSharp.fluid} alt="Order instructions" />
        </div>
        <div>
          <Img fluid={data.payment.childImageSharp.fluid} alt="Mode of payment" />
        </div>
      </OrderStyles>
    </Layout>
  );
};

export default Order;

Order.defaultProps = {
  data: {},
};

Order.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
};

export const query = graphql`
  query {
    howto: file(name:{ eq: "howto" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    payment: file(name:{ eq: "payment" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;