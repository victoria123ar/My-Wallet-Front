import InputLogin from "../components/InputLogin";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <Container>
      <Titulo>MyWallet</Titulo>
      <InputLogin />
      <Link to="/cadastro" style={{ textDecoration: "none" }}>
      <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #8c11be;

  p {
    font-family: "Raleway";
    font-size: 15px;
    font-weight: bold;
    color: #ffff;

  }
`;

const Titulo = styled.h1`
  font-family: "Saira Stencil One";
  font-size: 32px;
  font-weight:400;
  color: #ffff;
  margin-bottom: 35px;
`;