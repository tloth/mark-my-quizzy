import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Results() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/airtableAllResults')
      .then(response => response.json())
      .then(data => setResults(data));
  }, []);

  if (!results) return <p>waiting for results</p>;

  return (
    <Container>
      {results.map(team => {
        return (
          <TeamScore>
            <p>{team.fields.teamname}</p>
            <p>{team.fields.score}</p>
          </TeamScore>
        );
      })}
    </Container>
  );
}

const Container = styled.section`
  width: 50vw;
  background: #fff;
  padding: 1rem;
  margin: 3rem auto;
`;

const TeamScore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px dotted #fd865d;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;
