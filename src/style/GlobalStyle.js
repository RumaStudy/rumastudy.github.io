import { createGlobalStyle } from "styled-components";

/* Gmarket Sans Font */
import GS_B from "../fonts/GmarketSansTTF/GmarketSansTTFBold.ttf";
import GS_M from "../fonts/GmarketSansTTF/GmarketSansTTFMedium.ttf";
import GS_L from "../fonts/GmarketSansTTF/GmarketSansTTFLight.ttf";

const GlobalStyle = createGlobalStyle`
  :root {
    --point-color: #70DCFF;
    --point-shadow: #3A8299;
    --point-bg: #020715;
  }
  @font-family {
    font-family: GS_B;
    src: ${GS_B};
  }
  @font-family {
    font-family: GS_M;
    src: ${GS_M};
  }
  @font-family {
    font-family: GS_L;
    src: ${GS_L};
  }
  * {
    font-family: GS_B;
  }
  .clay {
    color: var(--point-color);
    background-color: var(--point-bg);
    box-shadow: inset 5px 5px 7px rgba(112, 219, 255, 0.55),
      inset -5px -5px 7px rgba(56, 125, 148, 0.55);
    }
`;
/* ↑ ClayMorphism */

export default GlobalStyle;
