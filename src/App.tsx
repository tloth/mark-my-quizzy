import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Mark from './components/Mark.jsx'
import Results from './components/Results'

function App() {
  return (
    <>
      <Nav />
      <Router>
        <RouterPage path='/' pageComponent={<Welcome />} />
        <RouterPage path='/mark' pageComponent={<Mark />} />
        <RouterPage path='/results' pageComponent={<Results />} />
      </Router>
    </>
  )
}

export default App

// To get around TypeScript + Reach Router issue (https://github.com/reach/router/issues/141#issuecomment-451646939)
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent
