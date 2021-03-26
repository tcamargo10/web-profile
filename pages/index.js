import Head from "next/head";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHome from "../components/SectionHome";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Thiago Camargo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <Main>
        <SectionHome />
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
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: transparent;
  padding: 30px;
  z-index: 10;
  max-width: 1200px;
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
