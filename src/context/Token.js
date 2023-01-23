import { createContext, useState } from "react";

export const Token = createContext();

export default function TokenValidacao({ children }) {
  const [jwt, setJwt] = useState("");

  return (
    <Token.Provider value={{ jwt, setJwt }}>
      {children}
    </Token.Provider>
  );
}
