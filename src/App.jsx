import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={<Home />} />
          <Route path="/about" exact Component={<About />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
