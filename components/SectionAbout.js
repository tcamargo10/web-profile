import styled from "styled-components";
import Button from "../components/Button";

export default function SectionAbout({ ...rest }) {
  return (
    <Container {...rest}>
      <ContainerImage>
        <ImageProfile src={"/assets/thiago.jpeg"} alt="thiago" />
      </ContainerImage>
      <ContainerText>
        <h2>Hello! I'm Thiago Camargo,</h2>
        <h2>A Front-End Developer</h2>
        <h2>From Iguape, SP.</h2>
        <p>
          I have been working in the IT area since I was 17 and initially had +5
          years of experience in Support / Infra, where I worked in high
          availability environments, serving more than 5,000 employees and a
          park of more than 2,000 computers. I worked as a technical leader and
          as a team coordinator, taking care of the team recruitment,
          attendance, metrics, reports, inventory, problem solving, among
          others. In 2020 I started studies and work in the area of ​​systems
          development, today with +1 year as a software developer I focus on
          Front-End and Mobile with Stack React.
        </p>
        <p>
          I had the opportunity to work recently in some projects where I can
          apply and learn various technical and process knowledge, such as Agile
          Methodologies, componentization and code optimization. And use various
          technologies and tools to create scalable and personalized solutions
          for our customers, applying pre-defined business rules, solving
          problems and generating value for the company and customers.
        </p>
        <p>
          I always seek to be studying and improving myself with the newest
          technologies, good practices and agiles. I love new challenges and
          solving problems.
        </p>

        <strong>Let's create a project together?</strong>
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
    margin-bottom: 65px;
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
