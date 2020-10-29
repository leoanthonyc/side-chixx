import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image from './image';

const HeaderStyles = styled.nav`
  padding: 1rem 5rem 1rem 5rem;

  .gatsby-image-wrapper {
    width: 200px;
  }

  ul {
    list-style: none;
    margin: 0;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 1rem;
    align-items: center;
  }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: gold;
    }
    &[aria-current='page'] {
      color: gold;
    }
  }
`;

const Header = () => (
  <header>
    <HeaderStyles>
      <ul>
        <li>
          <Link to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/dips"
          >
            Dips
          </Link>
        </li>
        <li>
          <Link
            to="/motherflockers"
          >
            Motherflockers
          </Link>
        </li>
        <li>
          <Link to="/order">
            Order
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
          >
            <Image />
          </Link>
        </li>
      </ul>
    </HeaderStyles>
  </header>
);

export default Header;
