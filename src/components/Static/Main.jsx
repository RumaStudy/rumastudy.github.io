import React from "react";
import Intro from "../MainSections/Intro";
import About from "../MainSections/About";
import Skills from "../MainSections/Skills";
import Portfolios from "../MainSections/Portfolios";
import Epilogue from "../MainSections/Epilogue";

const Main = () => {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Portfolios />
      <Epilogue />
    </main>
  );
};

export default Main;
