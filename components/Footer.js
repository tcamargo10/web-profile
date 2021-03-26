import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

export default function Footer() {
  return (
    <Container>
      <GroupIcons>
        <IconButton
          target="_blank"
          href="https://www.linkedin.com/in/thiagorcamargo"
        >
          <LinkedInIcon style={{ color: "white", fontSize: 33 }} />
        </IconButton>
        <IconButton target="_blank" href="https://github.com/tcamargo10">
          <GitHubIcon style={{ color: "white", fontSize: 33 }} />
        </IconButton>
        <IconButton
          target="_blank"
          href="/assets/Thiago_Camargo_Resume_03_2021.pdf"
        >
          <InsertDriveFileIcon style={{ color: "white", fontSize: 33 }} />
        </IconButton>
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
  justify-content: space-around;
  padding: 10px;
  width: 220px;
`;

const IconButton = styled.a`
  :hover {
    svg {
      background-color: #007bff;
      border-radius: 5px;
    }
  }
`;
