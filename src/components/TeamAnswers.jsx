import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import CategoryAnswers from './CategoryAnswers';

function TeamAnswers({ teamData }) {
  const [totalScore, setTotalScore] = useState(0);
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
  for (const property in teamData) {
    if (property !== 'teamname' && property !== 'score') {
      switch (property.split('_')[0]) {
        case 'geography':
          category1Answers[property] = teamData[property];
          break;
        case 'music':
          category2Answers[property] = teamData[property];
          break;
        case 'film':
          category3Answers[property] = teamData[property];
          break;
        case 'books':
          category4Answers[property] = teamData[property];
          break;
        case 'news':
          category5Answers[property] = teamData[property];
          break;
        case 'pictures':
          category6Answers[property] = teamData[property];
          break;
        default:
          console.log(
            "Something ain't right in the switch case! TeamData",
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
        <H1>{`team: ${teamData.teamname}`}</H1>
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category1Answers}
          category={'geography'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category2Answers}
          category={'music'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category3Answers}
          category={'film'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category4Answers}
          category={'books'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category5Answers}
          category={'news'}
        />
        <CategoryAnswers
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          answers={category6Answers}
          category={'pictures'}
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
