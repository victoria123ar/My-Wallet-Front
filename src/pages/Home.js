import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../context/Token";
import { Salvar } from "../context/Usuario";
import axios from "axios";

export default function Inicio() {
  const [transacoes, setTransacoes] = useState([]);
  const [total, setTotal] = useState(0);
  const { jwt, setJwt } = useContext(Token);
  const { salvar } = useContext(Salvar);

  const navigate = useNavigate();

  useEffect(() => {
    const response = axios
      .get(`${process.env.REACT_APP_API_URL}/transacoes`,{
      })
      .then((resposta) => {
        setTransacoes(resposta.data.transacao);
        setTotal(resposta.data.transacao.valor_total)
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
      return response;
    })

    async function deslogar() {
      if (!jwt) {
        navigate("/signin");
      }
    }

    async function logout () {

    setJwt("");
    navigate("/signin");
  }

  useEffect(() => {
    deslogar();
  }, [salvar]);


  return (
    <Container>
      <Titulo>
        <span>Olá, Fulano</span>
        <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
      </Titulo>
      <Transacoes>
        {!transacoes ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          transacoes.map((transacao, index) => (
              <Transacao>
                key={index}
                <span>{transacao.data.substr(0, 5)}</span>
                <strong>{transacao.descricao}</strong>
              <Valor color={transacao.tipo}>R$ {transacao.valor}</Valor>
              </Transacao>
          ))
        )}
        <Saldo>
        <span>Saldo</span>
            <span>R$ {total}</span>
        </Saldo>
      </Transacoes>
      <Botoes>
        <Entrada>
          <Link to="/nova-entrada" style={{ textDecoration: "none" }}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>Nova entrada</p>
          </Link>
        </Entrada>
        <Saida>
          <Link to="/nova-saida" style={{ textDecoration: "none" }}>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>Nova saída</p>
          </Link>
        </Saida>
      </Botoes>
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

  ion-icon {
    font-size: 26px;
  }
`;

const Transacoes = styled.div`
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

const Transacao = styled.div``;

const Valor = styled.div`
  color: ${(props) => (props.color === "entrada" ? "green" : "red")};
`;

const Saldo = styled.div``;

const Botoes = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Entrada = styled.div`
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  margin-right: 15px;
  padding: 10px;

  ion-icon {
    font-size: 25px;
  }

  p {
    font-family: "Raleway";
    font-size: 17px;
    color: #ffff;
    font-weight: bold;
    margin-top: 35px;
    width: 64px;
  }
`;

const Saida = styled.div`
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  padding: 10px;

  ion-icon {
    font-size: 25px;
  }

  p {
    font-family: "Raleway";
    font-size: 17px;
    color: #ffff;
    font-weight: bold;
    margin-top: 35px;
    width: 64px;
  }
`;
