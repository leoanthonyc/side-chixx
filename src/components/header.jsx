import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Image from './image';
import './header.css';

const Header = () => (
  <header>
    <div>
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
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
