import "./styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import TopHeader from "./components/modules/Header/Top";
import NavHeader from "./components/modules/Header/Nav";
import InfinitySlider from "./components/modules/Footer/InfinitySlider";
import AreUeoReady from "./components/modules/Footer/AreUeoReady";
import Footer from "./components/modules/Footer/Footer";
import Rules from "./components/modules/Footer/Rules";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header>
      <TopHeader />
      <NavHeader />
    </header>

    <main>
      <App />
    </main>

    <footer>
      <InfinitySlider />
      <AreUeoReady />
      <Footer />
      <Rules />
    </footer>
  </StrictMode>,
);
