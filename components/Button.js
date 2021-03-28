import styled from "styled-components";

export default function Button({ children, link }) {
  return (
    <ContainerButton href={link} target="_blank">
      {children}
    </ContainerButton>
  );
}

const ContainerButton = styled.a`
  width: 150px;
  border: medium none;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  padding: 15px 0px;
  text-align: center;
  border-radius: 3px;
  background-color: #222;
  text-transform: uppercase;
  margin-top: 15px;
  text-decoration: none;

  :hover {
    background-color: #007bff;
  }

  @media (max-width: 600px) {
    padding: 10px 0px;
    width: 120px;
  }
`;
