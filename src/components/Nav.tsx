import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { colours } from '../assets/theme';

function Nav() {
  return (
    <Navigation>
      <A to='/'>Home</A>
      <A to='/mark'>Mark</A>
      <A to='/results'>Results</A>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  background: ${colours.main};
  color: #fff;
  text-transform: uppercase;
  font-size: 3rem;
`;

const A = styled(Link)`
  width: 50%;
  text-align: center;
  padding: 1.5rem;
  text-decoration: none;
  color: #fff;
  &:hover {
    background: #fff;
    color: ${colours.main};
  }
`;

export default Nav;
