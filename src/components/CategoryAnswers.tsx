import React, { useState } from 'react'
import styled from 'styled-components'

function CategoryAnswers(props: any) {
  const [categoryScore, setCategoryScore] = useState<number>(0)

  function toggleButton(e: any) {
    if (e.target.innerHTML === 'nope') {
      e.target.innerHTML = 'correct!'
      setCategoryScore(categoryScore + 1)
      props.setTotalScore(props.totalScore + 1)
    } else if (e.target.innerHTML === 'correct!') {
      e.target.innerHTML = 'nope'
      setCategoryScore(categoryScore - 1)
      props.setTotalScore(props.totalScore - 1)
    }
  }

  return (
    <Container>
      <Category>Category: will be filled</Category>
      <AnswerContainer>
        <Answer>1 these will also come from airtable</Answer>
        <MarkerButton onClick={toggleButton}>nope</MarkerButton>
      </AnswerContainer>
      <AnswerContainer>
        <Answer>1 these will also come from airtable</Answer>
        <MarkerButton onClick={toggleButton}>nope</MarkerButton>
      </AnswerContainer>
      <AnswerContainer>
        <Answer>1 these will also come from airtable</Answer>
        <MarkerButton onClick={toggleButton}>nope</MarkerButton>
      </AnswerContainer>
      <AnswerContainer>
        <Answer>1 these will also come from airtable</Answer>
        <MarkerButton onClick={toggleButton}>nope</MarkerButton>
      </AnswerContainer>
      <AnswerContainer>
        <Answer>1 these will also come from airtable</Answer>
        <MarkerButton onClick={toggleButton}>nope</MarkerButton>
      </AnswerContainer>
      <p>Category score: {categoryScore}/10</p>
    </Container>
  )
}

const Container = styled.section`
  width: 50vw;
  background: #fff;
  padding: 1rem;
  margin: 3rem auto;
`

const Category = styled.h2`
  text-align: center;
`

const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px dotted #fd865d;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`

const Answer = styled.p``

const MarkerButton = styled.button`
  border: none;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  padding: 0.5rem;
  vertical-align: middle;
`

export default CategoryAnswers
