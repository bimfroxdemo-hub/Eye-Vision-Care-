import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHashElement from "./components/ScrollToHashElement";
import WhatsAppFloat from "./components/Whatsapp";
import EyeKnowledge from "./components/EyeEducation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHashElement />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eye-knowledge" element={<EyeKnowledge />} />
      </Routes>

      {/* 🔥 WHATSAPP FLOAT (GLOBAL) */}
      <WhatsAppFloat />

      <Footer />
    </BrowserRouter>
  );
};

export default App;