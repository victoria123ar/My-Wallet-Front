import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import GlobalStyle from "./GlobalStyle";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);