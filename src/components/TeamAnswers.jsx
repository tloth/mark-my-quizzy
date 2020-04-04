import React, { useState } from 'react';

import CategoryAnswers from './CategoryAnswers';

function TeamAnswers({ teamAnswers }) {
  const [totalScore, setTotalScore] = useState(0);
  let category1Answers = {};
  let category2Answers = {};
  let category3Answers = {};
  let category4Answers = {};
  let category5Answers = {};
  let category6Answers = {};
  for (const property in teamAnswers[0]) {
    if (property !== 'teamname') {
      switch (property.split('_')[0]) {
        case 'geography':
          category1Answers[property] = teamAnswers[0][property];
          break;
        case 'music':
          category2Answers[property] = teamAnswers[0][property];
          break;
        case 'film':
          category3Answers[property] = teamAnswers[0][property];
          break;
        case 'books':
          category4Answers[property] = teamAnswers[0][property];
          break;
        case 'news':
          category5Answers[property] = teamAnswers[0][property];
          break;
        case 'pictures':
          category6Answers[property] = teamAnswers[0][property];
          break;
        default:
          console.log("Something ain't right in the switch case! TeamAnswers");
      }
    }
  }

  function updateTeamScore(teamScore, recordId) {
    fetch('/.netlify/functions/airtableUpdateScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ teamScore, recordId: 'recanP6EYqyiX2K8D' }),
    })
      .then(result => result.text())
      .then(data => console.log({ data }));
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
        <p>current overall totalScore: {totalScore}/60</p>
        <button onClick={() => updateTeamScore(totalScore)}>
          Submit final score!
        </button>
      </>
    );
  } else {
    return (
      <p>
        Waiting for answers... If you see this for more than a few seconds,
        there were answers missing! You had one job.
      </p>
    );
  }
}

export default TeamAnswers;
