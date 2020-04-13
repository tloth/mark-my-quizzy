import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import CategoryAnswers from './CategoryAnswers';

function TeamAnswers({ teamData }) {
  const [totalScore, setTotalScore] = useState(0);
  const teamAnswers = teamData;
  const teamId = teamData.id;

  /* Potential solution to filling out all form issue:
 Instead of mapping through all the properties in teamAnswers, maybe map from 1-10. And switch based on number from:
 property.split('_')[1].
 Set default value of 'Not answered' for the undefined
 Just brainstorming
*/

  let category1Answers = {};
  let category2Answers = {};
  let category3Answers = {};
  let category4Answers = {};
  let category5Answers = {};
  let category6Answers = {};
  for (const property in teamAnswers) {
    if (property !== 'teamname' && property !== 'score') {
      switch (property.split('_')[0]) {
        case 'a':
          category1Answers[property] = teamAnswers[property];
          break;
        case 'b':
          category2Answers[property] = teamAnswers[property];
          break;
        case 'c':
          category3Answers[property] = teamAnswers[property];
          break;
        case 'd':
          category4Answers[property] = teamAnswers[property];
          break;
        case 'e':
          category5Answers[property] = teamAnswers[property];
          break;
        case 'f':
          category6Answers[property] = teamAnswers[property];
          break;
        default:
          console.log(
            "Something ain't right in the switch case! TeamAnswers",
            property
          );
      }
    }
  }

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

  if (
    Object.keys(category1Answers).length === 10 &&
    Object.keys(category2Answers).length === 10 &&
    Object.keys(category3Answers).length === 10 &&
    Object.keys(category4Answers).length === 10 &&
    Object.keys(category5Answers).length === 10 &&
    Object.keys(category6Answers).length === 10
  ) {
    return (
      <>
        <H1>{`team: ${teamAnswers.teamname}`}</H1>
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category1Answers}
          category={'a'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category2Answers}
          category={'b'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category3Answers}
          category={'c'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category4Answers}
          category={'d'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category5Answers}
          category={'e'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category6Answers}
          category={'f'}
        />
        <ScoreWrapper>
          <p>current overall totalScore: {totalScore}/60</p>
          <Button onClick={() => updateTeamScore(totalScore, teamId)}>
            Submit final score!
          </Button>
        </ScoreWrapper>
      </>
    );
  } else {
    return (
      <>
        <p>
          Waiting for answers... If you see this for more than a few seconds,
          there were answers missing! You had one job.
        </p>
        <ScoreWrapper>
          <p>current overall totalScore: {totalScore}/60</p>
          <Button onClick={() => updateTeamScore(totalScore, teamId)}>
            Submit final score!
          </Button>
        </ScoreWrapper>
      </>
    );
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
