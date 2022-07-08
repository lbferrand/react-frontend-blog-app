import React from "react";
import { Brand, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatReact,
} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatReact />
      <Features />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
