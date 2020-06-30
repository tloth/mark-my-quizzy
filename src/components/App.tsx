import React, { useEffect, useState } from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Nav from './Nav';
import Welcome from './Welcome';
import Mark from './Mark.jsx';
import Results from './Results';
import { dataFormatter } from '../utils';

interface Fields {
  id?: string;
  teamname: string;
  score: string;
  a_1: string;
  a_2: string;
  a_3: string;
  a_4: string;
  a_5: string;
  a_6: string;
  a_7: string;
  a_8: string;
  a_9: string;
  a_10: string;
  b_1: string;
  b_2: string;
  b_3: string;
  b_4: string;
  b_5: string;
  b_6: string;
  b_7: string;
  b_8: string;
  b_9: string;
  b_10: string;
  c_1: string;
  c_2: string;
  c_3: string;
  c_4: string;
  c_5: string;
  c_6: string;
  c_7: string;
  c_8: string;
  c_9: string;
  c_10: string;
  d_1: string;
  d_2: string;
  d_3: string;
  d_4: string;
  d_5: string;
  d_6: string;
  d_7: string;
  d_8: string;
  d_9: string;
  d_10: string;
  e_1: string;
  e_2: string;
  e_3: string;
  e_4: string;
  e_5: string;
  e_6: string;
  e_7: string;
  e_8: string;
  e_9: string;
  e_10: string;
  f_1: string;
  f_2: string;
  f_3: string;
  f_4: string;
  f_5: string;
  f_6: string;
  f_7: string;
  f_8: string;
  f_9: string;
  f_10: string;
}

interface RawTeamData {
  fields: Fields;
  id: string;
}

interface TeamData {
  id: string;
  teamname: string;
  score: string;
  a_1: string;
  a_2: string;
  a_3: string;
  a_4: string;
  a_5: string;
  a_6: string;
  a_7: string;
  a_8: string;
  a_9: string;
  a_10: string;
  b_1: string;
  b_2: string;
  b_3: string;
  b_4: string;
  b_5: string;
  b_6: string;
  b_7: string;
  b_8: string;
  b_9: string;
  b_10: string;
  c_1: string;
  c_2: string;
  c_3: string;
  c_4: string;
  c_5: string;
  c_6: string;
  c_7: string;
  c_8: string;
  c_9: string;
  c_10: string;
  d_1: string;
  d_2: string;
  d_3: string;
  d_4: string;
  d_5: string;
  d_6: string;
  d_7: string;
  d_8: string;
  d_9: string;
  d_10: string;
  e_1: string;
  e_2: string;
  e_3: string;
  e_4: string;
  e_5: string;
  e_6: string;
  e_7: string;
  e_8: string;
  e_9: string;
  e_10: string;
  f_1: string;
  f_2: string;
  f_3: string;
  f_4: string;
  f_5: string;
  f_6: string;
  f_7: string;
  f_8: string;
  f_9: string;
  f_10: string;
}

function App() {
  const [answersArray, setAnswersArray] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/airtableAllAnswers')
      .then((result) => result.json())
      .then((rawData) => {
        const formattedData = dataFormatter(rawData);
        setAnswersArray(formattedData);
      })
      .catch((err) => console.error('ERROR IN FETCH', err));
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
      </Router>
    </>
  );
}

export default App;

// To get around TypeScript + Reach Router issue (https://github.com/reach/router/issues/141#issuecomment-451646939)
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
