import styled from "styled-components";
import LaptopIcon from "@material-ui/icons/LaptopMac";

export default function Header() {
  return (
    <Container>
      <LaptopIcon style={{ color: "white", fontSize: 33 }} />
      <Menu>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#tools">Tools</a>
        <a href="#contact">Contact</a>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  a {
    color: white;
    margin-left: 40px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
  }
`;
