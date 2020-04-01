import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

function Nav() {
  return (
    <Navigation>
      <A to='/'>Home</A>
      <A to='/mark'>
        Mark
        <TeamsList>
          <li>
            <a href='#'>shlucky shrimps</a>
          </li>
          <li>
            <a href='#'>shlucky shrimps</a>
          </li>
          <li>
            <a href='#'>shlucky shrimps</a>
          </li>
        </TeamsList>
      </A>
      <A to='/results'>Results</A>
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: flex;
  background: #fd865d;
  color: #fff;
  text-transform: uppercase;
  font-size: 3rem;
`

const A = styled(Link)`
  position: relative;
  width: 50%;
  text-align: center;
  padding: 1.5rem;
  text-decoration: none;
  color: #fff;
  &:hover {
    background: #fff;
    color: #fd865d;
    ul {
      display: block;
    }
  }
`

const TeamsList = styled.ul`
  display: none;
  position: absolute;
  width: 100%;
  list-style: none;
  text-align: left;
  background: #fd865d;
  left: 0;
  padding-inline-start: 0;
  margin-block-start: 0.5em; // is this an absolute mess??
  > li a {
    text-decoration: none;
    color: #24352e;
    font-size: 2rem;
    padding: 1rem;
    &:hover {
      color: #fff;
    }
  }
`

export default Nav
