import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Map from "./components/Map";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Map />
    </div>
  );
};

export default App;
