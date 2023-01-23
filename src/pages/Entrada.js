import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../context/Token";
import axios from "axios";

export default function Entrada() {

  const { jwt } = useContext(Token);
  const navigate = useNavigate();
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  
  if (!jwt) {
    navigate("/");
  }

  function entrada(e) {
    e.preventDefault();

    const postData = {
      valor: valor,
      decricao: descricao,
      tipo: tipo,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/transacoes`, postData)
      .then((resposta) => {
        setValor(resposta.data.valor);
        setDescricao(resposta.data.descricao);
        setTipo("entrada");
        navigate("/home");
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  }

  return (
    <Container>
      <Titulo>Nova entrada</Titulo>
      <Form onSubmit={(e) => entrada(e)}>
        <input placeholder="Valor" type="text" value={valor}
        onChange={(e) => setValor(e.target.value)}/>
        <input placeholder="Descrição" type="text" value={descricao}
        onChange={(e) => setDescricao(e.target.value)}/>
        <Botao>
          <Link to="/home" style={{ textDecoration: "none" }}>
            Salvar entrada
            </Link>
          </Botao>
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