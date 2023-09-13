import React from "react";
import styled from "styled-components";
import "../../style/diceIntro.css";

const IntroDice = () => {
  const DiceFloor = styled.div`
    width: 300px;
    height: 300px;
    padding: 1rem;
    border: 6px solid var(--point-color);
    position: absolute;
    background-color: #fff;
    box-shadow: inset 0px 0px 35px var(--point-color);
  `;
  const public_env = `${process.env.PUBLIC_URL}img/dice/`;
  return (
    <article className="stage">
      <div id="cube">
        <DiceFloor id="diceFront" className="diceFloor">
          <img src={`${public_env}1.png`} alt="Dice_Img" />
        </DiceFloor>
        <DiceFloor id="diceBack" className="diceFloor">
          <img src={`${public_env}3.png`} alt="Dice_Img" />
        </DiceFloor>
        <DiceFloor id="diceUp" className="diceFloor">
          <img src={`${public_env}2.png`} alt="Dice_Img" />
        </DiceFloor>
        <DiceFloor id="diceDwn" className="diceFloor">
          <img src={`${public_env}3.png`} alt="Dice_Img" />
        </DiceFloor>
        <DiceFloor id="diceLeft" className="diceFloor">
          <img src={`${public_env}4.png`} alt="Dice_Img" />
        </DiceFloor>
        <DiceFloor id="diceRight" className="diceFloor">
          <img src={`${public_env}5.png`} alt="Dice_Img" />
        </DiceFloor>
      </div>
    </article>
  );
};

export default IntroDice;
