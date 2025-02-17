import React, { useState } from 'react';
import styled from 'styled-components';
import TeamAnswers from './TeamAnswers';
import find from 'ramda/src/find';

function Mark({ answersArray }) {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teamData = answersArray
    ? find((team) => team.teamname === selectedTeam)(answersArray)
    : {};

  if (answersArray) {
    return (
      <>
        <UL>
          <li>
            It's time to mark! Find your team name on the list below and{' '}
            <em>pick the team right after yours</em> by clicking on it. This is
            very important in order to make sure every form gets marked! Please
            don't fuk this up. The last team should pick the first one on the
            list.
          </li>
          <li>
            We go through every answer together, you toggle the button to mark
            an answer correct (or incorrect again). Use your best judgement, but
            be kind & generous (not too generous).
          </li>
          <li>
            When you submit the page you marked, that team's points should
            appear on the leader board, which you can find by clicking on
            'Results'.
          </li>
        </UL>
        {!selectedTeam ? (
          <Dropdown>
            Teams
            <TeamsList>
              {answersArray.map((answerObject) => {
                return (
                  <li key={answerObject.id}>
                    <Button
                      onClick={() => setSelectedTeam(answerObject.teamname)}>
                      {answerObject.teamname}
                    </Button>
                  </li>
                );
              })}
            </TeamsList>
          </Dropdown>
        ) : null}

        {selectedTeam ? (
          <TeamAnswers teamData={teamData} />
        ) : (
          <p>Select a team from the dropdown list "Teams" above!</p>
        )}
      </>
    );
  } else {
    return <p>waiting for some data in mark</p>;
  }
}

const UL = styled.ul`
  width: 50%;
  text-transform: none;
  text-align: left;
  line-height: 1.4rem;
  letter-spacing: 0.1rem;
  margin: 5rem auto 3rem;
  > li {
    margin-bottom: 2rem;
  }
`;

const Dropdown = styled.div`
  position: relative;
  width: 50%;
  text-align: center;
  padding: 1.5rem;
  margin: 03rem auto;
  text-decoration: none;
  background: #fff;
  color: #fd865d;
  &:hover {
    background: #fd865d;
    color: #fff;
    ul {
      display: block;
    }
  }
`;

const TeamsList = styled.ul`
  display: none;
  position: absolute;
  width: 100%;
  list-style: none;
  background: #fd865d;
  left: 0;
  padding-inline-start: 0;
  margin-block-start: 0.5em; // is this an absolute mess??
  > li button {
    text-decoration: none;
    color: #24352e;
    font-size: 2rem;
    &:hover {
      color: #fff;
    }
  }
`;

const Button = styled.button`
  /* unset default button styles */
  margin: initial;
  padding: initial;
  border: 0;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  text-transform: inherit;
  background-color: transparent;
`;

export default Mark;
