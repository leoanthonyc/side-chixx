import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image from './image';

const HeaderStyles = styled.nav`
  padding: 1rem 5rem;

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
  @media (max-width: 400px) {
    ul {
      justify-items: left;
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      grid-gap: 1rem;
    }
  }
`;

const Header = () => (
  <header>
    <HeaderStyles>
      <ul>
        <li>
          <Link to="/">
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
          <Link to="/order">
            Order
          </Link>
        </li>
        <li>
          <Link
            to="/motherflockers"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/"
          >
            <Image />
          </Link>
        </li>
      </ul>
    </HeaderStyles>
  </header>
);

export default Header;
