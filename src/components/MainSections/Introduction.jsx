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
    & > * {
      text-shadow: 2px 2px 5px var(--point-shadow);
    }
    & > h1 {
      font-size: 3.5rem;
    }
    & > h5 {
      font-weight: 300;
      font-size: 2rem;
      font-family: GS_L;
    }
    & > h3 {
      font-size: 3rem;
      font-family: GS_M;
      font-weight: 600;
    }
  `;

  /* Variable Paragraph */
  const introPara = [
    "새로움을 채워가는",
    "한결같이 노력하는",
    "함께 성장하는",
    "열정이 가득한",
    "주위에 귀를 기울이는",
  ];
  const [introduce, setIntroduce] = useState(
    introPara[Math.floor(Math.random() * introPara.length)]
  );

  /* useEffect() */
  useEffect(() => {
    const paraSetter = setInterval(() => {
      const randomSelection = Math.floor(Math.random() * introPara.length);
      setIntroduce(introPara[randomSelection]);
    }, 3000);
    return () => {
      clearInterval(paraSetter);
    };
  });

  return (
    <IntroDesc className="introDesc">
      {/* 가벼운 텍스트 입력처럼 보이는 introduction */}
      <h1>{introduce} </h1>
      <h5>신입 프론트엔드 개발자</h5>
      <h3>조승현 입니다.</h3>
    </IntroDesc>
  );
};

export default Introduction;
