import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ImputLogin(setUsuario) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [desabilitado, setDesabilitado] = useState(false);

  function login(e) {
    e.preventDefault();
    setDesabilitado(true);

    const postData = {
      email: email,
      password: senha,
    };

    axios
      .post("url", postData)
      .then((resposta) => {
        setUsuario(resposta.data.name);
        navigate("/home");
      })
      .catch((erro) => {
        alert(erro.response.data.message);
        setDesabilitado(false);
      });
  }
  return (
    <Form onSubmit={(e) => login(e)}>
      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={!desabilitado ? false : true}
      />
      <input
        placeholder="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        disabled={!desabilitado ? false : true}
      />
      <Botao disabled={!desabilitado ? false : true}>Entrar</Botao>
    </Form>
  );
}
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
