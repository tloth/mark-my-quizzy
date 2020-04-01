import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <Navigation>
      <A href="#">Mark</A>
      <A href="#">Results</A>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  background: #fd865d;
  color: #fff;
  text-transform: uppercase;
  font-size: 3rem;
`;

const A = styled.a`
  // position: relative;
  width: 50%;
  text-align: center;
  padding: 1.5rem;
  text-decoration: none;
  color: #fff;
  &:hover {
    background: #fff;
    color: #fd865d;
  }
`;

export default Nav;
