import { createContext, useState } from "react";

export const Salvar = createContext();

export default function SalvarPagina({ children }) {
  const [salvar, setSalvar] = useState(false);

  return (
    <Salvar.Provider value={{ salvar, setSalvar }}>
      {children}
    </Salvar.Provider>
  );
}