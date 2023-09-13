import React, { useState } from "react";
import styled from "styled-components";

const SkillDesc = ({ data }) => {
  /* States */
  const [skillData] = useState(data);

  /* Styled-Components */
  console.log(skillData);
  const SkillDescWrap = styled.article`
    width: 60%;
    height: 400px;
    border: 5px solid ${skillData?.border};
    margin: 3rem auto;
    perspective: 800px;
    color: ${skillData?.font};
    background-color: ${skillData?.color};
    box-shadow: inset 0 0 10px ${skillData?.font};
    position: relative;
    transform-style: preserve-3d;
    transition: ease-in-out 950ms;
    border-radius: 60px;
    &:hover {
      transform: rotateY(180deg);
    }
    & .skill_front {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .skill_front > img {
      display: block;
      height: 100%;
      margin: auto;
      object-fit: contain;
      object-position: center;
      background-color: ${skillData?.color};
      backface-visibility: hidden;
    }
    & .skill_back {
      width: 100%;
      height: 100%;
      padding: 4rem;
      border-radius: 60px;
      position: absolute;
      top: 0;
      right: 0;
      transform: rotateY(180deg);
      backface-visibility: hidden;
      color: ${skillData?.font};
      background-color: ${skillData?.color};
    }
    & * {
      color: ${skillData?.font};
    }
    & h2 {
      margin-bottom: 1rem;
      font-weight: 800;
    }
    & img {
      object-fit: contain;
      object-position: center;
      height: 3rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
    & div > ul > li {
      margin-bottom: 0.7rem;
      font-weight: 600;
    }
  `;

  return (
    <SkillDescWrap className="skillDesc">
      <div className="skill_front" color={skillData?.color}>
        <img src={skillData?.img} alt="" />
      </div>
      <div
        className="skill_back"
        font={skillData?.font}
        color={skillData?.color}
      >
        <img src={skillData?.img} alt="icon_img" />
        <h2>{skillData?.title}</h2>
        <ul>
          {skillData?.desc.map((items) => (
            <li>{items}</li>
          ))}
        </ul>
      </div>
    </SkillDescWrap>
  );
};

export default SkillDesc;
