import styled from "styled-components";

export default function Button({ childen }) {
  return <ContainerButton>{childen}</ContainerButton>;
}

const ContainerButton = styled.div`
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
`;
