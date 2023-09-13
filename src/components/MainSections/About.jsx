import React from "react";
import { styled } from "styled-components";

/* CSS Import */
import "../../style/about.css";

const About = () => {
  const CharCard = styled.div`
    width: 500px;
    height: 500px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  `;
  return (
    <section className="aboutWrap">
      <div className="AboutTitle">About Me</div>
      <div className="inner">
        <CharCard id="aboutL">
          <img
            src={`${process.env.PUBLIC_URL}/img/about/example_card.svg`}
            alt="Char_img"
          />
        </CharCard>
        <article id="aboutR">
          <h1>어제보다 발전한 신입 프론트엔드 개발자 조승현입니다.</h1>
        </article>
      </div>
    </section>
  );
};

export default About;
