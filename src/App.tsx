import React, { useEffect, useState } from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Mark from './components/Mark.jsx';
import Results from './components/Results';

interface Fields {}

interface TeamData {
  fields: Fields[];
  id: number;
}

function App() {
  const [answersArray, setAnswersArray] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/airtableAllAnswers')
      .then((result) => result.json())
      .then((json) => {
        console.log('json result', json);
        const strippedData = json.map((teamData: any) => {
          return {
            fields: teamData.fields,
            id: teamData.id,
          };
        });
        console.log('strippedData', strippedData);
        setAnswersArray(strippedData);
      })
      .catch((err) => console.log('ERROR IN FETCH', err));
  }, []);

  return (
    <>
      <Nav />
      <Router>
        <RouterPage path='/' pageComponent={<Welcome />} />
        <RouterPage
          path='/mark'
          pageComponent={<Mark answersArray={answersArray} />}
        />
        <RouterPage path='/results' pageComponent={<Results />} />
        {/* <Welcome path='/' />
        <Mark path='/mark' answersArray={answersArray} />
        <Results path='/results' /> */}
      </Router>
    </>
  );
}

export default App;

// To get around TypeScript + Reach Router issue (https://github.com/reach/router/issues/141#issuecomment-451646939)
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
