import styled from "styled-components";
import LaptopIcon from "@material-ui/icons/LaptopMac";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <Container>
      <LaptopIcon style={{ color: "white", fontSize: 33 }} />
      <AreaMenu>
        <AreaMenuIcon>
          <MenuIcon style={{ color: "white", fontSize: 33 }} />
        </AreaMenuIcon>
        <Menu>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact</a>
        </Menu>
      </AreaMenu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const AreaMenu = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
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

  @media (max-width: 900px) {
    display: none;
  }
`;

const AreaMenuIcon = styled(Button)`
  &&& {
    display: none;
  }

  @media (max-width: 900px) {
    &&& {
      display: flex;
    }
  }
`;
