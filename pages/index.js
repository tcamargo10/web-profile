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

      <Main>
        <SectionHome />
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FooterContainer = styled.div`
  width: 100%;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 0px;
`;
