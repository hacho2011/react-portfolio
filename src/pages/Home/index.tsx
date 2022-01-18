import React from "react";
import { Main } from "./styles";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Education from "../../components/Education";
import Contact from "../../components/Contact";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Intro></Intro>
        <About></About>
        <Education></Education>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </Main>
    </>
  );
}

export default Home;
