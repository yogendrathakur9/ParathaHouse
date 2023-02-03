import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import NavIcon from "./components/NavIcon";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-poppins bg-back">
      <Header />
      <NavIcon />
      <Home />
      <Recipe />
      <Footer />
    </div>
  );
};

export default App;
