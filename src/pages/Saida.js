import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Saida() {
  return (
    <Container>
      <Titulo>Nova saída</Titulo>
      <Form>
        <input placeholder="Valor" type="text" />
        <input placeholder="Descrição" type="text" />
        <Botao>Salvar saída</Botao>
      </Form>
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

  margin-top: 30px;
  margin-bottom: 40px;
  margin-left: 50px;

  font-family: "Raleway";
  font-size: 26px;
  color: #ffff;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;

  input {
    box-sizing: border-box;
    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    margin-bottom: 14px;
    padding: 0px 14px;
    font-family: "Raleway";
    font-size: 20px;
    color: #000000;
  }
  input::placeholder {
    font-family: "Raleway";
    font-size: 20px;
    color: #000000;
  }
`;

const Botao = styled.button`
  width: 326px;
  height: 46px;
  background-color: #a328d6;
  border: none;
  border-radius: 5px;
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
