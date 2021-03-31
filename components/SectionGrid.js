import React from "react";
import styled from "styled-components";
import Item from "./Item.js";
export default function SectionSkills({
  data,
  TitleText,
  SubtitleText,
  ...rest
}) {
  return (
    <Container {...rest}>
      <AreaHeader>
        <Title>{TitleText}</Title>
        <SubTitle>{SubtitleText}</SubTitle>
      </AreaHeader>

      <ContainerItems>
        {data.map((dataItem, index) => (
          <Item key={index} dataItem={dataItem} />
        ))}
      </ContainerItems>
    </Container>
  );
}

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

const ContainerItems = styled.div`
  display: grid;
  padding: 20px 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
