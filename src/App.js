import "./App.css";
import { useRef } from "react";

/* Static Components */
import Header from "./components/Static/Header";
import Footer from "./components/Static/Footer";

/* Variable Components */
import Main from "./components/Static/Main";

/* Library */
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const scrollRef = useRef();
  const scrollToElement = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <GlobalStyle />
      {/* Header */}
      <Header scrollToElement={scrollToElement} />
      <div className="wrap">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
