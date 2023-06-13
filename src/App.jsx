import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  
  return (
    <>
      <Header />
      {/* <Home /> */}
      <About />
      <Footer />
    </>
  );
}

export default App;
