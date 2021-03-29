import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHome from "../components/SectionHome";
import SectionAbout from "../components/SectionAbout";
import SectionProjects from "../components/SectionProjects";
import SectionGrid from "../components/SectionGrid";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const dataSkills = [
    { img: "javascript-original.svg", text: "JavaScript" },
    { img: "react-original.svg", text: "React.js" },
    { img: "redux-original.svg", text: "Redux" },
    { img: "nextjs-original.svg", text: "Next.js" },
    { img: "nodejs-original.svg", text: "Node.js" },
    { img: "express-original.svg", text: "Express" },
    { img: "html5-original.svg", text: "HTML 5" },
    { img: "css3-original.svg", text: "CSS 3" },
  ];

  const dataTools = [
    { img: "visualstudio-plain.svg", text: "Visual Studio Code" },
    { img: "git-original.svg", text: "Git" },
    { img: "github-original.svg", text: "GitHub" },
    { img: "docker-original.svg", text: "Docker" },
    { img: "npm-original.svg", text: "NPM" },
    { img: "yarn.svg", text: "Yarn" },
    { img: "slack-original.svg", text: "Slack" },
    { img: "trello-plain.svg", text: "Trello" },
  ];

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <Container>
      <Head>
        <title>Thiago Camargo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderContainer scrolled={scrolled}>
        <Header scrolled={scrolled} />
      </HeaderContainer>

      <Main>
        <SectionHome id="#home" />
        <SectionAbout id="#about" />
        <SectionProjects id="#projects" />
        <SectionGrid
          id="#skills"
          data={dataSkills}
          TitleText={"Skills"}
          SubtitleText={
            "Languages and Technologies that I have learned and applied to my projects"
          }
        />
        <SectionGrid
          id="#tools"
          data={dataTools}
          TitleText={"Tools"}
          SubtitleText={"My weapons of choice to help tackle any project."}
        />
      </Main>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 60px 0 rgb(0 0 0 / 7%);
  z-index: 1030;
  padding: ${(props) => (props.scrolled ? "5px 0px" : "15px 0px")};
  background: ${(props) => (props.scrolled ? "white" : "transparent")};
  color: ${(props) => (props.scrolled ? "#444" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  width: 100%;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 0px;
`;
