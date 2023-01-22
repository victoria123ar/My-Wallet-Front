import styled from "styled-components";

export default function Registros() {
  return (
    <Container>
        <p>Não há registros de entrada ou saída</p>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: 326px;
  height: 446px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  border-radius: 5px;

  p {
    width: 180px;
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 400;
    color: #868686;
    text-align: center;
  }
`;
