import React, { useState } from 'react';
import styled from 'styled-components';

type CategoryAnswersProps = {
  totalScore: number;
  setTotalScore: any;
  answers: string[];
  category: string;
};

function CategoryAnswers({
  totalScore,
  setTotalScore,
  answers,
  category,
}: CategoryAnswersProps) {
  const [categoryScore, setCategoryScore] = useState<number>(0);

  function toggleButton(e: any) {
    if (e.target.textContent === 'nope') {
      e.target.textContent = 'correct!';
      setCategoryScore(categoryScore + 1);
      setTotalScore(totalScore + 1);
    } else if (e.target.textContent === 'correct!') {
      e.target.textContent = 'nope';
      setCategoryScore(categoryScore - 1);
      setTotalScore(totalScore - 1);
    }
  }

  return (
    <Container>
      <Category>Category: {category}</Category>
      {answers.map((answer, index) => {
        return (
          <AnswerContainer key={answer + index}>
            <p>
              {index + 1}: {answer}
            </p>
            <MarkerButton onClick={toggleButton}>nope</MarkerButton>
          </AnswerContainer>
        );
      })}
      <p>Category score: {categoryScore}/10</p>
    </Container>
  );
}

const Container = styled.section`
  width: 50vw;
  background: #fff;
  padding: 1rem;
  margin: 3rem auto;
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

const MarkerButton = styled.button`
  border: none;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  padding: 0.5rem;
  vertical-align: middle;
`;

export default CategoryAnswers;
