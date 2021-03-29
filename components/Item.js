import React from "react";
import styled from "styled-components";

export default function Item({ dataItem }) {
  return (
    <>
      <Container>
        <ImageItem src={`/assets/svg/${dataItem.img}`} alt={dataItem.text} />
        <TextItem>{dataItem.text}</TextItem>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImageItem = styled.img`
  height: 80px;
  width: 100%;
`;

const TextItem = styled.p`
  font-size: 17px;
  font-weight: bold;
  word-break: break;

  @media (max-width: 1000px) {
    max-width: 100px;
  }
`;
