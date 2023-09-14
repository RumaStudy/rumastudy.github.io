/* React */
import React from "react";

/* CSS & Img */
import Logo from "../../logo.svg";
import "../../style/header.css";

/* Library */
import styled from "styled-components";

const Header = () => {
  /* Styled-Components */
  const HeaderDiv = styled.header`
    width: 100%;
    height: 70px;
    box-shadow: 0 0 5px white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: var(--point-bg);
    & #gnb > ul li {
      cursor: pointer;
    }
  `;

  /* Gnb Var */
  const blogURL = "https://blog.naver.com/rumastudy";
  const gnbItems = ["About", "Skills", "Portfolios", "Epilogue"];

  return (
    <HeaderDiv>
      <div className="inner">
        <div
          id="logo"
          onClick={() => {
            /* 최상단 스크롤 버튼 */
            if (!window.scrollY) return;
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src={Logo} alt="Logo_Img" />
        </div>
        <nav id="gnb">
          <ul>
            {gnbItems.map((item, idx) => (
              <li onClick={() => {}}>{item}</li>
            ))}
            <li
              onClick={() => {
                window.open(blogURL);
              }}
            >
              Blog
            </li>
          </ul>
        </nav>
      </div>
    </HeaderDiv>
  );
};

export default Header;
