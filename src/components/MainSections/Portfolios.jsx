import React from "react";
import styled from "styled-components";

const Portfolios = () => {
  const Port = styled.section`
    width: 100%;
    & > .inner {
      display: flex;
      justify-content: space-between;
    }
  `;
  const Monitor = styled.article`
    width: 100%;
    overflow: hidden;
    & > img {
      object-fit: cover;
      object-position: top;
    }
  `;
  const PortList = styled.ul`
    width: 100%;
  `;
  return (
    <Port>
      <div className="inner">
        <Monitor>
          <img src="" alt="" />
        </Monitor>
        <PortList>
          <li></li>
        </PortList>
      </div>
    </Port>
  );
};

export default Portfolios;
