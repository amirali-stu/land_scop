import "./styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import TopHeader from "./components/modules/Header/Top";
import NavHeader from "./components/modules/Header/Nav";

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <header>
      <TopHeader />
      <NavHeader />
    </header>

    <main>
      <App />
    </main>

    <footer></footer>
  </StrictMode>
);
