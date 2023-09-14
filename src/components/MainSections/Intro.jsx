import React from "react";
import IntroDice from "./IntroDice";
import Introduction from "./Introduction";
import { styled } from "styled-components";

const Intro = () => {
  const IntroBG = styled.div`
    width: 100%;
    height: 550px;
    padding: 3.5rem 0;
    margin: 8rem 0;
    background-color: var(--point-bg);
    color: white;
    font-weight: 700;
    font-size: 2rem;
  `;

  return (
    <IntroBG>
      <div
        className="inner"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Introduction />
        <IntroDice />
      </div>
    </IntroBG>
  );
};

export default Intro;
