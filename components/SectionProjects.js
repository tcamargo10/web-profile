import React from "react";
import styled from "styled-components";

function SectionProjects({ ...rest }) {
  return (
    <Container {...rest}>
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
            src={"/assets/portifolio/grupo-sa.png"}
            alt="grupo sa"
          />
          <ContainerDetails>
            <TextProject>Grupo SA</TextProject>
            <DescriptionProject>
              Front-end: Software interno para controle de pedidos, cliente,
              orçamentos, histórico, contas, controle de produção, relatórios,
              entre outros.
            </DescriptionProject>
            <DescriptionProject>
              Html, Css, JS, React, RestAPI, Material UI, Context, GIT.
            </DescriptionProject>
          </ContainerDetails>
        </Project>

        <Project>
          <ImageProject src={"/assets/portifolio/oimba.png"} alt="oimba" />
          <ContainerDetails>
            <TextProject>Oimba</TextProject>
            <DescriptionProject>
              Front-end: Site institucional e painel administrativo interno para
              controle clientes, relatórios, pedidos, etc.
            </DescriptionProject>
            <DescriptionProject>
              Html, Css, JS, React, RestAPI, Bootstrap, GIT.
            </DescriptionProject>
          </ContainerDetails>
        </Project>

        <Project>
          <ImageProject
            src={"/assets/portifolio/netflix-clone.png"}
            alt="netflix clone"
          />
          <ContainerDetails>
            <TextProject>Netflix Clone</TextProject>
            <DescriptionProject>
              Desenvolvido para treinar conhecimentos de Html, Css e Reactjs
              tendo como modelo o site do Netflix. Utilizado como fonte de dados
              Site tmdb.com onde o sistema consome a API através da API_KEY.
            </DescriptionProject>
            <DescriptionProject>
              Html, Css, Material UI, React, StyledComp, RestAPI e GIT.
            </DescriptionProject>
          </ContainerDetails>
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
  margin: 90px 0px;
  max-width: 1200px;
`;

const AreaHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
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
  border-radius: 5px;
  align-items: center;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  height: 100%;
`;

const ImageProject = styled.img`
  height: 300px;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const TextProject = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin: 15px 0px;
`;

const ContainerDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const DescriptionProject = styled.p`
  font-size: 12px;
  padding: 0px 15px;
`;
