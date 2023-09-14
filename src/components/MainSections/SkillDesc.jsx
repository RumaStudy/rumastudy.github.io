import React, { useState } from "react";
import styled from "styled-components";

const SkillDesc = ({ data }) => {
  /* States */
  const [skillData] = useState(data);

  /* Styled-Components */
  console.log(skillData);
  const SkillDescWrap = styled.article`
    width: 55%;
    height: 400px;
    border: 5px solid ${skillData?.border};
    margin: 3rem auto;
    perspective: 800px;
    color: ${skillData?.font};
    background-color: ${skillData?.color};
    box-shadow: inset 0 0 10px ${skillData?.font};
    position: relative;
    border-radius: 60px;
    }
    & .skill_back {
      width: 100%;
      height: 100%;
      padding: 4rem;
      border-radius: 60px;
      position: absolute;
      top: 0;
      right: 0;
      color: ${skillData?.font};
    }
    & > * {
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
