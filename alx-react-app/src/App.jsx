import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
import Footer from "./components/layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
