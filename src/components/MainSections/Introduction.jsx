/* Functions */
import React, { useState, useEffect } from "react";

/* CSS */
import "../../style/diceIntro.css";

/* Library */
import styled from "styled-components";

const Introduction = () => {
  /* Styled-Components */
  const IntroDesc = styled.article`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 6.5rem 0;
  `;

  /* Variable Paragraph */
  const introPara = ["새로움을 채워가는", "성실하게 노력하는", "함께 성장하는"];
  const [introduce, setIntroduce] = useState(
    introPara[Math.floor(Math.random() * introPara.length)]
  );

  /* useEffect() */
  useEffect(() => {
    const paraSetter = setInterval(() => {
      setIntroduce(introPara[Math.floor(Math.random() * introPara.length)]);
    }, 3000);
    return () => {
      clearInterval(paraSetter);
    };
  });

  return (
    <IntroDesc className="introDesc">
      {/* 가벼운 텍스트 입력처럼 보이는 introduction */}
      <h1>{introduce} </h1>
      <h5>신입 개발자</h5>
      <h3>조승현입니다.</h3>
    </IntroDesc>
  );
};

export default Introduction;
