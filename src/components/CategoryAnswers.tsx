import React, { useState } from "react";
import styled from "styled-components";

function CategoryAnswers(props: any) {
  const [currentCategoryScore, setCurrentCategoryScore] = useState<number>(0);

  function toggleButton(e: any) {
    if (e.target.innerHTML === "nope") {
      e.target.innerHTML = "correct!";
      setCurrentCategoryScore(currentCategoryScore + 1);
      props.setScore(props.score + 1);
    } else if (e.target.innerHTML === "correct!") {
      e.target.innerHTML = "nope";
      setCurrentCategoryScore(currentCategoryScore - 1);
      props.setScore(props.score - 1);
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
      <p>Current score: {currentCategoryScore}</p>
    </Container>
  );
}

const Container = styled.section`
  width: 50vw;
  background: #fff;
  padding: 1rem;
  margin: 3rem auto 3rem;
`;

const Category = styled.h2`
  text-align: center;
`;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px dotted #fd865d;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p``;

const MarkerButton = styled.button`
  border: none;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  padding: 0.5rem;
  vertical-align: middle;
`;

export default CategoryAnswers;
