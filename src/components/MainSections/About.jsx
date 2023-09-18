import React from "react";
import { styled } from "styled-components";

/* CSS Import */
import "../../style/about.css";

const About = () => {
  const CharCard = styled.div`
    width: 500px;
    height: 500px;
    transition: ease-in-out 1050ms;
    perspective: 1000px;
    transform-style: preserve-3d;
    &:hover {
      transform: rotateY(360deg);
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
    & + article {
      padding: 4rem 0;
      & > h1 {
        color: white;
        text-shadow: 2px 2px 4px var(--point-color);
        font-size: 1.5rem;
        font-weight: 900;
      }
      & > .aboutTitle {
        display: block;
        color: var(--point-color);
        font-weight: 700;
        font-size: 1.2rem;
        & + p {
          padding-left: 1.5rem;
        }
      }
    }
  `;
  return (
    <section className="aboutWrap">
      <div className="AboutTitle clay">About Me</div>
      <div className="inner">
        <CharCard id="aboutL">
          <img
            src={`${process.env.PUBLIC_URL}/img/about/char_card.svg`}
            alt="Char_img"
          />
        </CharCard>
        <article id="aboutR">
          <h1>어제보다 발전한 신입 프론트엔드 개발자 조승현입니다.</h1>
          <br />
          <span className="aboutTitle">{"◎"} 한국경제TV</span>
          <p> 채널마케팅팀 현장직원 파견직 근무</p>
          <br />
          <span className="aboutTitle">{"◎"} 이마트</span>
          <p> 노브랜드 현장직원 근무</p>
          <br />
          <span className="aboutTitle">{"◎"} 크리에이터</span>
          <p>마술 거리공연 및 크리에이터 활동</p>
          <br />
          <span className="aboutTitle">{"◎"} 패스트캠퍼스</span>
          <p>코딩18{":"} 웹 개발 왕초보 수료</p>
          <br />
          <span className="aboutTitle">{"◎"} 그린아트컴퓨터학원</span>
          <p>
            리액트(React), 리액트 네이티브 EXPO 활용 프론트엔드 개발자 양성 과정
            수료
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
