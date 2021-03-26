import styled from "styled-components";

export default function SectionHome() {
  return <Container></Container>;
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("/assets/bg-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ::before {
    opacity: 0.5;
    background: #000 none repeat scroll 0 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;
