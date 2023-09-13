/* React */
import React, { useState } from "react";
import { styled } from "styled-components";

/* Components */
import StackList from "./StackList";
import SkillDesc from "./SkillDesc";

/* CSS */
import "../../style/skill.css";

const Skills = () => {
  /* Styled-Components */
  const Skilled = styled.section`
    width: 100%;
    padding: 3rem 0;
    background-color: #ffffff;
    background: linear-gradient(#eeeeee 1%, #ffffff, #eeeeee 98%);
    & .skillFlex {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
    & .SkillWrap {
      display: grid;
      grid-template-columns: repeat(5, auto);
      justify-content: space-between;
      align-items: center;
    }
  `;
  const SkillsLists = styled.li`
    width: 700px;
    margin: 0 auto 2rem;
  `;
  const SkillBtn = styled.div`
    display: inline-block;
    width: 100%;
    padding: 1.5rem;
    border: 1px solid var(--point-color);
    border-radius: 35px;
    transition: 550ms;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    background-color: #fff;
    color: var(--point-color);
    &:hover {
      color: white;
      background-color: var(--point-color);
    }
    &.active {
      color: white;
      background-color: var(--point-color);
    }
  `;
  const SkillItems = styled.button`
    width: 90px;
    height: 90px;
    border: none;
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;
    color: ${(props) => props.font};
    cursor: pointer;
    transition: 550ms;
    overflow: hidden;
    background-color: transparent;
    & > img {
      width: 60%;
      height: 60%;
      object-fit: contain;
      object-position: center;
      transition: ease-in-out 550ms;
    }
    & > img:hover {
      transform: scale(1.5);
    }
  `;

  /* State */
  const [activeSkill, setActiveSkill] = useState(["active", ""]);
  const [skillTab, setSkillTab] = useState(StackList);
  const TabSwitch = (Array) => {
    setSkillTab(Array);
  };
  const [skillState, setSkillState] = useState(StackList[0]);

  return (
    <Skilled>
      <div className="inner">
        <nav id="skillNav">
          <SkillsLists>
            <SkillBtn
              className={activeSkill[0]}
              onClick={() => {
                TabSwitch(StackList);
                setActiveSkill(["active", ""]);
              }}
            >
              Skills
            </SkillBtn>
          </SkillsLists>
        </nav>
        <article className="skillFlex">
          <ul className="SkillWrap">
            {skillTab.map((item) => (
              <SkillItems
                data-state={item}
                bg={item.img}
                data-desc={item.desc}
                font={item.font}
                bgColor={item.color}
                onClick={() => {
                  setSkillState(item);
                }}
              >
                <img src={item.img} alt="" />
              </SkillItems>
            ))}
          </ul>
          <SkillDesc data={skillState} />
        </article>
      </div>
    </Skilled>
  );
};

export default Skills;
