import styled from "styled-components";
import Button from "../components/Button";
import Image from "next/image";

export default function SectionAbout() {
  return (
    <Container>
      <ContainerImage>
        <ImageProfile src={"/assets/thiago.jpeg"} alt="thiago" />
      </ContainerImage>
      <ContainerText>
        <h2>Hello! I'm Thiago Camargo,</h2>
        <h2>A FrontEnd Developer</h2>
        <h2>From Iguape, SP.</h2>
        <p>
          After graduating with a bachelor’s in biology, I found myself in a
          stable career as a microbiologist for a major brewery. While the idea
          of working at a brewery was definitely a great conversation starter, I
          realized that although I still had a love for science, the industry I
          was in was lacking in creativity and problem solving. After dabbling
          with some introductory JavaScript courses on the internet and
          exploring programming through self-teaching, I decided to take a leap
          of faith and made a switch in careers into tech.
        </p>
        <p>
          Through LearningFuze, I have developed a strong understanding of
          JavaScript (ES5 & ES6), React, Node.js, Express, PostgreSQL, HTML5,
          and CSS3. As a developer, I find a lot of joy and excitement utilizing
          my skills to help troubleshoot bugs and pushing projects forward. I
          enjoy learning new technologies and growing in a field that is
          constantly being pushed to new boundaries.
        </p>
        <p>
          Feel free to connect with me! Let's talk about web dev, tech, sports,
          photography, video games, cooking, or how I can be of help to your
          team or business! I'd love to get to know more developers and expand
          my network. I also know a thing or two about beer.
        </p>

        <strong>Let’s build something cool.</strong>
        <AreaTextLinks>
          <label>Mail: </label>
          <a target="_blank" href="mailto:thiago.camargo@outlook.com">
            thiago.camargo@outlook.com
          </a>
        </AreaTextLinks>
        <AreaTextLinks>
          <label>Phone: </label>
          <a target="_blank" href="tel:+5513996973155">
            +55 (13) 99697-3155
          </a>
        </AreaTextLinks>
        <AreaTextLinks>
          <label>LinkedIn: </label>
          <a target="_blank" href="https://www.linkedin.com/in/thiagorcamargo">
            https://www.linkedin.com/in/thiagorcamargo
          </a>
        </AreaTextLinks>
        <AreaTextLinks>
          <label>GitHub: </label>
          <a target="_blank" href="https://github.com/tcamargo10">
            https://github.com/tcamargo10
          </a>
        </AreaTextLinks>

        <Button link={"/assets/Thiago_Camargo_Resume_03_2021.pdf"}>
          Resume
        </Button>
      </ContainerText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin: 70px 0px;
  max-width: 1200px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerImage = styled.div`
  height: 470px;
  width: 450px;
  margin-right: 40px;
  margin-bottom: 50px;

  @media (max-width: 500px) {
    height: 350px;
    width: 100%;
    margin-right: 0px;
  }
`;

const ImageProfile = styled.img`
  height: 100;
  width: 100%;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  h2 {
    margin: 0px;
  }

  p {
    margin-bottom: 0px;
    font-size: 14px;
    font-weight: normal;
    line-height: 25px;
    color: #666;

    @media (max-width: 600px) {
      font-size: 13px;
    }
  }

  strong {
    margin: 15px 0px;
    font-size: 18px;

    @media (max-width: 600px) {
      font-size: 15px;
    }
  }

  label {
    color: #007bff;
  }
`;

const AreaTextLinks = styled.div`
  margin-bottom: 8px;
  font-size: 15px;

  @media (max-width: 600px) {
    font-size: 13.5px;
  }

  a {
    text-decoration: none;
    color: #818181;
  }
  a:hover {
    color: black;
  }
`;
