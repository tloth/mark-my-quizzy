import React, { useEffect, useState } from 'react';

export default function Results() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/airtableAllResults')
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        setResults(data);
      });
  }, []);

  console.log({ results });

  return results ? <p>results loaded</p> : <p>waiting for results</p>;
}
