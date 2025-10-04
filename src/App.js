import React, { useState } from "react";
import './App.css'
import Home from "./Components/Home";
import Trustedby from "./Components/Trustedby";
import About from "./Components/About";
import Team from "./Components/Team";
import ProductLaunch from "./Components/ProductLaunch";
import FeaturedOn from "./Components/FeaturedOn";
import Footer from "./Components/Footer";

export default function App() {

  return (
    <div className="font-sans bg-gray-50 text-gray-800 scroll-smooth">
      {/* Body Sections */}
      <main>

        {/* Home Section */}
        <Home/>

        {/* Trusted by */}
        <Trustedby/>

        {/* About Section */}
        <About/>

        {/* Team */}
        <Team/>

        {/* Product Launch */}
        <ProductLaunch/>

        {/* Featured On Section */}
        <FeaturedOn/>
        
      </main>

      {/* Footer */}
      <Footer/>

    </div>
  );
}
