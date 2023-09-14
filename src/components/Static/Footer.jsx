import React from "react";
import styled from "styled-components";

import "../../style/footer.css";

const Footer = () => {
  const FooterDiv = styled.footer`
    width: 100%;
    height: 60px;
    background-color: var(--point-bg);
    box-shadow: 0 -2px 2px rgba(255, 255, 255, 0.35);
  `;
  const FooterPara = styled.p`
    color: #888888;
    font-weight: 300;
  `;

  return (
    <FooterDiv>
      <div className="inner">
        <FooterPara>{"😊"} Special Thanks To All of My Teachers</FooterPara>
        <FooterPara>This Page Has Been Made By React {"👍"}</FooterPara>
      </div>
    </FooterDiv>
  );
};

export default Footer;
