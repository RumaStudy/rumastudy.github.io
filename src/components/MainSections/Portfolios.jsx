import React from "react";

/* Components */
import Monitor from "./Monitor";

/* Json Files */
import PortfolioList from "./../../json/portfolios.json";

/* Library */
import styled from "styled-components";

const Portfolios = () => {
  console.log(PortfolioList);
  const Port = styled.section`
    width: 100%;
    & > .inner {
      display: flex;
      justify-content: space-between;
    }
  `;
  const PortList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    gap: 2rem;
    & > button {
      padding: 1rem;
      border: none;
      border-radius: 1.5rem;
      color: #020715;
      background-color: white;
      box-shadow: inset 0px 0px 7px #020715;
      transition: 550ms;
      font-weight: 700;
      font-size: 1.5rem;
      &:hover {
        color: var(--point-color);
        background-color: #020715;
        background-color: var(--point-bg);
        box-shadow: inset 5px 5px 7px rgba(112, 219, 255, 0.55),
          inset -5px -5px 7px rgba(56, 125, 148, 0.55);
        }
      }
    }
  `;
  return (
    <Port>
      <div className="inner">
        <Monitor>
          <img src="" alt="" />
        </Monitor>
        <PortList>
          {PortfolioList.map((things) => (
            <button
              onClick={() => {
                console.log(things);
              }}
            >
              {things.name}
            </button>
          ))}
        </PortList>
      </div>
    </Port>
  );
};

export default Portfolios;
