import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Logo from "./Component/Logo";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
import Faq from "./Component/Faq";
import Footer from "./Component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Logo />
      <Section1 />
      <Section2 />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
