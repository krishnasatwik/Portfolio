import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-x-hidden pt-20">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
