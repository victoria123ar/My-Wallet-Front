import styled from "styled-components";
import { Link } from "react-router-dom";
import Registros from "../components/Registros"

export default function Inicio() {
  return (
    <Container>
      <Titulo>
        <span>Olá, Fulano</span>
        <ion-icon name="log-out-outline"></ion-icon>
      </Titulo>
      < Registros />
      <Transacoes>
      <Entrada>
      <Link to="/Entrada" style={{ textDecoration: "none" }}>
      <ion-icon name="add-circle-outline"></ion-icon>
        <p>Nova entrada</p>
      </Link>
      </Entrada>
      <Saida>
      <Link to="/Saida" style={{ textDecoration: "none" }}>
      <ion-icon name="remove-circle-outline"></ion-icon>
        <p>Nova saída</p>
      </Link>
      </Saida>
      </Transacoes>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #8c11be;
`;

const Titulo = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 30px;
  margin-bottom: 20px;

  span {
    font-family: "Raleway";
    font-size: 26px;
    color: #ffff;
    font-weight: bold;

  }

  ion-icon{
    font-size: 26px;
  }
`;

const Transacoes = styled.div`
display: flex;

margin-top: 15px;
`

const Entrada = styled.div`
width: 155px;
height: 114px;

background-color: #A328D6;
border-radius: 5px;

margin-right: 15px;
padding: 10px;

ion-icon{
    font-size: 25px;
  }

  p{
    font-family: "Raleway";
    font-size: 17px;
    color: #ffff;
    font-weight: bold;

    margin-top: 35px;

    width: 64px;
  }
`

const Saida = styled.div`
width: 155px;
height: 114px;

background-color: #A328D6;
border-radius: 5px;

padding: 10px;

ion-icon{
    font-size: 25px;
  }

  p{
    font-family: "Raleway";
    font-size: 17px;
    color: #ffff;
    font-weight: bold;

    margin-top: 35px;

    width: 64px;
  }
`