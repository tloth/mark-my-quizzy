import React, { useEffect, useState } from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Mark from './components/Mark.jsx';
import Results from './components/Results';

function App() {
  const [answersArray, setAnswersArray] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/airtableAllAnswers')
      .then(result => result.json())
      .then(json => setAnswersArray(json))
      .catch(err => console.log('ERROR IN FETCH', err));
  }, []);

  return (
    <>
      <Nav />
      <Router>
        {/* <RouterPage path='/' pageComponent={<Welcome />} />
        <RouterPage path='/mark' pageComponent={<Mark />} />
        <RouterPage path='/results' pageComponent={<Results />} /> */}
        <Welcome path='/' />
        <Mark path='/mark' answersArray={answersArray} />
        <Results path='/results' />
      </Router>
    </>
  );
}

export default App;

// To get around TypeScript + Reach Router issue (https://github.com/reach/router/issues/141#issuecomment-451646939)
// const RouterPage = (
//   props: { pageComponent: JSX.Element } & RouteComponentProps
// ) => props.pageComponent
