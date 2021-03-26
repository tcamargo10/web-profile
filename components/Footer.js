import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <GroupIcons>
        <h3>1</h3>
        <h3>2</h3>
        <h3>3</h3>
      </GroupIcons>
      <p>Copyright - 2021 Thiago Camargo, All Right Reserved</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: white;
`;

const GroupIcons = styled.div`
  display: flex;
`;
