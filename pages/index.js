import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHome from "../components/SectionHome";
import SectionAbout from "../components/SectionAbout";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
        <Header />
      </HeaderContainer>

      <Main>
        <SectionHome id="#home" />
        <SectionAbout id="#about" />
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
  background-color: green;
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
