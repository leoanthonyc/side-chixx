import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Image from './image';

const HeaderStyles = styled.div`
  .gatsby-image-wrapper {
    display: inline-block;
    height: 200px;
    width: 200px;
    top: 42px;
  }
`

const Header = () => (
  <header>
    <HeaderStyles>
      <h1 style={{ margin: 0 }}>
        <Link to="/menu">
          <span role="img" aria-label="poultry leg">🍗</span>
          Menu
        </Link>
        <Link
          to="/dips"
        >
          <span role="img" aria-label="hot pepper">🌶</span>
          Dips
        </Link>
        <Link
          to="/motherflockers"
        >
          <span role="img" aria-label="man cook">👨‍🍳</span>
          Motherflockers
        </Link>
        <Link to="/">
          <span role="img" aria-label="receipt">🧾</span>
          Place Your Order
        </Link>
        <Link
          to="/"
        >
          <Image />
        </Link>
      </h1>
    </HeaderStyles>
  </header>
);

export default Header;
