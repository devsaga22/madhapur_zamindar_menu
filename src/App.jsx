import { useState } from "react";

import "./App.css";
import Header from "./components/header/Header";
import MenuDisplay from "./components/body/MenuDisplay";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <MenuDisplay />

        <Footer />
      </div>
    </>
  );
}

export default App;
