import React from 'react'
import styled from 'styled-components'

function Welcome() {
  return (
    <Container>
      <p>Hello and welcome to the</p>
      <H1>Spring Quiz Extravaganza</H1>
      <h2>How it works</h2>
      <UL>
        <li>
          Put your answers on the provided Airtable form. When you submit it,
          your team name shall appear in the dropdown menu on the 'Mark' page.
        </li>
        <li>
          When every team has submitted their answers, you will be asked to
          navigate to the 'Mark' page!
        </li>
        <li>Good luck and don't fuck it up!</li>
      </UL>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  width: 50%;
  margin: 5rem auto 3rem;
`

const H1 = styled.h1`
  font-family: 'Rock Salt', cursive;
  font-size: 3rem;
  color: #fff;
  letter-spacing: 0.2rem;
`

const UL = styled.ul`
  text-transform: none;
  text-align: left;
  line-height: 1.4rem;
  letter-spacing: 0.1rem;
  > li {
    margin-bottom: 2rem;
  }
`

export default Welcome
