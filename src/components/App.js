import Inicio from "../pages/Inicio";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Entrada from "../pages/Entrada";
import Saida from "../pages/Saida";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Salvar from "../context/Usuario"

export default function App() {
  return (
    <Salvar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nova-entrada" element={<Entrada />} />
        <Route path="/nova-saida" element={<Saida />} />
      </Routes>
    </BrowserRouter>
    </Salvar>
  );
}