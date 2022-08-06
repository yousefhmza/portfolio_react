import React from "react";

import { Header, Footer, About, Work, Skills } from "./containers";

import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <section className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </section>
  );
};

export default App;
