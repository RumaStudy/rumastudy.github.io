/* Functions */
import React, { useState } from "react";

/* Library */
import { styled } from "styled-components";

const Monitor = (props) => {
  const Monitor = styled.article`
    width: 100%;
    padding: 1rem;
    & > img {
      object-fit: cover;
      object-position: top;
    }
    & > .screenOverflow {
      display: flex;
      justify-content: space-between;
      width: 200%;
      height: 100%;
      overflow: hidden;
      & > div {
        overflow: hidden;
        &.pcImg {
        }
        &.mobileImg {
        }
      }
    }
  `;
  return (
    <Monitor>
      Monitor
      <div className="screenOverflow">
        <div>
          <img src={props.pcImg} alt="PC_Img" className="pcImg" />
        </div>
        <div>
          <img src={props.mobileImg} alt="Mobile_Img" className="mobileImg" />
        </div>
      </div>
    </Monitor>
  );
};

export default Monitor;
