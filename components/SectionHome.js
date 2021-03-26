import styled from "styled-components";
import Button from "../components/Button";

export default function SectionHome() {
  return (
    <Container>
      <Contain>
        <Title>Thiago</Title>
        <Title>Camargo</Title>
        <Role>Software Engineer</Role>
        <Button link={"/assets/Thiago_Camargo_Resume_03_2021.pdf"}>
          Resume
        </Button>
      </Contain>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: url("/assets/bg-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ::before {
    opacity: 0.5;
    background: #000 none repeat scroll 0 0;
    content: "";
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  padding: 30px;
  max-width: 1200px;
  z-index: 10;
`;

const Title = styled.div`
  font-size: 64px;
  margin: 0px;
  text-transform: uppercase;
  letter-spacing: 15px;
  line-height: 1.2;
  margin-right: -20px;
  font-weight: 800;
  color: white;
`;

const Role = styled.div`
  color: white;
  font-size: 18px;
  margin-top: 10px;
`;
