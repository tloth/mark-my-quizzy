import React, { useState } from "react";
import styled from "styled-components";

import CategoryAnswers from "./CategoryAnswers";

function Mark() {
  const [score, setScore] = useState(0);
  return (
    <>
      <CategoryAnswers score={score} setScore={setScore} />
      <CategoryAnswers score={score} setScore={setScore} />
      <h1>current overall score: {score}</h1>
    </>
  );
}

export default Mark;
