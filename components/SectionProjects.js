import React from "react";
import styled from "styled-components";

function SectionProjects() {
  return (
    <Container>
      <AreaHeader>
        <Title>Projects</Title>
        <SubTitle>
          From ideation to creation, here are some applications that I have
          developed
        </SubTitle>
      </AreaHeader>

      <ContainerProjects>
        <Project>
          <ImageProject
            src={"/assets/portifolio/cmra-preview.png"}
            alt="project 1"
          />
          <TextProject>CMRA</TextProject>
        </Project>

        <Project>
          <ImageProject
            src={"/assets/portifolio/like-preview.png"}
            alt="project 2"
          />
          <TextProject>Like</TextProject>
        </Project>

        <Project>
          <ImageProject
            src={"/assets/portifolio/cookin-preview.png"}
            alt="project 3"
          />
          <TextProject>Cookin</TextProject>
        </Project>
      </ContainerProjects>
    </Container>
  );
}

export default SectionProjects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 120px 0px;
  max-width: 1200px;
`;

const AreaHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  line-height: 1;
  font-weight: 800;
  font-size: 45px;
  color: #222;
  margin: 0px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 27px;
  color: #666;
  word-break: break-all;
  white-space: normal;
`;

const ContainerProjects = styled.div`
  display: grid;
  padding: 20px 15px;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 25px;
  align-items: center;
  justify-content: center;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid whitesmoke;
`;

const ImageProject = styled.img`
  height: 80%;
  width: 100%;
`;

const TextProject = styled.p`
  font-size: 17px;
  font-weight: bold;
`;
