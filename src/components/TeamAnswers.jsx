import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import CategoryAnswers from './CategoryAnswers';

function TeamAnswers({ teamData }) {
  const [totalScore, setTotalScore] = useState(0);
  const { id: teamId, teamname, answers } = teamData;
  const categories = Object.keys(answers);

  function updateTeamScore(teamScore, teamId) {
    fetch('/.netlify/functions/airtableUpdateScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ teamScore, teamId }),
    }).then((response) => {
      if (response.ok) {
        alert('Score submitted! Onto the results page!');
        navigate('/results');
      } else return alert('error sending score', response);
    });
  }
  if (categories.length) {
    return (
      <>
        <H1>{`team: ${teamname}`}</H1>
        {categories.map((category) => {
          return (
            <CategoryAnswers
              key={category}
              totalScore={totalScore}
              setTotalScore={setTotalScore}
              answers={answers[category]}
              category={category}
            />
          );
        })}

        <ScoreWrapper>
          <p>current overall totalScore: {totalScore}/60</p>
          <Button onClick={() => updateTeamScore(totalScore, teamId)}>
            Submit final score!
          </Button>
        </ScoreWrapper>
      </>
    );
  } else {
    return <p>Waiting for answers...</p>;
  }
}

export default TeamAnswers;

const H1 = styled.h1`
  width: 50vw;
  background: rgb(255, 255, 255);
  padding: 1rem;
  margin: 3rem auto;
  text-align: center;
`;

const ScoreWrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  text-align: center;
`;

const Button = styled.button`
  width: 50%;
  background: #fff;
  padding: 1rem;
  margin: 2rem auto;
  font-size: 20px;
  font-family: 'Spartan', sans-serif;
  text-transform: uppercase;
`;
