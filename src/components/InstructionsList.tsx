import React from "react";
import styled from "styled-components";

function InstructionsList() {
  return <UL />;
}

const UL = styled.ul`
  text-transform: none;
  text-align: left;
  line-height: 1.4rem;
  letter-spacing: 0.1rem;
  > li {
    margin-bottom: 2rem;
  }
`;

export default InstructionsList;
